import styled from 'styled-components';

export const TabHolder = styled.div`
  overflow: hidden;
`;

type TabButtonProps = { active: boolean };
export const TabButton = styled.button`
  background-color: ${({ active }: TabButtonProps) =>
    active ? '#ccc' : 'inherit'};
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  width: 200px;
  border-radius: 15px 15px 0px 0px;
  font-size: 12px;
  &:hover {
    background-color: #ddd;
  }
`;

export const ContentHolder = styled.div`
  width: 500px;
  height: 600px;
  border: 1px solid black;
  text-align: center;
`;

export const TextArea = styled.textarea`
  height: 400px;
  width: 400px;
  margin: auto;
  margin-top: 20px;
`;

export const StyledButton = styled.button`
  background-color: #ccc;
  width: 150px;
  border-radius: 5px 5px 5px 5px;
`;

export const Warning = styled.div`
  background-color: red;
  font-size: 20px;
  color: white;
`;

export const ItemLabel = styled.label`
  text-align: center;
  padding-right: 50px;
`;

export const ItemButton = styled.button`
  height: 20px;
  flex: 0 0 200px;
  margin-left: 50px;
`;

export const ItemInput = styled.input`
  height: 20px;
  flex: 0 0 200px;
  margin-left: 50px;
`;

export const ItemTextArea = styled.textarea`
  height: 20px;
  flex: 0 0 200px;
  margin-left: 50px;
`;

export const ItemContainer = styled.div`
  flex: 1;
  padding-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
`;

export const ItemsContainer = styled.div`
  height: 400px;
  width: 400px;
  margin: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  border: 1px solid black;
`;
