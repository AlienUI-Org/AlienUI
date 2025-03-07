"use client";

import { useRouter } from "next/navigation";
import { components } from "@/utils/data";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const NavigationButtons = ({
  currentComponent,
}: {
  currentComponent: string;
}) => {
  const router = useRouter();

  const componentList = Object.values(components);
  const currentIndex = componentList.findIndex(
    (comp) => comp.name === currentComponent
  );

  const prevComponent =
    currentIndex > 0 ? componentList[currentIndex - 1] : null;
  const nextComponent =
    currentIndex < componentList.length - 1
      ? componentList[currentIndex + 1]
      : null;

  return (
    <div className="flex justify-between my-4">
      {prevComponent ? (
        <button
          onClick={() => router.push(`/compdetails/${prevComponent.name}`)}
          className="bg-transparent flex items-center gap-2 text-black font-semibold px-4 py-2 rounded-md border border-black "
        >
          <IoArrowBack size={20} />
          {prevComponent.name}
        </button>
      ) : (
        <div />
      )}

      {nextComponent ? (
        <button
          onClick={() => router.push(`/compdetails/${nextComponent.name}`)}
          className="bg-transparent flex items-center gap-2 text-brown-800 font-semibold px-4 py-2 rounded-md border border-gray-300"
        >
          {nextComponent.name} <IoArrowForward size={20} />
        </button>
      ) : null}
    </div>
  );
};

export default NavigationButtons;
