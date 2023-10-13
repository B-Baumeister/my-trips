import BackIconW from "@/components/Icons/BackIconW.svg";
import { StyledDIVWhiteQuad } from "@/components/BackButton/BackButton.styled";
import { StyledHeadAddTrip } from "@/components/TripForm/TripForm.styled";
import { StyledLink } from "@/components/Details/Details.styled.js";
import TripForm from "@/components/TripForm";

export default function AddTrip() {
  return (
    <main>
      <StyledHeadAddTrip>
        <StyledLink href="/" aria-label="Go back to homepage">
          <StyledDIVWhiteQuad>
            <BackIconW width={15} height={15} />
          </StyledDIVWhiteQuad>
        </StyledLink>
        <h1>My Trips</h1>
      </StyledHeadAddTrip>
      <h2>Add a trip</h2>
      <TripForm />
    </main>
  );
}
