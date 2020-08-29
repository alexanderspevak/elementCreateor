import React, { useState } from 'react';
import { TextArea, StyledButton, Warning } from './styled';
import { Config, ItemMap } from './constants';
import { validateInput } from './itemValidators';

interface Props {
  setupConfig: (config: Config) => void;
  setTextAreaValue: Function;
  textAreaValue: string;
}

export default ({ setupConfig, setTextAreaValue, textAreaValue }: Props) => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleTextAreaChange = (event: any) => {
    setTextAreaValue(event.target.value);
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  const applyConfig = () => {
    const configObj = transformToObj(textAreaValue);

    if (!configObj) {
      return;
    }
    if (!validateConfig(configObj)) {
      return;
    }

    setupConfig(configObj);
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
      if (!item) {
        continue;
      }
      if (!ItemMap[item.type]) {
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
        style={{ marginLeft: 200, marginTop: 50 }}
      >
        Apply
      </StyledButton>
      {errorMessage && <Warning>{errorMessage}</Warning>}
    </>
  );
};
