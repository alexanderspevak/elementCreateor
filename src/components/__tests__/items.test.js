import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

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

afterEach(() => {
  wrapped.unmount();
});

it('has a text area and a 2buttons', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(3);
});

it('has a text area and a 2buttons', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(3);
});

it('renders a text input', () => {
  textArea.simulate('change', {
    target: {
      value: `{items:[
        {type:'input',label:'text',subtype:{
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
        {type:'button',label:'button',innerText: 'new button'}
        ]}`
    }
  });

  applyButton.simulate('click');
  resultButton.simulate('click');

  const renderedButton = wrapped.find('button').at(2);

  expect(renderedButton.text()).toEqual('new button');
});

it('renders a textArea', () => {
  textArea.simulate('change', {
    target: {
      value: `{items:[
        {type:'textarea',label:'textArea',value: 'new text'}
        ]}`
    }
  });

  applyButton.simulate('click');
  resultButton.simulate('click');

  const renderedTextArea = wrapped.find('textarea').first();

  expect(renderedTextArea.prop('defaultValue')).toEqual('new text');
});

it('renders a checked checkbox', () => {
  textArea.simulate('change', {
    target: {
      value: `{items:[
        {type:'input',label:'checkbox',subtype:{
        type:'checkbox',value:true
        }}
        ]}`
    }
  });

  applyButton.simulate('click');
  resultButton.simulate('click');

  const resultInput = wrapped.find('input');

  expect(resultInput.prop('defaultChecked')).toEqual(true);
});

it('renders a date input', () => {
  textArea.simulate('change', {
    target: {
      value: `{items:[
        {type:'input',label:'date',subtype:{
        type:'date',value:'2020-12-20'
        }}
        ]}`
    }
  });

  applyButton.simulate('click');
  resultButton.simulate('click');

  const resultInput = wrapped.find('input');

  expect(resultInput.prop('defaultValue')).toEqual('2020-12-20');
});

it('renders an error message', () => {
  textArea.simulate('change', {
    target: {
      value: `{}`
    }
  });

  applyButton.simulate('click');

  expect(wrapped.text()).toContain('items are not defined');
});
