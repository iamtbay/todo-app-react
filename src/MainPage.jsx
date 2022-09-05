import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Tasks from "./Components/Tasks";
import { useSelector } from "react-redux";
import Modal from "./Components/Modal";

function MainPage() {
  const { todo } = useSelector((state) => state);
  const { isOpen } = useSelector((state) => state.modal);
  const [filterDate, setFilterDate] = useState();

  return (
    <Wrapper>
      {isOpen && <Modal />}
      <div className="dates">
        <div className="dateContainer">
          <DateInput
            type="date"
            value={filterDate}
            onChange={(e) => {
              setFilterDate(e.target.value);
            }}
          />
        </div>
        <div className="button">
          {filterDate && (
            <ButtonToReset
              onClick={() => {
                setFilterDate();
              }}
            >
              Reset filter{" "}
            </ButtonToReset>
          )}
        </div>
      </div>

      {/* tasks components */}
      {todo.length < 1 ? (
        <div className="noItemDiv">
          <h1 className="center-it"> Opps. You haven't added a task ^^ </h1>
        </div>
      ) : filterDate ? (
        todo.filter((items) => items.date === filterDate).length ? (
          todo
            .filter((items) => items.date === filterDate)
            .map((item) => {
              return <Tasks key={item.id} {...item} />;
            })
        ) : (
          <div className="noItemDiv">
            <h1 className="center-it"> Oh, I'm sorry </h1>
            <h3 className="center-it">
              We couldn't find a task for selected day
            </h3>
          </div>
        )
      ) : (
        todo.map((item) => {
          return <Tasks key={item.id} {...item} />;
        })
      )}
    </Wrapper>
  );
}

export default MainPage;

const Wrapper = styled.div`
  width: 80%;
  margin: 1% auto;
  border-radius: 10px;
  padding: 2%;
  border: 1px solid #fff;
  .dates {
    display: block;
    margin: auto;
    padding: 2%;
    width: 100%;
    border-bottom: 1px solid #fff;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-direction: row;
    .icon {
      display: inline;
    }
    p {
      display: inline;
    }
    .button {
      margin-top: 1%;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
    }
    .dateContainer {
      display: flex;
      align-content: center;
      align-items: center;
      justify-content: center;
    }
  }
  .tasks {
    margin: 2% 0%;
    display: flex;
    justify-content: space-between;
  }
`;
const DateInput = styled.input`
  background: transparent;
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 2%;
`;
const ButtonToReset = styled.button`
  background: none;
  border: 1px solid #fff;
  display: block;
  border-radius: 10px;
  padding: 1%;
  cursor: pointer;

  &:hover {
    background: #ed4a4a;
    color: #fff;
    font-weight: 500;
  }
`;
