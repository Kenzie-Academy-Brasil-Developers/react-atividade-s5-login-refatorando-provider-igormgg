import styled from "styled-components";

export const LoginContainer = styled.div`
  height: 100%;
  background-color: darkgray;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: loginContainer 2s 1 ease-in-out;

  form {
    width: 250px;
    height: 300px;
    box-shadow: 0px 0px 50px 2px black;
    background-color: lightcyan;
    border-radius: 10px;
    font-family: monospace;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    div {
      width: 80%;
      height: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
      text-align: left;

      h2 {
        width: 100%;
        font-size: 18px;
        font-weight: bold;
      }

      label {
        width: 100%;
        font-size: 12px;
        color: red;
      }

      input {
        width: 100%;
        height: 30;
        border: none;
        border-radius: 5px;
        padding: 5px;
        padding-left: 10px;
      }
    }

    button {
      margin-top: 20px;
      border: none;
      border-radius: 5px;
      padding: 10px 30px;
      background-color: lightgray;
      color: black;
      font-size: 18px;
      font-weight: bold;
      font-family: inherit;

      :hover {
        cursor: pointer;
        background-color: darkgray;
        color: white;
      }
    }
  }

  @keyframes loginContainer {
    from {
      opacity: 0;
    }
  }
`;
