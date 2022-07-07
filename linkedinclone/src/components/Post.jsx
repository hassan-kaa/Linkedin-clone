import { Divider, IconButton } from "@mui/material";
import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PublicIcon from "@mui/icons-material/Public";
import InteractionBar from "./InteractionBar";
import styled from "styled-components";
import { MenuItem, Menu } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

function Post({ item }) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleDelete = () => {
    fetch(`/api/${item._id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(item),
    })
      .then(() => navigate("/"))
      .then(() => console.log("element deleted successfully"));
    setAnchorEl(null);
  };
  return (
    <PostCard>
      <PostHead>
        <span>
          <ProfileImage
            src={item.imageSrc}
            alt="profile pic"
            width={48}
            height={48}
          />
          <div>
            <h5>Profile name</h5>
            <p>nb abonnees</p>
            <span>
              <p>{item.createdAt} </p> <PublicIcon fontSize="inherit" />
            </span>
          </div>
        </span>
        <IconButton>
          <MoreHorizIcon
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          />
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleDelete}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={handleDelete}>
              <IconButton>
                <DeleteIcon />
              </IconButton>
              <p>Delete post</p>
            </MenuItem>
          </Menu>
        </IconButton>
      </PostHead>
      <p className="desc">{item.description}</p>
      <PostImage src={item.imageSrc} alt="post pic" />
      <Divider />
      <InteractionBar />
    </PostCard>
  );
}

export default Post;
const ProfileImage = styled.img`
  border-radius: 64px;
  z-index: 20;
  border: 2px solid white;
  margin-right: 16px;
`;
const PostImage = styled.img`
  width: 100%;
  margin: 16px 0;
`;
const PostHead = styled.div`
  padding: 16px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  p {
    font-size: 10px;
  }
  span {
    display: flex;
  }
`;
const PostCard = styled.div`
  background: white;
  margin-bottom: 16px;
  border-radius: 16px;
  p.desc {
    padding: 0 16px;
    font-size: 12px;
  }
`;
