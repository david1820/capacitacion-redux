/*
 *
 * Home
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { createStructuredSelector } from 'reselect';
import makeSelectHome from './selectors';
import * as HomeActions from './actions';
import { Container, Title, Card, Text, Row, TextInput, ButtonsContainer } from './StyledComponents';

export class Home extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    value: 0,
  }
  handleSumar = () => {
    const { Home: { contador }, setCountAction } = this.props;
    setCountAction(contador + 1);
  }
  handleUpdateName = (event, text) => {
    const { setNameAction } = this.props;
    setNameAction(text);
  }
  render() {
    const { Home: { contador } } = this.props;
    return (
      <Container>
        <Title>Capacitación Redux</Title>
        <Card>
          <Row>
            <Text>Contador: </Text>
            <Text>{contador}</Text>
          </Row>
          <ButtonsContainer>
            <RaisedButton label="Restar" />
            <RaisedButton label="Sumar" onTouchTap={this.handleSumar} />
          </ButtonsContainer>
          <TextInput
            id="input-text"
            placeholder="Nombre"
            onChange={this.handleUpdateName}
          />
          <SelectField
            floatingLabelText="Puesto"
            value={this.state.value}
            onChange={(event, value) => this.setState({ value })}
          >
            <MenuItem value={0} primaryText="Desarrollador" />
            <MenuItem value={1} primaryText="Diseñador" />
            <MenuItem value={2} primaryText="Analista" />
            <MenuItem value={3} primaryText="Tester" />
          </SelectField>
        </Card>
      </Container>
    );
  }
}

Home.propTypes = {
  Home: PropTypes.object,
  // Actions creators
  setCountAction: PropTypes.func,
  setNameAction: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  Home: makeSelectHome(),
});

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators(HomeActions, dispatch);
  return {
    dispatch,
    ...actions,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
