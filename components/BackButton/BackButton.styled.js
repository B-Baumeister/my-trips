import Link from "next/link";
import styled from "styled-components";

export const StyledBackButton = styled.div`
  width: 1.6875rem;
  height: 1.625rem;
  background-color: #ffffff;
  border-radius: 0.31rem;
  box-shadow: 0px 0px 3px 1px rgba(175, 175, 175, 0.49) inset,
    0px 0px 7px 1px #afafaf;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
