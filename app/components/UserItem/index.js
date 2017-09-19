/**
*
* TodoItem
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui/svg-icons/image/edit';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

function TodoItem({ nombre, correo, fechaNacimiento, onPressEdit }) {
  return (
    <TableRow>
      <TableRowColumn>{nombre}</TableRowColumn>
      <TableRowColumn>{correo}</TableRowColumn>
      <TableRowColumn>{fechaNacimiento}</TableRowColumn>
      <TableRowColumn>
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
  nombre: PropTypes.string,
  correo: PropTypes.string,
  fechaNacimiento: PropTypes.string,
  onPressEdit: PropTypes.func,
};

export default TodoItem;
