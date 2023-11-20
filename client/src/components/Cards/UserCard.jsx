import { Avatar } from "@mui/material";
import styled, { useTheme } from "styled-components";
import { Checkbox } from "@mui/material";

const CardContainer = styled.div`
  display:flex;
  flex-wrap:wrap;
  width: 300px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CardImage = styled.img`
margin-top:5px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  overflow: hidden;
  object-fit: cover; 
`;

const CardContent = styled.div`
  padding: 16px;
`;

const Name = styled.h2`
  margin: 0;
`;

const Email = styled.p`
  margin: 5px 0;
`;

const Gender = styled.p`
  margin: 5px 0;
`;

const Domain = styled.p`
  margin: 5px 0;
`;

const Status = styled.p`
  border:none;
  padding:5px;
  align-item:center;
  margin: 5px 0;
`;

const UserCard = ({ user, onSelect, selectedUsers, selected }) => {
  const theme = useTheme();

  const handleCardClick = () => {
    if (user.available) onSelect(user._id);
  };

  return (
    // <Card
    //   onClick={handleCardClick}
    //   style={{ backgroundColor: selected ? theme.card + 90 : theme.card }}
    // >
    //   {selectedUsers.length > 0 && (
    //     <Checkbox
    //       checked={selected}
    //       sx={{
    //         color: user.available
    //           ? theme.text_secondary
    //           : theme.text_secondary + 20,
    //       }}
    //     />
    //   )}

    //   <Info style={{ width: "30%" }}>
    //     <AvatarImage src={user?.avatar}></AvatarImage>
    //   </Info>
    //   <Name>
    //     {user?.first_name} {user?.last_name}
    //     <span>{user?.email}</span>
    //   </Name>
    //   <Info>{user?.gender}</Info>
    //   <Info>{user?.domain}</Info>
    //   <Info>
    //     {user?.available ? (
    //       <Status
    //         style={{
    //           background: `${theme.green + 10}`,
    //           color: `${theme.green}`,
    //         }}
    //       >
    //         Available
    //       </Status>
    //     ) : (
    //       <Status
    //         style={{
    //           background: `${theme.yellow + 10}`,
    //           color: `${theme.yellow}`,
    //         }}
    //       >
    //         Not Available
    //       </Status>
    //     )}
    //   </Info>
    // </Card>
    <>
    <CardContainer onClick={handleCardClick}
     style={{ backgroundColor: selected ? theme.card + 90 : theme.card }}>
      {selectedUsers.length > 0 && (
        <Checkbox
          checked={selected}
          sx={{
            color: user.available
              ? theme.text_secondary
              : theme.text_secondary + 20,
          }}
        />
      )}
      <CardImage style={{ width: "30%",height:"50px"}} src={user?.avatar} alt="img" />
      <CardContent>
        <Name>{`${user?.first_name} ${user?.last_name}`}</Name>
        <Email>Email: {user?.email}</Email>
        <Gender>Gender: {user?.gender}</Gender>
        <Domain>Domain: {user?.domain}</Domain>
        <Status>
        {user?.available ? (
          <Status
            style={{
              background: `${theme.green + 10}`,
              color: `${theme.green}`,
            }}
          >
            Available
          </Status>
        ) : (
          <Status
            style={{
              background: `${theme.yellow + 10}`,
              color: `${theme.yellow}`,
            }}
          >
            Not Available
          </Status>
        )}
        </Status>
      </CardContent>
    </CardContainer>
    </>
  );
};
export default UserCard;
