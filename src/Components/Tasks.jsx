import React from "react";
import { BsSquare, Bs, BsTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { isSelected, deleteTask } from "../features/todoSlice";
function Tasks({ id, task, isDid, date }) {
  const dispatch = useDispatch();
  //  console.log(isDid);
  return (
    <div className="tasks">
      <Controls>
        <input type="checkbox" onClick={() => dispatch(isSelected(id))} />
        {!isDid && (
          <BsTrashFill
            onClick={() => dispatch(deleteTask(id))}
            className="icon"
          />
        )}
      </Controls>
      <TaskContainer>
        <p className={isDid ? "" : "selected"}>{task}</p>
        <label>{date}</label>
      </TaskContainer>
    </div>
  );
}
const TaskContainer = styled.section`
  width: 90%;
  p {
    font-size: 1.1rem;
  }
`;
const Controls = styled.section`
  display: flex;
  align-content: center;
  align-items: center;
  padding: 0.5%;
  .icon {
    color: #e71818fd;
    font-size: 1rem;
    cursor: pointer;
  }
`;
export default Tasks;
