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
