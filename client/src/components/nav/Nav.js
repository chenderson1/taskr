import React from "react";
import { StyledBase, StyledLogoutButton } from "../../elements/index";
import BoardView from "./BoardView";
import Login from "./Login";
import SignUp from "./SignUp";

const Nav = props => {
const { boardHandleSubmit, deleteBoard, updateBoard, updateThisBoard, isEdit, editBoard, displayTasks, userId, highLight, selectedBoard, token, logoutUser } = props;
  const { addBoard, boards } = props.User;
  const styles = {
    div:{
      backgroundColor: '#40a700',
      borderLeft: '1px solid slategray'
    } 
  }
  return (
    <div style={styles.div}>
    <StyledBase>
      {!token ? (
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
      {token && <StyledLogoutButton onClick={logoutUser}>logout</StyledLogoutButton>}<br></br>
      </div>
  );
};

export default Nav;
