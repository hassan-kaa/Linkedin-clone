import React from "react";
import { Divider, IconButton } from "@mui/material";
import styled from "styled-components";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AddIcon from "@mui/icons-material/Add";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Link } from "react-router-dom";
function Identity() {
  return (
    <React.Fragment>
      <ProfileCard>
        <div className="background"></div>

        <div className="profile">
          <img
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt="profile pic"
            width={64}
            height={64}
          />
          <MyLink to="/profile">
            <h1>Profile name</h1>
          </MyLink>

          <p>--</p>
        </div>
        <Divider orientation="horizontal" flexItem></Divider>

        <LinkButton style={{ margin: "8px 0" }}>
          <div>
            <p>Relation</p> <span>Développez votre réseau</span>
          </div>
          <AddBoxIcon />
        </LinkButton>
        <Divider orientation="horizontal" flexItem></Divider>
        <LinkButton>
          <div>
            <p>Accédez à des infos et des outils exclusifs </p>
            <span>
              <WorkspacePremiumIcon color="warning" />
              Essayez Premium gratuitement
            </span>
          </div>
        </LinkButton>
        <Divider orientation="horizontal" flexItem></Divider>
        <LinkButton>
          <span>
            <BookmarkIcon />
            Mes elements
          </span>
        </LinkButton>
      </ProfileCard>
      <ProfileCard>
        <MyButton>Groupes</MyButton>
        <Divider orientation="horizontal" flexItem></Divider>
        <MyButton>
          Evenements
          <IconButton size="small">
            <AddIcon fontSize="inherit" />
          </IconButton>
        </MyButton>
        <Divider orientation="horizontal" flexItem></Divider>
        <MyButton>Hashtags suivis</MyButton>
        <LinkButton>
          <span
            style={{
              color: "gray",
              margin: "auto",
              fontWeight: "bold",
            }}
          >
            En decouvrir plus
          </span>
        </LinkButton>
      </ProfileCard>
    </React.Fragment>
  );
}

export default Identity;
const ProfileCard = styled.div`
  background-color: white;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  border: solid 1px lightgray;
  div.background {
    height: 10vh;
    width: 100%;
    background-color: lightgray;
    background-image: url("https://images.unsplash.com/photo-1626544827763-d516dce335e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hhcGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60");
  }

  div.profile {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    img {
      border-radius: 64px;
      z-index: 20;
      border: 2px solid white;
      margin: 0;
    }
    * {
      transform: translateY(-50%);
    }
  }
  h1 {
    font-size: 16px;
  }
`;
const LinkButton = styled.button`
  color: black;
  padding: 8px 16px;
  border: none;
  width: 100%;
  display: flex;

  justify-content: space-between;
  cursor: pointer;
  font-weight: medium;
  font-size: 12px;
  text-align: left;
  background-color: white;
  span {
    display: flex;
    align-items: center;
    font-weight: bold;
  }

  &:hover {
    background-color: #dbdbdb;
  }
`;
const MyButton = styled.div`
  width: 100%;
  padding: 8px 16px;
  border: none;
  background: none;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  color: #007dc5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  &:hover {
    text-decoration: underline;
  }
`;
const MyLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:visited {
    color: black;
  }
`;
