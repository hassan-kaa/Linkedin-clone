import React from "react";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import SendIcon from "@mui/icons-material/Send";
import styled from "styled-components";
function InteractionBar() {
  return (
    <MyContainer>
      <MyButton>
        <ThumbUpOutlinedIcon />
        J'aime
      </MyButton>
      <MyButton>
        <ChatOutlinedIcon />
        Commenter
      </MyButton>
      <MyButton>
        <ReplyOutlinedIcon />
        Partager
      </MyButton>
      <MyButton>
        <SendIcon />
        Envoyer
      </MyButton>
    </MyContainer>
  );
}

export default InteractionBar;
const MyButton = styled.button`
  padding: 8px 16px;
  border: none;
  background: none;
  font-size: 12px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  border-radius: 8px;
  &:hover {
    background-color: #bebebe;
  }
`;
const MyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 4px 16px;
  background: white;
  border-radius: 8px;
  width: 100%;
`;
