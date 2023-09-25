import styled from '@emotion/styled';

const Container = styled.button`
  border: 0;
  color: #ffffff;
  background-color: #bda5c3;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;

  &:hover {
    background-color: #bda5c3;
    opacity: 0.8;
  }

  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

interface Props {
  readonly label: string;
  readonly onClick: () => void;
}

export const Button = (props: Props) => {
  return <Container onClick={props.onClick}>{props.label}</Container>;
};
