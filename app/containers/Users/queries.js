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
  query GetUserByID($userid: String!){
    user(id: $userid) {
      email
      name
    }
  }
`;

export const addUserMutation = gql`
  mutation AddUser($userInput: UserInput!){
    AddUser(input: $userInput) {
      id
    }
  }
`;

export const editUserMutation = gql`
  mutation updateUser($userid: ID! ,$userInput: UserInput!){
    UpdateUser(id: $userid, input: $userInput) {
      id
      nombre: name
      correo: email
      fechaNacimiento: birthday
    }
  }
`;
