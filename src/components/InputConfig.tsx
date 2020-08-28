import React, { useState } from 'react';
import { TextArea, StyledButton } from './styled';
import { Config, elementMap } from './constants';
import { validateInput } from './itemValidators';
interface Props {
  setupConfig: (config: string) => void;
}
export default ({ setupConfig }: Props) => {
  const [textAreaValue, setTextAreaValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleTextAreaChange = (event: any) => {
    setTextAreaValue(event.target.value);
  };

  const applyConfig = () => {
    const configObj = transformToObj(textAreaValue);

    if (!configObj) {
      return;
    }
    if (!validateConfig(configObj)) {
      return;
    }
  };

  const transformToObj = (configText: string): Config | undefined => {
    try {
      return eval(`[${configText}]`)[0];
    } catch (error) {
      setErrorMessage(error.message);
      return;
    }
  };

  const validateConfig = ({ items }: Config): boolean => {
    if (!items) {
      setErrorMessage('items are not defined');
      return false;
    }

    if (!Array.isArray(items)) {
      return false;
    }

    for (const item of items) {
      if (!elementMap[item.type]) {
        setErrorMessage(`no such element ${item.type}`);
        return false;
      }

      if (item.type === 'input') {
        const inputValidation = validateInput(item);
        if (!inputValidation.validation) {
          setErrorMessage(inputValidation.errorMessage);
          return false;
        }
      }
    }

    return true;
  };

  return (
    <>
      <TextArea value={textAreaValue} onChange={handleTextAreaChange} />

      <StyledButton
        onClick={applyConfig}
        style={{ marginLeft: 200, marginTop: 50, marginBottom: 50 }}
      >
        Apply
      </StyledButton>
      {errorMessage && <div>{errorMessage}</div>}
    </>
  );
};
