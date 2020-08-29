import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import ConfigInput from '../ConfigInput';
import Items from '../Items';

let wrapped;
let applyButton;
let resultButton;
let textArea;

beforeEach(() => {
  wrapped = mount(<App />);
  const buttons = wrapped.find('button');
  applyButton = buttons.at(2);
  resultButton = buttons.at(1);
  textArea = wrapped.find('textarea').at(0);
});

it('has a text area and a 2buttons', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(3);
});

it('has a text area and a 2buttons', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(3);
});

it('has renders a text input', () => {
  textArea.simulate('change', {
    target: {
      value: `{items:[
        {type:'input',label:'date',subtype:{
        type:'text',value:'new text'
        }}
        ]}`
    }
  });

  applyButton.simulate('click');
  resultButton.simulate('click');

  const resultInput = wrapped.find('input');

  expect(resultInput.prop('defaultValue')).toEqual('new text');
});

it('renders a button', () => {
  textArea.simulate('change', {
    target: {
      value: `{items:[
        {type:'button',label:'date',innerText: 'new text'}
        ]}`
    }
  });

  applyButton.simulate('click');
  resultButton.simulate('click');

  const renderedButton = wrapped.find('button').at(2);

  expect(renderedButton.text()).toEqual('new text');
});

// it('renders a textArea', () => {
//   textArea.simulate('change', {
//     target: {
//       value: `{items:[
//         {type:'button',label:'date',innerText: 'new text'}
//         ]}`
//     }
//   });

//   applyButton.simulate('click');
//   resultButton.simulate('click');

//   const renderedButton = wrapped.find('button').at(2);

//   expect(renderedButton.text()).toEqual('new text');
// });
