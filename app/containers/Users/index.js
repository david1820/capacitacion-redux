/*
 *
 * Users
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import ContentAdd from 'material-ui/svg-icons/content/add';
import UsersTable from 'components/UserTable';
import DialogNewUser from 'components/DialogNewUser';
import makeSelectUsers from './selectors';
import * as UsersActions from './actions';
import { usersQuery, addUserMutation } from './queries';
import { Container, Title, FloatingButton } from './StyledComponents';

export class Users extends React.Component { // eslint-disable-line react/prefer-stateless-function
  handleOnPressEdit = (/* index */) => {}
  handleOnAddUser = async () => {
    const { addUser } = this.props;
    try {
      const userInput = { email: 'david', name: 'david' };
      const user = await addUser({ variables: { userInput } });
      console.log('====================================');
      console.log(user);
      console.log('====================================');
    } catch (error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
    }
  };
  render() {
    const { Users: { open }, handleNewUserModal, data: { users, loading } } = this.props;
    return (
      <Container>
        <Title>Usuarios</Title>
        <UsersTable
          users={users}
          isLoading={loading}
          onPressEdit={this.handleOnPressEdit}
        />
        <FloatingButton onTouchTap={() => handleNewUserModal(true)}>
          <ContentAdd />
        </FloatingButton>
        <DialogNewUser
          open={open}
          onPressClose={() => handleNewUserModal(false)}
          onPressSave={() => {}}
        />
      </Container>
    );
  }
}

Users.propTypes = {
  Users: PropTypes.object,
  data: PropTypes.object,
  addUser: PropTypes.func,
  // Redux-Actions
  handleNewUserModal: PropTypes.func,
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

const UsersWithData = compose(
  graphql(usersQuery),
  graphql(addUserMutation, { name: 'addUser' })
)(Users);

export default connect(mapStateToProps, mapDispatchToProps)(UsersWithData);
