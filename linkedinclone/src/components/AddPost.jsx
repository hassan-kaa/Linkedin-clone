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
// import FileBase64 from "react-file-base64";
// import ImageUploading from "react-images-uploading";
import ReactImageFileToBase64 from "react-file-image-to-base64";
import axios from "axios";
function AddPost() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const addPost = () => {
    const newPost = { description, interactions, imageSrc };
    // fetch("/api", {
    //   method: "POST",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify(newPost),
    //   file: JSON.stringify(imageSrc),
    // }).then((res) => {
    //   console.log(res);
    // });
    axios.post("/api", newPost);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addPost();
    setOpen(false);
  };
  const [imageSrc, setImageSrc] = useState("");
  const [description, setDescription] = useState("");
  const [interactions, setInteractions] = useState({
    likes: 0,
    comments: [],
  });
  const handleChange = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };
  // const handleFileRead = async (e) => {
  //   const file = e.target.files[0];
  //   const file64 = btoa(file);
  //   console.log(file64);
  // };
  const handleOnCompleted = (files) => {
    //GET THE FIRST AND ONLY FILE IN THE ARRAY WHICH IS AN OBJECT
    setImageSrc(files[0].base64_file);
  };
  // const pickImage = async (e) => {
  //   await setImageSrc(e.target.value);
  //   console.log(imageSrc);
  //   console.log(e);
  // };
  return (
    <MyContainer>
      <FlexedBetween>
        <ProfileImage
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt="profile pic"
          width={48}
          height={48}
        />
        <InputButton onClick={handleClickOpen}>Commencer un Post</InputButton>
      </FlexedBetween>

      <FlexedBetween>
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
      </FlexedBetween>
      <div>
        <MyDialog open={open} onClose={handleClose}>
          <DialogTitle>Add post</DialogTitle>
          <form encType="multipart/form-data">
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
                multiline
                minRows={3}
                autoFocus
                margin="dense"
                id="name"
                label="Publier"
                type="text"
                fullWidth
                variant="standard"
                placeholder="De quoi souhaiter vous discuter? "
                onChange={handleChange}
              />
            </DialogContent>
            <DialogActions>
              <ButtonGroup>
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={!description}
                >
                  Publier
                </Button>
                <IconButton>
                  <ArticleIcon />
                </IconButton>
                <IconButton>
                  <ReactImageFileToBase64
                    onCompleted={handleOnCompleted}
                    CustomisedButton={CustomisedButton}
                  />

                  {/* <label htmlFor="inputTag">
                    <ImageIcon />
                  </label>
                  <input
                    type="file"
                    name="originalFileName"
                    onChange={handleFileRead}
                    id="inputTag"
                    accept=".jpg"
                  /> */}

                  {/* <FileBase64
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) => setImageSrc(base64)}
                  /> */}
                </IconButton>

                <IconButton>
                  <ArticleIcon />
                </IconButton>
              </ButtonGroup>
            </DialogActions>
          </form>
        </MyDialog>
      </div>
    </MyContainer>
  );
}

export default AddPost;
const MyDialog = styled(Dialog)`
  width: 100%;
  input[type="file"] {
    display: none;
  }
`;
const CustomisedButton = ({ triggerInput }) => {
  //A PROP IS RETURNED TO YOUR CUSTOMISED BUTTON NAMED -triggerInput
  //MAKE SURE YOU GET THE PROP AND ADD IT TO AN ONCLICK EVENT ON YOUR CUSTOMISED BUTTON
  //triggerInput PROP OPENS UP POP OF DEVICE TO SELECT IMAGE
  return (
    <IconButton onClick={triggerInput}>
      <ImageIcon />
    </IconButton>
  );
};
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

export const MyContainer = styled.div`
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
  input[type="file"] {
    display: none;
  }
`;
const FlexedBetween = styled.div`
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
