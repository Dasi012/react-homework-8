import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Modal } from "./Modal";
import { Content } from "./Content";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Ready Player One",
      url: "https://play-lh.googleusercontent.com/0IBOkAHk5bqbk1xV3zoAcpW4hEkpUTVyC87sWdUgGZCfGoKDuAQZT_wVFNgqaBQ6HCljU1pRxJqn84SVmA",
      rating: "5",
    },
  ]);

  const openModal = () => {
    setOpen(true);
  };
  return (
    <>
      <ContainerHeader>
        <TitleHeader>Favorite Movies</TitleHeader>
        <ButtonHeader onClick={openModal}>Add Movie</ButtonHeader>
      </ContainerHeader>
      {open &&
        ReactDOM.createPortal(
          <Modal todos={todos} setTodos={setTodos} setOpen={setOpen} />,
          document.getElementById("modal")
        )}
      {todos.map((el) => {
        return (
          <Content
            el={el}
            setOpen={setOpen}
            todos={todos}
            setTodos={setTodos}
          />
        );
      })}
    </>
  );
};
const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(
      217deg,
      rgba(255, 0, 0, 0.783),
      rgba(255, 0, 0, 0) 70.71%
    ),
    linear-gradient(127deg, rgb(195, 0, 255), rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, rgb(0, 0, 255), rgba(0, 0, 255, 0) 70.71%);
  padding: 20px 70px;
`;
const TitleHeader = styled.h1`
  color: #ffffff;
`;
const ButtonHeader = styled.button`
  width: 130px;
  height: 40px;
  border: 0;
  border-radius: 12px;
  background-color: #6054d0;
  font-size: 18px;
  font-weight: 700;
  transition: 0.2s;
  color: #fff;
`;
