import styled from "styled-components";
import { controlModal } from "../features/modalSlice";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addTask } from "../features/todoSlice";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

function Modal() {
  const dispatch = useDispatch();
  const [taskData, setTaskData] = useState({});

  const addNewTask = (e) => {
    e.preventDefault();
    if (!taskData.task) {
      return toast.error("Please enter a valid task !");
    }
    if (taskData.task !== "") {
      const id = uuidv4();
      dispatch(addTask({ taskData, id }));
      dispatch(controlModal());
      setTaskData({});
      toast.success("You added a task successfully");
    }
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTaskData({ ...taskData, [name]: value });
  };
  return (
    <Wrapper>
      <div className="buttonContainer">
        <AiOutlineClose
          style={{ color: "red", cursor: "pointer", fontSize: "1rem" }}
          onClick={() => dispatch(controlModal())}
        />
      </div>
      <Container>
        <form onSubmit={addNewTask}>
          <label htmlFor="task">Task</label>
          <input
            name="task"
            onChange={handleChange}
            id="task"
            value={taskData.task}
            placeholder="Type your task."
          />
          <label htmlFor="date">Date</label>
          <input
            type="date"
            value={taskData.date}
            onChange={handleChange}
            name="date"
            id="date"
          />
          <button type="submit">Add New Task</button>
        </form>
      </Container>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: fixed;
  padding: 1%;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(37, 109, 133);
  background: radial-gradient(
    circle,
    rgba(37, 109, 133, 1) 0%,
    rgba(239, 229, 249, 0.46262254901960786) 100%
  );
  width: 100%;
  height: 100vh;

  .buttonContainer {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;
const Container = styled.section`
  width: 50%;
  height: 50%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: 10% auto;
  background: #ffff;
  justify-content: Center;
  align-items: center;
  form {
    display: flex;
    justify-center: center;
    align-items: center;
    flex-direction: column;
    label {
      display: inline-block;
      font-size: 1.2rem;
      font-weight: 700;
    }
    input {
      display: inline-block;
      font-size: 1.1rem;
      padding: 2%;
      border-radius: 5px;
      border: 1px solid rgb(37, 109, 133);
      margin: 3% auto;
    }
    button {
      margin-top: 2%;
      border-radius: 10px;
      border: none;
      padding: 2% 5%;
      background: rgb(37, 109, 133);
      font-size: 1.1rem;
      cursor: pointer;
      &:hover {
        background: #15ed09;
      }
    }
  }
`;
export default Modal;
