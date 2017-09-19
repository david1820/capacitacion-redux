/*
 *
 * TodoList
 *
 */

import React from 'react';
import ProptTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TodoTable from 'components/TodoTable';
import DialogNewTodo from 'components/DialogNewTodo';
import makeSelectTodoList from './selectors';
import * as TodosActions from './actions';
import { Container, Title, FloatingButton } from './StyledComponents';

export class TodoList extends React.Component { // eslint-disable-line react/prefer-stateless-function

  handleOnChange = (event) => {
    const { handleChangeValueModal } = this.props;
    const { id, value } = event.target;
    handleChangeValueModal(id, value);
  }

  handleOnPressEdit = (index) => {
    const { handleEditTodoAction, handleChangeValueModal, TodoList: { todos } } = this.props;
    const todo = todos[index];
    handleChangeValueModal('titulo', todo.titulo);
    handleChangeValueModal('descripcion', todo.descripcion);
    handleEditTodoAction(true, index);
    this.handleTodoModal(true);
    // console.log('index', index);
    // console.log('user', userData);
  }

  handleOnAddTodo = () => {
    const { TodoList: { titulo, descripcion, todos, isDone }, setNewTodoAction } = this.props;
    const todoInput = { titulo, descripcion, isDone };
    const newTodos = todos;
    newTodos.push(todoInput);
    setNewTodoAction(todoInput);
    this.handleTodoModal(false);
  }

  handleOnEditTodo = () => {
    const { saveEditTodoAction } = this.props;
    saveEditTodoAction();
    this.handleTodoModal(false);
  }

  handleTodoModal = (isOpen) => {
    const { handleOpenTodoModal, handleChangeValueModal } = this.props;
    handleOpenTodoModal(isOpen);
    if (!isOpen) {
      handleChangeValueModal('titulo', '');
      handleChangeValueModal('descripcion', '');
    }
  }

  render() {
    const { TodoList: { todos, onEdit, open, titulo, descripcion }, setCheckValueAction } = this.props;
    return (
      <Container>
        <Title>Todos</Title>
        <TodoTable
          todos={todos}
          onCheckItem={setCheckValueAction}
          onPressEdit={this.handleOnPressEdit}
        />
        <FloatingButton onTouchTap={() => this.handleTodoModal(true)}>
          <ContentAdd />
        </FloatingButton>
        <DialogNewTodo
          open={open}
          edit={onEdit}
          title={titulo}
          description={descripcion}
          onPressClose={() => this.handleTodoModal(false)}
          onPressSave={() => this.handleOnAddTodo()}
          onChange={(e) => this.handleOnChange(e)}
          onPressEditSave={() => this.handleOnEditTodo()}
        />
      </Container>
    );
  }
}

TodoList.propTypes = {
  TodoList: ProptTypes.object,
  // Actions Creators
  setCheckValueAction: ProptTypes.func,
  handleChangeValueModal: ProptTypes.func,
  handleOpenTodoModal: ProptTypes.func,
  setNewTodoAction: ProptTypes.func,
  handleEditTodoAction: ProptTypes.func,
  saveEditTodoAction: ProptTypes.func,
};

const mapStateToProps = createStructuredSelector({
  TodoList: makeSelectTodoList(),
});

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators(TodosActions, dispatch);
  return {
    dispatch,
    ...actions,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
