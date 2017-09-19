/*
 *
 * Users
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { graphql, compose } from 'react-apollo';
import { createStructuredSelector } from 'reselect';
import ContentAdd from 'material-ui/svg-icons/content/add';
import UsersTable from 'components/UserTable';
import DialogNewUser from 'components/DialogNewUser';
import makeSelectUsers from './selectors';
import * as UsersActions from './actions';
import { usersQuery, addUserMutation, editUserMutation } from './queries';
import { Container, Title, FloatingButton } from './StyledComponents';


export class Users extends React.Component { // eslint-disable-line react/prefer-stateless-function

  handleOnPressEdit = (index) => {
    const { handleEditUserModal, handleChangeValueModal, data: { users } } = this.props;
    const userData = users[index];
    handleChangeValueModal('name', userData.nombre);
    handleChangeValueModal('email', userData.correo);
    handleChangeValueModal('birthday', userData.fechaNacimiento);
    handleEditUserModal(true, userData.id);
    this.handleUserModal(true);
    // console.log('index', index);
    // console.log('user', userData);
  }

  handleOnAddUser = async () => {
    const { addUser, Users: { name, email, birthday } } = this.props;
    const userInput = { name, email, birthday };
    try {
      const user = await addUser({ variables: { userInput } });
      this.handleUserModal(false);
      console.log(user);
    } catch (e) {
      console.log(e);
    }
  }

  handleOnEditUser = async () => {
    const { editUser, Users: { name, email, birthday, id } } = this.props;
    const userid = id;
    const userInput = { name, email, birthday };
    try {
      const user = await editUser({ variables: { userid, userInput } });
      this.handleUserModal(false);
      console.log(user);
    } catch (e) {
      console.log(e);
    }
  }

  handleUserModal = (isOpen) => {
    const { handleNewUserModal, handleEditUserModal, handleChangeValueModal } = this.props;
    handleNewUserModal(isOpen);
    if (!isOpen) {
      handleEditUserModal(false, '');
      handleChangeValueModal('name', '');
      handleChangeValueModal('email', '');
      handleChangeValueModal('birthday', '');
    }
  }

  handleOnChange = (event) => {
    const { handleChangeValueModal } = this.props;
    const { id, value } = event.target;
    handleChangeValueModal(id, value);
  }

  render() {
    const { Users: { open, onEdit, name, email, birthday }, data: { users, loading } } = this.props;
    return (
      <Container>
        <Title>Usuarios</Title>
        <UsersTable
          users={users}
          isLoading={loading}
          onPressEdit={this.handleOnPressEdit}
        />
        <FloatingButton onTouchTap={() => this.handleUserModal(true)}>
          <ContentAdd />
        </FloatingButton>
        <DialogNewUser
          open={open}
          name={name}
          email={email}
          birthday={birthday}
          edit={onEdit}
          onPressClose={() => this.handleUserModal(false)}
          onPressSave={() => this.handleOnAddTodo()}
          onPressEdit={() => this.handleOnEditTodo()}
          onChange={(e) => this.handleOnChange(e)}
        />
      </Container>
    );
  }
}

Users.propTypes = {
  Users: PropTypes.object,
  data: PropTypes.object,
  addUser: PropTypes.func,
  editUser: PropTypes.func,
  // Redux-Actions
  handleNewUserModal: PropTypes.func,
  handleChangeValueModal: PropTypes.func,
  handleEditUserModal: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  Users: makeSelectUsers(),
});

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators(UsersActions, dispatch);
  return {
    dispatch,
    ...actions,
  };
}

const usersWithData = compose(
    graphql(usersQuery),
    graphql(addUserMutation, { name: 'addUser' }),
    graphql(editUserMutation, { name: 'editUser' })
)(Users);

export default connect(mapStateToProps, mapDispatchToProps)(usersWithData);
