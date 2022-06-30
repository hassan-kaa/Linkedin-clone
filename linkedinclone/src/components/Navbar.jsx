import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import SmsIcon from "@mui/icons-material/Sms";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ViewComfyRoundedIcon from "@mui/icons-material/ViewComfyRounded";
import { Divider, Paper, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
function Navbar() {
  return (
    <MyNav>
      <ul>
        <li>
          <Link to={"/"}>
            <img
              src="https://brandlogos.net/wp-content/uploads/2016/06/linkedin-logo-512x512.png"
              alt="logo"
              width={48}
              height={48}
            />
          </Link>
        </li>
        <li>
          <SearchBar>
            <InputBase placeholder="Search" />
            <IconButton type="submit">
              <SearchIcon />
            </IconButton>
          </SearchBar>
        </li>
        <li>
          <IconButton type="submit">
            <HomeIcon color="action" />
          </IconButton>
          <label>Acceuil</label>
        </li>
        <li>
          <IconButton type="submit">
            <AutoAwesomeMosaicIcon color="action" />
          </IconButton>
          <label>Reseau</label>
        </li>
        <li>
          <IconButton type="submit">
            <WorkIcon color="action" />
          </IconButton>
          <label>Emploi</label>
        </li>

        <li>
          <IconButton type="submit">
            <SmsIcon color="action" />
          </IconButton>
          <label>Messagerie</label>
        </li>
        <li>
          <IconButton type="submit">
            <NotificationsIcon color="action" />
          </IconButton>
          <label>Notifications</label>
        </li>
        <li>
          <img
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt="profile pic"
            width="32px"
            height="32px"
            style={{ borderRadius: "40px" }}
          />
          <label>Vous</label>
        </li>
        <Divider orientation="vertical" flexItem></Divider>
        <li>
          <IconButton type="submit">
            <ViewComfyRoundedIcon color="action" />
          </IconButton>
          <label>Produits</label>
        </li>
        <li>
          <p>
            Essayer Premium <br />
            Gratuitement{" "}
          </p>
        </li>
      </ul>
    </MyNav>
  );
}

export default Navbar;

const MyNav = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;
  display: flex;
  align-items: center;
  padding: 8px 10%;
  background-color: white;
  img [alt*="logo"] {
    height: 48px;
    width: 48px;
  }
  ul {
    margin: 0;
    padding: 0;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;
  }
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
      font-size: 10px;
      text-align: center;
    }
    label {
      font-size: 0.6rem;
    }
  }
`;
const SearchBar = styled(Paper)`
  padding: 0% 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #b0d1e0;
`;
