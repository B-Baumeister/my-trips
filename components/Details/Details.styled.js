import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledHeaderDetailPage = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 0.5rem;
  padding: 0.5rem;
`;

export const StyledRightSideDetailPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-basis: 2rem;
`;

export const StyledDIVWhiteQuadArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledDetailPageContent = styled.div`
  border: solid;
  border-width: 0.01rem;
  border-color: #afafaf;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 22rem;
`;
export const StyledImageTrip = styled(Image)`
  border-radius: 1.5rem;
  margin: 1.38rem 2.06rem 0rem 2.06rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 14.25rem;
  height: 8.6875rem;
`;
export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem;
  width: 22rem;
`;
export const StyledPackingListArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: left;
  border: solid;
  border-width: 0.01rem;
  border-color: #afafaf;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 1.5rem;
  padding: 1rem;
  width: 22rem;
`;

export const StyledDateAndInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: left;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
`;
