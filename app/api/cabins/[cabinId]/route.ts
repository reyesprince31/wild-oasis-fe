import { getBookedDatesByCabinId, getCabin } from "@/lib/data-service";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(request: NextApiRequest, { params }: { params: { cabinId: string } }) {
    const { cabinId } = params;

    try {
        const [cabin, bookedDates] = await Promise.all([
            getCabin(cabinId),
            getBookedDatesByCabinId(cabinId)
        ]);

        return new Response(
            JSON.stringify({ cabin, bookedDates }),
            {
                status: 200,
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );

    } catch (error) {
        console.error("Error fetching data:", error);
        return new Response(
            JSON.stringify({
                success: false,
                message: "Error fetching data"
            }),
            {
                status: 500,
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
    }
}
