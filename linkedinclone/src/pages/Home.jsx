import React, { useState, useEffect } from "react";
import Identity from "../components/Identity";
import styled from "styled-components";
// import { Container } from "@mui/system";
import AddPost from "../components/AddPost";
import { Divider, MenuItem, Menu, IconButton } from "@mui/material";
import Post from "../components/Post";
import Person from "../components/Person";
import AddIcon from "@mui/icons-material/Add";
import { useContext } from "react";
import PostsContext from "../context/PostsContext";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import { Container } from "@mui/system";

function Home() {
  const [loading, setLoading] = useState(true);
  const { posts, setPosts } = useContext(PostsContext);
  const fetchPosts = () => {
    axios
      .get("api")
      .then((res) => setPosts(res.data))
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <MyContainer>
      <Left>
        <Identity />
      </Left>
      <Center>
        <AddPost />
        <Divider flexItem style={{ fontSize: "12px" }} textAlign="right">
          Classer par :
          <span
            style={{ fontWeight: "bold", cursor: "pointer" }}
            id="demo-positioned-h5"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Pertinence
          </span>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={handleClose}>Pertinence</MenuItem>
            <MenuItem onClick={handleClose}>Recent</MenuItem>
          </Menu>
        </Divider>
        {loading ? (
          <Container
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "20vh",
            }}
          >
            <ClipLoader color="#00000" loading={loading} size={50} />
          </Container>
        ) : (
          posts.map((post) => <Post item={post} key={post._id} />)
        )}
      </Center>
      <Right>
        <span>
          <h5>Ajouter a votre fil D'actualite</h5>
          <IconButton size="small">
            <AddIcon fontSize="inherit" />
          </IconButton>
        </span>
        <Person />
        <Person />
        <Person />
        <LinkButton>Voir toutes les suggestions</LinkButton>
      </Right>
    </MyContainer>
  );
}

export default Home;
const MyContainer = styled.div`
  padding: 0 10%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
const Left = styled.div`
  width: 20%;
`;
const Right = styled.div`
  border-radius: 8px;
  margin: 20px 0;
  width: 20%;
  background: white;
  padding: 16px;
  span {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
const Center = styled.div`
  width: 50%;
`;
const LinkButton = styled.button`
  color: gray;
  padding: 8px 16px;
  border: none;
  width: 100%;
  display: flex;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  font-size: 12px;
  background-color: white;
  justify-content: center;

  &:hover {
    background-color: #dbdbdb;
  }
`;
