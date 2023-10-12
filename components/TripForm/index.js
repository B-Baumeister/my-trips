import {
  StyledButtonPostionAddTrip,
  StyledDIVAddTrip,
  StyledFieldsetAddTrip,
  StyledFormAddTrip,
  StyledInputAddTrip,
  StyledPNoteAddTrip,
  StyledTextareaAddTrip,
  StyledlabelAddTrip,
} from "./TripForm.styled";

import ConfirmationMessage from "../ConfirmationMessage";
import { useRouter } from "next/router";
import { useState } from "react";
import { mutate } from "swr";

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = "ml_default";

async function uploadImage(file) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);
  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );
  const { url, width, height } = await response.json();
  return { url, width, height };
}

async function createPost(data) {
  return await fetch("/api/trips", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
export default function TripForm() {
  const [letters, setLetters] = useState(150);
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const image = await uploadImage(event.target.image.files[0]);

      const formData = new FormData(event.target);
      const tripData = Object.fromEntries(formData);
      await createPost({
        ...tripData,
        image,
      });

      mutate("/api/trips");
      router.push("/confirmation");
    } catch (error) {
      alert("Error creating trip");
    }
  }

  function handleCountLetters(event) {
    setLetters(150 - parseInt(event.target.value.length, 10));
  }

  function handleCountLetters(event) {
    setLetters(150 - parseInt(event.target.value.length, 10));
  }

  return (
    <StyledFormAddTrip onSubmit={handleSubmit}>
      <StyledFieldsetAddTrip>
        <StyledDIVAddTrip>
          <StyledlabelAddTrip htmlFor="title">
            Title (max. 30 characters)*
          </StyledlabelAddTrip>
          <StyledInputAddTrip
            id="title"
            name="title"
            type="text"
            maxLength="30"
            required
          />
        </StyledDIVAddTrip>

        <StyledDIVAddTrip>
          <StyledlabelAddTrip htmlFor="startDate">
            Start Date (dd/mm/yyyy)*
          </StyledlabelAddTrip>
          <StyledInputAddTrip
            id="startDate"
            name="startDate"
            type="date"
            required
          />
        </StyledDIVAddTrip>

        <StyledDIVAddTrip>
          <StyledlabelAddTrip htmlFor="endDate">
            End Date (dd/mm/yyyy)*
          </StyledlabelAddTrip>
          <StyledInputAddTrip
            id="endDate"
            name="endDate"
            type="date"
            required
          />
        </StyledDIVAddTrip>

        <StyledDIVAddTrip>
          <StyledlabelAddTrip htmlFor="city">
            City (max. 30 characters)*
          </StyledlabelAddTrip>
          <StyledInputAddTrip
            id="city"
            name="city"
            type="text"
            maxLength="30"
            required
          />
        </StyledDIVAddTrip>

        <StyledDIVAddTrip>
          <StyledlabelAddTrip htmlFor="country">
            Country (max. 30 characters)*
          </StyledlabelAddTrip>
          <StyledInputAddTrip
            id="country"
            name="country"
            type="text"
            maxLength="30"
            required
          />
        </StyledDIVAddTrip>

        <StyledDIVAddTrip>
          <StyledlabelAddTrip htmlFor="image">Image (URL)*</StyledlabelAddTrip>
          <StyledInputAddTrip id="image" name="image" type="file" required />
        </StyledDIVAddTrip>

        <StyledDIVAddTrip>
          <StyledlabelAddTrip htmlFor="description">
            Description (<span>{letters}</span> characters left)*
          </StyledlabelAddTrip>
          <StyledTextareaAddTrip
            rows="8"
            cols="30"
            maxLength="150"
            id="description"
            name="description"
            type="text"
            required
            placeholder="Enter your description"
            onChange={handleCountLetters}
          ></StyledTextareaAddTrip>
        </StyledDIVAddTrip>
        <StyledButtonPostionAddTrip>
          <button type="submit">+ Add Trip</button>
          <ConfirmationMessage button={"Cancel"} />
        </StyledButtonPostionAddTrip>
      </StyledFieldsetAddTrip>
      <StyledPNoteAddTrip>* required form field</StyledPNoteAddTrip>
    </StyledFormAddTrip>
  );
}
