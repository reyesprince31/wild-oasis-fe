import { getCabin } from "@/lib/data-service";

import Reservation from "./_components/Reservation";
import Cabin from "./_components/Cabin";
import { Suspense } from "react";
import { Spinner } from "@/components/Spinner";

export async function generateMetadata({
  params,
}: {
  params: { cabinId: string };
}) {
  const { name } = await getCabin(params.cabinId);
  return { title: `Cabin ${name}` };
}

export default async function Page({
  params,
}: {
  params: { cabinId: string };
}) {
  const cabin = await getCabin(params.cabinId);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />
      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 ">
          Reserve {cabin.name} today. Pay on arrival.
        </h2>

        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
