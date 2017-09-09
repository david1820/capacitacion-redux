import gql from 'graphql-tag';

export const usersQuery = gql`
  query GetUsers {
    users {
      id
      correo: email
      nombre: name
      fechaNacimiento: birthday
    }
  }
`;

export const userById = gql`
  query GetUserById($userId: String!) {
    user(id: $userId) {
      id
      email
      name
    }
  }
`;

export const addUserMutation = gql`
  mutation AddUser($userInput: UserInput!) {
    AddUser(input: $userInput) {
      id
    }
  }
`;

