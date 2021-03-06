import styled from 'styled-components';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  padding: 24px;
  background-color: #FAFAFA;
`;

export const Title = styled.div`
  font-family: Roboto;
  font-size: 24px;
  font-weight: 600;
  color: #4f4f4f;
`;

export const Card = styled(Paper)`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 24px;
  width: 70%;
  margin-top: 16px;
`;

export const Text = styled.div`
  font-size: 16px;
  text-align: left;
  color: #424242;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 25%;
  margin-bottom: 24px;
`;

export const TextInput = styled(TextField)`

`;
