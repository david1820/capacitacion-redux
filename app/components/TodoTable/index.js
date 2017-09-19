/**
*
* TodoTable
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from 'components/TodoItem';
import TodoHeader from 'components/TodoHeader';
import {
  Table,
  TableBody,
  TableHeader,
} from 'material-ui/Table';

class TodoTable extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  handleOnCheckItem = (index) => {
    const { onCheckItem } = this.props;
    onCheckItem(index);
  }
  render() {
    const { todos, onPressEdit } = this.props;
    const items = todos.map(({ titulo, descripcion, isDone }, index) => (
      <TodoItem
        key={index}
        onCheck={() => this.handleOnCheckItem(index)}
        titulo={titulo}
        descripcion={descripcion}
        isDone={isDone}
        onPressEdit={() => onPressEdit(index)}
      />
    ));
    return (
      <Table
        selectable={false}
        multiSelectable={false}
      >
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TodoHeader />
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {items}
        </TableBody>
      </Table>
    );
  }
}

TodoTable.propTypes = {
  onCheckItem: PropTypes.func,
  todos: PropTypes.arrayOf(PropTypes.object),
  onPressEdit: PropTypes.func,
};

TodoTable.defaultProps = {
  todos: [],
  onCheckItem: () => {},
};

export default TodoTable;
