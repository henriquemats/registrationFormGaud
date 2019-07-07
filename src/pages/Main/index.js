import React, { Component } from 'react';

import { Container, Logo, Form } from './styles';

import logo from '../../assets/logo.svg';

export default class Main extends Component {
  state = {
    username: '',
    userPassword: '',
    confirmUserPassword: '',
    errorNumberOfCharacters: null,
    errorUpperCase: null,
    errorNumber: null,
    statusColor: {
      firstProgressBar: {
        color: '',
        status: false,
      },
      secondaProgressBar: {
        color: '',
        status: false,
      },
      thirdProgressBar: {
        color: '',
        status: false,
      },
    },
  };

  updateProgressBar = () => {
    const { errorNumberOfCharacters, errorUpperCase, errorNumber } = this.state;
    const setOferrors = [errorNumberOfCharacters, errorUpperCase, errorNumber];
    let numberOfHits = 0;

    setOferrors.map(async (error) => {
      if (error === false) {
        numberOfHits += 1;
      }
      console.tron.log(numberOfHits);

      if (numberOfHits === 1) {
        console.tron.log(numberOfHits);

        await this.setState({
          statusColor: {
            firstProgressBar: { color: '#F00' },
            secondaProgressBar: { color: '' },
            thirdProgressBar: { color: '' },
          },
        });
      } else if (numberOfHits === 2) {
        console.tron.log(numberOfHits);

        await this.setState({
          statusColor: {
            firstProgressBar: { color: '#ffd600' },
            secondaProgressBar: { color: '#ffd600' },
            thirdProgressBar: { color: '' },
          },
        });
      } else if (numberOfHits === 3) {
        console.tron.log(numberOfHits);

        await this.setState({
          statusColor: {
            firstProgressBar: { color: '#00c853' },
            secondaProgressBar: { color: '#00c853' },
            thirdProgressBar: { color: '#00c853' },
          },
        });
      }
    });
  };

  validateNumberOfCharacters = async () => {
    const { userPassword } = this.state;

    if (userPassword.length < 6) {
      await this.setState({
        errorNumberOfCharacters: true,
      });
    } else {
      await this.setState({
        errorNumberOfCharacters: false,
      });
      this.updateProgressBar();
    }
  };

  validateNumberOfUppercaseLetters = async () => {
    const { userPassword } = this.state;

    if (userPassword.search(/[A-Z]/) < 0) {
      await this.setState({
        errorUpperCase: true,
      });
    } else {
      await this.setState({ errorUpperCase: false });
      this.updateProgressBar();
    }
  };

  validNumberOfNumbers = async () => {
    const { userPassword } = this.state;

    if (userPassword.search(/[0-9]/) < 0) {
      await this.setState({ errorNumber: true });
    } else {
      await this.setState({ errorNumber: false });
      this.updateProgressBar();
    }
  };

  formValidation = () => {
    this.validateNumberOfCharacters();
    this.validateNumberOfUppercaseLetters();
    this.validNumberOfNumbers();
  };

  handleInputUserPasswordChange = async (e) => {
    await this.setState({ userPassword: e.target.value });

    this.formValidation();
  };

  render() {
    const {
      username,
      userPassword,
      confirmUserPassword,
      errorNumberOfCharacters,
      errorUpperCase,
      errorNumber,
      statusColor,
    } = this.state;

    return (
      <Container>
        <Logo src={logo} alt="gaud" />

        <Form
          errorNumberOfCharacters={errorNumberOfCharacters}
          errorUpperCase={errorUpperCase}
          errorNumber={errorNumber}
        >
          <div>
            <label>Nome</label>
            <input
              type="text"
              onChange={e => this.setState({ username: e.target.value })}
              value={username}
            />
          </div>

          <div>
            <label>Senha</label>
            <input
              type="password"
              onChange={e => this.handleInputUserPasswordChange(e)}
              value={userPassword}
            />
          </div>

          <div className="progress-bar">
            <div style={{ background: statusColor.firstProgressBar.color }} />
            <div style={{ background: statusColor.secondaProgressBar.color }} />
            <div style={{ background: statusColor.thirdProgressBar.color }} />
          </div>

          <ul>
            <li>Pelo menos 6 caracteres</li>
            <li>Pelo menos 1 letra maiúscula</li>
            <li>Pelo menos 1 número</li>
          </ul>

          <div>
            <label>Confirme sua senha</label>
            <input
              type="password"
              value={confirmUserPassword}
              onChange={e => this.setState({ confirmUserPassword: e.target.value })}
            />
          </div>

          <button type="button">CADASTRAR</button>
        </Form>
      </Container>
    );
  }
}
