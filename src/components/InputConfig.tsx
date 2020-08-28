import React, { useState } from 'react';
import { TextArea, StyledButton } from './styled';

const elementMap = {
  button: {
    type: 'button' as const
  },
  input: {
    type: 'input' as const,
    subtypes: ['text', 'number'] as const
  }
};
type Button = {
  type: typeof elementMap.button.type;
  label?: string;
  innerText?: string;
};
type Input = {
  type: typeof elementMap.input.type;
  label?: string;
  subtype: typeof elementMap.input.subtypes[number];
};

type Elements = Button | Input;

interface Config {
  items: Elements[];
}

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
    console.log('config', configObj);
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
        console.log('');
        setErrorMessage(`no such element ${item.type}`);
        return false;
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
