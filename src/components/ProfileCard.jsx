import React, { useState } from 'react'
import UserAvatar from './UserAvatar'
import { Card, CardContent, CardActions, Typography, IconButton } from '@mui/material'
import EditDialog from './EditDialog'
import LikeButton from './LikeButton'
import styled from '@emotion/styled'
import ConfirmationDialogue from './ConfirmationDialogue'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import UserField from './UserField'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

const RootCard = styled(Card)`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 300px;
    border: 1px solid #ececec;
    
    & .MuiPaper-root {
        box-shadow: none;
    }
    `;
    
    const Content = styled(CardContent)`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    text-align: center;
    `;

const CardContents = styled(CardContent)`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 90%;
margin-bottom: -30px;
`
    
const Actions = styled(Card)`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #f5f5f5;
    border-top: 1px solid #ececec;
    `;
    
    const ActionsCard = styled(CardActions)`
    display: flex;
    justify-content: space-between;
    width: 80%;
    `
    
    const ActionButton = styled(IconButton)`
    border-radius: 0;
    display: flex;
    padding: 10px 25px;
    justify-content: ${props =>
        props.position === "left"
          ? "flex-start"
          : props.position === "center"
          ? "center"
                : "flex-end"};
                border-right: ${props => props.position !== "right" && "1px solid #dedede"};

                &:last-child {
                  border-right: none;
                }
`;

const AvatarContainer = styled(Card)`
width: 100%;
height: 160px;
margin-top: -16px;
background-color: #f5f5f5;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-end;
`


const ProfileCard = ({ user, onDelete, onUpdate }) => {
 

    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
    const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] = useState(false);

    const handleEditClick = () => {
        setIsEditDialogOpen(true);
    }

    const handleEditDialogClose = () => {
        setIsEditDialogOpen(false);
    }

    const handleEditSubmit = (updatedUser) => {
        onUpdate(updatedUser);
        setIsEditDialogOpen(false);
    }

    const handleDeleteClick = () => {
        setIsConfirmationDialogOpen(true);
      };
    
      const handleConfirmationDialogClose = () => {
        setIsConfirmationDialogOpen(false);
      };
    
      const handleDelete = () => {
        onDelete(user.id);
        setIsConfirmationDialogOpen(false);
      };
  return (
      <>
          <RootCard>
         
              <Content>
                  <AvatarContainer>
                  <UserAvatar username={user.username} size={60} />
                  </AvatarContainer>
                  <CardContents>
                  <Typography variant="h6" component="h2" style={{fontSize: "18px", fontWeight: "bold", marginBottom: "8px"}}>
                      {user.name}
                  </Typography> 
                 <UserField value={user.email} icon={EmailOutlinedIcon}/>
                 <UserField value={user.phone} icon={PhoneEnabledOutlinedIcon}/>
                 <UserField value={user.website} icon={LanguageOutlinedIcon} />
                 <UserField value={`${user.address.street}, ${user.address.suite}`} />
                 <UserField value={`${user.address.city}, ${user.address.zipcode}`} />
                 <UserField value={user.company.name} />
                </CardContents>    
              </Content>
              <Actions>
                  <ActionsCard>
                  <ActionButton position="left">
                  <LikeButton />
                  </ActionButton>
                  <ActionButton  position="center" onClick={handleEditClick} >
                      <BorderColorOutlinedIcon />
                  </ActionButton>
                  <ActionButton  position="right" onClick={handleDeleteClick} >
                      <DeleteIcon />
                  </ActionButton>
                  </ActionsCard>
              </Actions>
         
              <EditDialog user={user} isOpen={isEditDialogOpen} onClose={handleEditDialogClose} onSubmit={handleEditSubmit} />
              
          </RootCard>
          <ConfirmationDialogue
        isOpen={isConfirmationDialogOpen}
        onClose={handleConfirmationDialogClose}
        onDelete={handleDelete}
      />
          </>
  )
}

export default ProfileCard