import React from 'react';
import { ItemButton, ItemInput, ItemTextArea } from '../styled';
import { Button, TextArea, Input } from '../constants';

export const createButton = (item: Button): JSX.Element => {
  return <ItemButton>{item.innerText}</ItemButton>;
};

export const createTextArea = (item: TextArea): JSX.Element => {
  return <ItemTextArea defaultValue={item.value} />;
};

export const createInput = (item: Input): JSX.Element => {
  let defaultValue = item.subtype.value;
  if (item.subtype.type === 'date' && defaultValue) {
    defaultValue = new Date(defaultValue).toISOString().split('T')[0];
  }

  return (
    <ItemInput
      type={item.subtype.type}
      defaultValue={defaultValue}
      defaultChecked={!!defaultValue}
    />
  );
};
