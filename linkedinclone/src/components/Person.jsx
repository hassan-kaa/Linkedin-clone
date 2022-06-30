import React from "react";
import styled from "styled-components";
import { Chip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
function Person() {
  return (
    <MyPerson>
      <ProfileImage
        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        alt="profile pic"
        width={48}
        height={48}
      />
      <div>
        <h5>Profile name</h5>
        <p>nb abonnees</p>
        <p>Qualifications and categories description </p>
        <Chip icon={<AddIcon />} label="Suivre" clickable variant="outlined" />
      </div>
    </MyPerson>
  );
}

export default Person;
const ProfileImage = styled.img`
  border-radius: 64px;
  z-index: 20;
  border: 2px solid white;
  margin-right: 16px;
`;
const MyPerson = styled.div`
  display: flex;
  margin: 16px 0;
  p {
    font-size: 10px;
  }
`;
