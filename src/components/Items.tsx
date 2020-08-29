import React from 'react';
import { Config } from './constants';
import { createTextArea, createButton, createInput } from './itemCreators';
import {
  ItemLabel,
  ItemContainer,
  ItemsContainer,
  StyledButton
} from './styled';

interface Props {
  config: Config;
  setTextAreaValue: (configString: string) => void;
  setConfig: (config: Config) => void;
}

export default ({ config: { items }, setTextAreaValue, setConfig }: Props) => {
  let index = 0;
  const renderItems = (items: Config['items']): JSX.Element[] => {
    return items.map(item => {
      return (
        <ItemContainer id='resultContainer' key={index++}>
          <ItemLabel>{item.label}</ItemLabel>
          {item.type === 'button' && createButton(item)}
          {item.type === 'input' && createInput(item)}
          {item.type === 'textarea' && createTextArea(item)}
        </ItemContainer>
      );
    });
  };

  const handleButtons = () => {
    setTextAreaValue('');
    setConfig({ items: [] });
  };

  return (
    <>
      <ItemsContainer id='overflow'>{renderItems(items)} </ItemsContainer>
      <StyledButton
        style={{ float: 'left', marginTop: 50, marginLeft: 120 }}
        onClick={handleButtons}
      >
        Apply
      </StyledButton>
      <StyledButton
        onClick={handleButtons}
        style={{ float: 'left', marginTop: 50, marginLeft: 20 }}
      >
        Cancel
      </StyledButton>
    </>
  );
};
