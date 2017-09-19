/**
*
* TodoTable
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import UserItem from 'components/UserItem';
import UserHeader from 'components/UserHeader';
import {
  Table,
  TableBody,
  TableHeader,
} from 'material-ui/Table';

class TodoTable extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { users, onPressEdit, isLoading } = this.props;
    if (isLoading) {
      return (
        <CircularProgress />
      );
    }
    const items = users.map(({ id, nombre, correo, fechaNacimiento }, index) => (
      <UserItem
        key={index}
        onPressEdit={() => onPressEdit(index)}
        nombre={nombre}
        correo={correo}
        fechaNacimiento={fechaNacimiento}
      />
    ));
    return (
      <Table
        selectable={false}
        multiSelectable={false}
      >
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <UserHeader />
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {items}
        </TableBody>
      </Table>
    );
  }
}

TodoTable.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
  onPressEdit: PropTypes.func,
  isLoading: PropTypes.bool,
};

TodoTable.defaultProps = {
  users: [],
  onPressEdit: () => {},
};

export default TodoTable;
