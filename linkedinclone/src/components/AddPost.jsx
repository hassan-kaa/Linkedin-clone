import React, { useState } from "react";
import styled from "styled-components";
import ImageIcon from "@mui/icons-material/Image";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArticleIcon from "@mui/icons-material/Article";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { ButtonGroup, IconButton } from "@mui/material";
function AddPost() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <MyContainer>
      <MakePost>
        <ProfileImage
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt="profile pic"
          width={48}
          height={48}
        />
        <InputButton onClick={handleClickOpen}>Commencer un Post</InputButton>
      </MakePost>

      <MakePost>
        <MyButton>
          <ImageIcon color="primary" />
          Photo
        </MyButton>
        <MyButton>
          <OndemandVideoIcon color="success" />
          Video
        </MyButton>
        <MyButton>
          <CalendarTodayIcon color="warning" />
          Evenement
        </MyButton>
        <MyButton>
          <ArticleIcon color="error" />
          Rediger un article
        </MyButton>
      </MakePost>
      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add post</DialogTitle>
          <DialogContent>
            <span>
              <ProfileImage
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt="profile pic"
                width={48}
                height={48}
              />
              <p>Profile name</p>
            </span>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Publier"
              type="text"
              fullWidth
              variant="standard"
              placeholder="De quoi souhaiter vous discuter? "
            />
          </DialogContent>
          <DialogActions>
            <ButtonGroup>
              <Button onClick={handleClose}>Publier</Button>
              <IconButton>
                <ArticleIcon />
              </IconButton>
              <IconButton>
                <ImageIcon />
              </IconButton>
              <IconButton>
                <ArticleIcon />
              </IconButton>
            </ButtonGroup>
          </DialogActions>
        </Dialog>
      </div>
    </MyContainer>
  );
}

export default AddPost;
const MyButton = styled.button`
  padding: 8px;
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
const ProfileImage = styled.img`
  border-radius: 64px;
  z-index: 20;
  border: 2px solid white;
  margin-right: 16px;
`;

const MyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 8px 16px;
  background: white;
  border-radius: 8px;
  height: 15vh;
  margin: 20px 0;
  width: 100%;
`;
const MakePost = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const InputButton = styled.button`
  padding: 8px 16px;
  border-radius: 64px;
  border: 1px solid #8d8d8d;
  width: 100%;
  text-align: left;
  background: none;
  cursor: pointer;
  &:hover {
    background-color: #bebebe;
  }
`;
