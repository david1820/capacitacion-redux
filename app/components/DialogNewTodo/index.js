/**
*
* DialogNewTodo
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

function DialogNewTodo({ open, onPressClose, onPressSave, onPressEditSave, onChange, edit, title, description }) {
  const buttonAction = edit ? onPressEditSave : onPressSave;

  const actions = [
    <FlatButton
      label="Cancelar"
      primary
      onClick={onPressClose}
    />,
    <FlatButton
      label="Guardar"
      primary
      keyboardFocused
      onClick={buttonAction}
    />,
  ];
  return (
    <Dialog
      title="Todo"
      actions={actions}
      modal={false}
      open={open}
      onRequestClose={onPressClose}
    >
      <div>
        <TextField
          id="titulo"
          hintText="Titulo"
          value={title}
          style={{ marginRight: 16 }}
          onChange={(e) => onChange(e)}
        />
        <TextField
          id="descripcion"
          hintText="descripcion"
          value={description}
          onChange={(e) => onChange(e)}
        />
      </div>
    </Dialog>
  );
}

DialogNewTodo.propTypes = {
  open: PropTypes.bool,
  onPressClose: PropTypes.func,
  onPressSave: PropTypes.func,
  onPressEditSave: PropTypes.func,
  onChange: PropTypes.func,
  edit: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

DialogNewTodo.defaultProps = {
  onPressClose: () => {},
  onPressSave: () => {},
  edit: false,
};

export default DialogNewTodo;
