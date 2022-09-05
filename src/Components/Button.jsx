import styled from "styled-components";
import { controlModal } from "../features/modalSlice";
import { useSelector, useDispatch } from "react-redux";
function Button() {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <button onClick={() => dispatch(controlModal())}> Add New Task </button>
    </Wrapper>
  );
}

export default Button;

const Wrapper = styled.div`
  display: flex;
  width: 80%;
  margin: 1% auto;
  padding: 1%;
  justify-content: flex-end;
  align-content: center;
  align-items: center;
  button {
    padding: 1%;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    background: #256d85;
    color: #fff;
  }
`;
