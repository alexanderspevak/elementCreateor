export const ItemMap = {
  button: {
    type: 'button' as const
  },
  input: {
    type: 'input' as const,
    subtypes: ['text', 'number', 'button', 'date', 'checkbox', 'radio'] as const
  },
  textarea: {
    type: 'textarea' as const
  }
};

export type Button = {
  type: typeof ItemMap.button.type;
  label?: string;
  innerText?: string;
};

export type Input = {
  type: typeof ItemMap.input.type;
  label?: string;
  subtype: {
    type: typeof ItemMap.input.subtypes[number];
    value?: number | string;
  };
};

export type TextArea = {
  type: typeof ItemMap.textarea.type;
  label?: string;
  value?: number | string;
};

export type Items = Button | Input | TextArea;

export interface Config {
  items: Items[];
}
