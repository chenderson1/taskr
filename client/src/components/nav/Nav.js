import React from "react";
import { StyledBase } from "../../elements/index";
import BoardView from "./BoardView";
import Login from "./Login";
import SignUp from "./SignUp";

const Nav = props => {
const { boardHandleSubmit, deleteBoard, updateBoard, updateThisBoard, isEdit, editBoard, displayTasks, userId, highLight, selectedBoard } = props;
  const { addBoard, boards } = props.User;
  return (
    <StyledBase>
      {props.isLoggedIn === false ? (
        props.display === true ? (
          <Login {...props} />
        ) : (
          <SignUp {...props} />
        )
      ) : (
        <BoardView
        selectedBoard={selectedBoard}
          displayTasks={displayTasks}
          updateThisBoard={updateThisBoard}
          updateBoard={updateBoard}
          addBoard={addBoard}
          boards={boards}
          isEdit={isEdit}
          deleteBoard={deleteBoard}
          onSubmit={boardHandleSubmit}
          onEdit={editBoard}
          userId={userId}
          highLight={highLight}
        />
      )}
    </StyledBase>
  );
};

export default Nav;
