import styled from "styled-components";
import { Flex } from "../../pages/styles/style.js";
import { darken, lighten } from "polished";

const TitleBarContainer = styled(Flex)`
  padding: 0;
  align-items: center;
  justify-content: space-between;
`;

const ListContainer = styled(Flex)`
  background: radial-gradient(
    100% 99.11% at 0% 0.89%,
    rgba(15, 25, 65, 0.48) 0%,
    rgba(14, 24, 63, 0.12) 100%
  );
  // background-color: rgba(0, 0, 0, 0.1);
  border: ${(props) => props.theme.border.thin_solid};
  border-radius: 10px;
  padding: 1rem;
  flex: 11 1 0;
  width: 100%;
  align-contents: flex-start;
  flex-direction: column;
  overflow-y: auto;
`;

const RequestsListContainer = styled.div`
  display: flex;
  height: 95%;
  max-height: 20rem;
  width: 100%;
  align-contents: flex-start;
  flex-direction: column;
  overflow-y: auto;
`;

const TitleBox = styled.div`
  font-size: 2em;
  font-weight: bold;
  color: white;
  padding-bottom: 1em;
`;

const AddFriendTitleBox = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  padding-bottom: ${(props) => props.theme.paddings.lg};
  color: white;
`;

const FriendRequestTitleBox = styled.div`
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: white;
  border-bottom: 1px solid white;
  padding-bottom: 3%;
  width: 100%;
  margin-bottom: 3%;
`;

const FriendBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 7px;
  padding: 1.3rem;
  margin-top: 1rem;
  width: 95%;
  // &:hover {
  //   background: ${darken(0.2, "white")};
  //   cursor: pointer;
  // }
  // &:active {
  //   background: ${darken(0.1, "white")};
  //   cursor: pointer;
  // }
`;

const AddFriendBtn = styled.button`
  background: radial-gradient(
    100% 99.11% at 0% 0.89%,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0.08) 100%
  );
  border: ${(props) => props.theme.border.thin_solid};
  padding: 5px 20px;
  border-radius: 5px;
  color: white;
  &:hover {
    background: ${darken(0.2, "white")};
    cursor: pointer;
    color: black;
  }
  &:active {
    background: ${darken(0.1, "white")};
    cursor: pointer;
    color: black;
  }
`;

const FriendBoxesContainer = styled.div`
  display: flex;
  padding: 2rem;
  display: table;
  height: 95%;
  width: 95%;
  align-content: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  border-radius: 7px;
`;

const FriendListContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border-radius: 7px;
  padding-right: 5vw;
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

const FriendRequestsContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  background-color: rgba(0, 0, 0, 0.1);
  border: ${(props) => props.theme.border.thin_solid};
  border-radius: 10px;
  padding: ${(props) => props.theme.paddings.xl};
  margin-bottom: ${(props) => props.theme.paddings.xl};
`;

const RequestImage = styled(Image)`
  height: 50px;
  width: 50px;
`;

const SearchUserContainer = styled.div`
  display: flex;
  padding-top: ${(props) => props.theme.paddings.xxxl};
  height: 60%;
  width: 100%;
  align-contents: flex-start;
  flex-wrap: wrap;
  border-radius: 7px;
`;

const SingleRequestContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 7px;
  padding: 1.5rem 0.3rem;
  width: 100%;
`;

const SingleRequestFrdName = styled.div`
  font-weight: 600;
  color: white;
  margin-bottom: 5px;
`;

const RequestBtn = styled.button`
  background: ${(props) =>
    props.decline
      ? "none"
      : `radial-gradient(
    100% 99.11% at 0% 0.89%,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0.08) 100%
  )`};
  border: ${(props) => props.theme.border.thin_solid};
  padding: 2px 2.5rem;
  margin-right: ${(props) => props.theme.margins.xxl};
  border-radius: 5px;
  color: white;
  &:hover {
    background: ${darken(0.2, "white")};
    cursor: pointer;
    color: black;
  }
  &:active {
    background: ${darken(0.1, "white")};
    cursor: pointer;
    color: black;
  }
`;

export {
  SingleRequestContainer,
  FriendRequestTitleBox,
  TitleBarContainer,
  FriendBox,
  FriendListContainer,
  FriendBoxesContainer,
  SearchUserContainer,
  ListContainer,
  TitleBox,
  AddFriendBtn,
  FriendRequestsContainer,
  RequestsListContainer,
  SingleRequestFrdName,
  RequestBtn,
  SearchContainer,
  AddFriendTitleBox,
  RequestImage,
};
