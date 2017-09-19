/**
*
* DialogNewUser
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

function DialogNewUser({ open, onPressClose, onPressSave, onPressEdit, onChange, name, email, birthday, edit }) {
  const buttonAction = edit ? onPressEdit : onPressSave;

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
      title="Usuario"
      actions={actions}
      modal={false}
      open={open}
      onRequestClose={onPressClose}
    >
      <div>
        <TextField
          id="name"
          hintText="Nombre"
          value={name}
          style={{ marginRight: 16 }}
          onChange={(e) => onChange(e)}
        />
        <TextField
          id="email"
          hintText="Correo"
          value={email}
          onChange={(e) => onChange(e)}
        />
        <TextField
          id="birthday"
          hintText="Cumpleaños"
          value={birthday}
          onChange={(e) => onChange(e)}
        />
      </div>
    </Dialog>
  );
}

DialogNewUser.propTypes = {
  open: PropTypes.bool,
  onPressClose: PropTypes.func,
  onPressSave: PropTypes.func,
  onPressEdit: PropTypes.func,
  onChange: PropTypes.func,
  name: PropTypes.string,
  email: PropTypes.string,
  birthday: PropTypes.string,
  edit: PropTypes.bool,
};

DialogNewUser.defaultProps = {
  onPressClose: () => {},
  onPressSave: () => {},
  name: '',
  email: '',
  birthday: '',
  edit: false,
};

export default DialogNewUser;
