import styled from "styled-components";

export const DashboardContainer = styled.div`
  height: 100%;
  background-color: lightcyan;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: logoutContainer 2s 1 ease-in-out;

  button {
    width: 200px;
    height: 200px;
    border: none;
    border-radius: 100%;
    background-color: red;
    color: white;
    font-family: monospace;
    font-size: 32px;
    font-weight: bold;
    text-transform: uppercase;
    box-shadow: 0px 0px 50px 5px black;
    transform: scale(0.9);
    animation: pulse 1s infinite;

    :hover {
      cursor: pointer;
      filter: brightness(0.9);
    }
  }

  @keyframes logoutContainer {
    from {
      opacity: 0;
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 10px 50px rgba(0, 0, 0, 0);
    }

    100% {
      transform: scale(0.9);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  }
`;
