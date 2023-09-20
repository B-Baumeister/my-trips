import Image from "next/image";
import Link from "next/link";

export default function TripDetails({
  image,
  title,
  city,
  country,
  startDate,
  endDate,
  description,
}) {
  return (
    <>
      <Link href="/">&larr;</Link>
      <h1>My Trips</h1>
      <section>
        <Image src={image} width={100} height={50} alt="" />
        <h2> {title} </h2>
        {city}, {country}
        <br></br>
        {startDate} - {endDate}
        <p>My plans</p>
        {description}
      </section>
    </>
  );
}
