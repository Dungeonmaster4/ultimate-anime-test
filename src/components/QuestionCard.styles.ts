import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1100px;
  background-color: #ebfeff;
  border-radius: 10px;
  border: 2px solid #0085a3;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);

  p {
    font-size: 1rem;
  }

  @media (max-width: 500px) {
    width: 100%;
    margin: 4rem 2rem 0 2rem;
  }
`;

type Props = {
  correct: boolean;
  isClicked: boolean;
};

export const ButtomWrapper = styled.div<Props>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }
  button {
    cursor: pointer;
    user-select: none;
    font-size: 1.2rem;
    font-weight: 700;
    height: 40px;
    width: 100%;
    margin: 5px 0;
    background: ${({ correct, isClicked }) =>
      correct
        ? "linear-gradient(90deg, #56ffa4, #59bc86)"
        : !correct && isClicked
        ? "linear-gradient(90deg, #ff5656, #c16868)"
        : "linear-gradient(90deg, #56ccff, #6eafb4)"};
    border: 3px solid #fff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);
  }
`;
