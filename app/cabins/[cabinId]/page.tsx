import { getCabin } from "@/lib/data-service";
import { EyeOff, MapPin, UserRound } from "lucide-react";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: { cabinId: string };
}) {
  const cabin = await getCabin(params.cabinId);

  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <div className="grid grid-cols-[3fr_4fr] gap-20 border border-primary py-3 px-10 mb-24">
        <div className="relative scale-[1.15] -translate-x-3">
          <Image
            src={image}
            fill
            className="object-cover"
            alt={`Cabin ${name}`}
          />
        </div>

        <div>
          <h3 className="text-accent font-black text-7xl mb-5 translate-x-[-254px] bg-primary p-6 pb-1 w-[150%]">
            Cabin {name}
          </h3>

          <p className="text-lg text-primary mb-10">{description}</p>

          <ul className="flex flex-col gap-4 mb-7">
            <li className="flex gap-3 items-center">
              <UserRound className="h-5 w-5 text-primary" />
              <span className="text-lg">
                For up to <span className="font-bold">{maxCapacity}</span>
                guests
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-lg">
                Located in the heart of the{" "}
                <span className="font-bold">Dolomites</span> (Italy)
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <EyeOff className="h-5 w-5 text-primary" />
              <span className="text-lg">
                Privacy <span className="font-bold">100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-5xl font-semibold text-center">
          Reserve today. Pay on arrival.
        </h2>
      </div>
    </div>
  );
}
