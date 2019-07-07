import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 50px;
`;

export const Logo = styled.img`
  width: 140px;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 310px;
  margin-top: 25px;

  display: flex;
  flex-direction: column;

  div:not(.progress-bar) {
    margin-top: 25px;

    display: flex;
    flex-direction: column;
  }

  .progress-bar {
    display: flex;
    flex-direction: row;

    margin-top: 5px;
    height: 6px;
    width: 100%;
    div {
      height: 100%;
      width: 100%;
      background: #d3d3d3;
      margin: 3px;
    }
  }

  label {
    font-size: 14px;
  }

  input {
    width: 100%;
    height: 40px;
    padding: 0 15px;
    margin-top: 6px;
    background: #fff;
    border: 1px solid #e0e0e0;
    font-size: 14px;
    color: #000;
    border-radius: 4px;
  }

  ul {
    margin-top: 10px;
    li {
      font-size: 13px;
      font-weight: normal;
      padding: 3px 0px;
      margin-left: 5%;
      &:nth-child(1) {
        color: ${props => (props.errorNumberOfCharacters === null
    ? '#757575'
    : props.errorNumberOfCharacters
      ? '#F00'
      : '#00c853')};
      }
      &:nth-child(2) {
        color: ${props => (props.errorUpperCase === null ? '#757575' : props.errorUpperCase ? '#F00' : '#00c853')};
      }
      &:nth-child(3) {
        color: ${props => (props.errorNumber === null ? '#757575' : props.errorNumber ? '#F00' : '#00c853')};
      }
    }
  }

  button {
    width: 100%;
    height: 40px;
    background: #f9bb3e;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
    margin-top: 20px;
  }
`;

export const ProgressBar = styled.div``;
