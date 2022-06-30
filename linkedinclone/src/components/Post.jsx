import { Divider, IconButton } from "@mui/material";
import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PublicIcon from "@mui/icons-material/Public";
import InteractionBar from "./InteractionBar";
import styled from "styled-components";
function Post() {
  return (
    <PostCard>
      <PostHead>
        <span>
          <ProfileImage
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt="profile pic"
            width={48}
            height={48}
          />
          <div>
            <h5>Profile name</h5>
            <p>nb abonnees</p>
            <span>
              <p>44min . </p> <PublicIcon fontSize="inherit" />
            </span>
          </div>
        </span>
        <IconButton>
          <MoreHorizIcon />
        </IconButton>
      </PostHead>
      <p className="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tempore
        consectetur harum, iure nam blanditiis dolores at reiciendis
        consequuntur quo voluptatum sed atque dolorum ut numquam inventore
        voluptate? Amet, corrupti!
      </p>
      <PostImage
        src="https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1vc3F1ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        alt="post pic"
      />
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
