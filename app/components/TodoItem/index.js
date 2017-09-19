/**
*
* TodoItem
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui/svg-icons/image/edit';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

function TodoItem({ titulo, descripcion, isDone, onCheck, onPressEdit }) {
  return (
    <TableRow>
      <TableRowColumn>{titulo}</TableRowColumn>
      <TableRowColumn>{descripcion}</TableRowColumn>
      <TableRowColumn>
        <Checkbox
          checked={isDone}
          onCheck={onCheck}
        />
      </TableRowColumn>
      <TableRowColumn>
        <IconButton onTouchTap={onPressEdit}>
          <EditIcon />
        </IconButton>
      </TableRowColumn>
    </TableRow>
  );
}

TodoItem.propTypes = {
  titulo: PropTypes.string,
  descripcion: PropTypes.string,
  isDone: PropTypes.bool,
  onCheck: PropTypes.func,
  onPressEdit: PropTypes.func,
};

export default TodoItem;
