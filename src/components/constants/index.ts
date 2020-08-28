export const elementMap = {
  button: {
    type: 'button' as const
  },
  input: {
    type: 'input' as const,
    subtypes: ['text', 'number'] as const
  }
};
export type Button = {
  type: typeof elementMap.button.type;
  label?: string;
  innerText?: string;
};
export type Input = {
  type: typeof elementMap.input.type;
  label?: string;
  subtype: typeof elementMap.input.subtypes[number];
};

export type Elements = Button | Input;

export interface Config {
  items: Elements[];
}
