import styled from "styled-components";

const SearchBarWrapper = styled.div`
  position: ${(props) => props.position === "absolute" && "absolute"};
`;

export { SearchBarWrapper };
