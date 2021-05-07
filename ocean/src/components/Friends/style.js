import styled from "styled-components";
import { Flex } from "../../pages/styles/style.js";
import { darken, lighten } from "polished";

const TitleBarContainer = styled(Flex)`
  padding: 0;
  align-items: center;
  justify-content: space-between;
`;

const ListContainer = styled(Flex)`
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid white;
  border-radius: 10px;
  height: 80%;
  max-height: 35rem;
  width: 100%;
  align-contents: flex-start;
  flex-direction: column;
  overflow-y: auto;
`

const RequestsListContainer = styled(Flex)`
  height: 95%;
  max-height: 20rem;
  width: 100%;
  align-contents: flex-start;
  flex-direction: column;
  overflow-y: auto;
`

const TitleBox = styled.div`
  font-size: 2em;
  font-weight: bold;
  color: white;
`

const AddFriendTitleBox = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  color: white;
`

const FriendRequestTitleBox = styled.div`
  font-size: 1em;
  color: white;
  border-bottom: 1px solid white;
  padding-bottom: 3%;
  width: 100%;
  margin-bottom: 3%;
`

const FriendBox = styled.div`
  background-color: ${(props) =>
    props.today ? props.theme.colors.dark_blue : props.theme.colors.light_blue};
  border-radius: 7px;
  padding: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 95%;
  height: 10%;
  color: "grey";
  &:hover {
    background: ${darken(0.2, "white")};
    cursor: pointer;
  }
  &:active {
    background: ${darken(0.1, "white")};
    cursor: pointer;
  }
`;

const FriendBoxesContainer = styled(Flex)`

  padding: 2rem;
  display: table;
  height: 95%;
  width: 95%;
  align-content: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  border-radius: 7px;

`;


const FriendListContainer = styled(Flex)`
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  border-radius: 7px;
  padding-right: 20%;
`;

const SearchContainer = styled(Flex)`
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  border: 1px solid white;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
`;

const FriendRequestsContainer = styled(Flex)`
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid white;
  border-radius: 10px;
`;

const SearchUserContainer = styled(Flex)`
  height: 60%;
  width: 100%;
  align-contents: flex-start;
  flex-wrap: wrap;
  border-radius: 7px;
`;



export {
  FriendRequestTitleBox,
  TitleBarContainer,
  FriendBox,
  FriendListContainer,
  FriendBoxesContainer,
  SearchUserContainer,
  ListContainer,
  TitleBox,
  FriendRequestsContainer,
  RequestsListContainer,
  SearchContainer,
  AddFriendTitleBox
};
