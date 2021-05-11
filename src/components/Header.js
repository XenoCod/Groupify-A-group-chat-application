import React from "react";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpIcon from "@material-ui/icons/HelpOutline";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Insta from "@material-ui/icons/Instagram";
import Github from "@material-ui/icons/GitHub";
import Logout from "@material-ui/icons/ExitToApp";
import { useHistory } from "react-router-dom";

function Header() {
  const [user] = useAuthState(auth);
  const history = useHistory();
  return (
    <HeaderContainer>
      {/* Header-Left */}
      <HeaderLeft>
        <HeaderAvatar src={user?.photoURL} alt={user?.displayName} />

        <AccessTimeIcon />
      </HeaderLeft>

      {/* Header_Middle */}
      <HeaderSearch>
        <SearchIcon />
        <input placeholder="Search" />
      </HeaderSearch>

      {/* Header_right */}

      <HeaderRight>
        <IconContainer>
          <Insta
            onClick={() =>
              window.open(
                "https://www.instagram.com/ur_new_neighbour/",
                "_blank"
              )
            }
          />
          <LinkedIn
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/aditya-singh-8430771a8/",
                "_blank"
              )
            }
          />
          <Github
            onClick={() => window.open("https://github.com/XenoCod", "_blank")}
          />
        </IconContainer>
        <Logout onClick={() => auth.signOut()} />
        <HelpIcon />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0%;
  background-color: var(--slack-color);
  color: white;
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  padding: 0 50px;
  color: gray;
  border: 1px solid gray;
  display: flex;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    outline: none;
    min-width: 30vw;
    color: white;
  }
`;

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;
  cursor: pointer;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-left: 150px;
  cursor: pointer;
  margin-right: 100px;
  .MuiSvgIcon-root {
    padding-left: 15px;
  }
`;
