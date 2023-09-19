import Trip from "@/db/models/Trip.js";
import connect from "@/db/connect.js";

export default async function handler(request, response) {
  await connect();

  const { id } = request.query;

  if (request.method === "GET") {
    const trip = await Trip.findById(request.query.id);
    if (!trip) {
      response.status(404).json({ message: "Trip not found" });
      return;
    }
    response.status(200).json(trip);
    return;
  }
  response.status(405).json({ message: "Method not allowed" });
}
