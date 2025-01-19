import React from "react";
import Image from "next/image";

function GalaxyCard() {
  return (
    <section className="overflow-hidden rounded-lg shadow w-[320px]">
      <Image
        alt=""
        src="/images/alien1.avif"
        width={100}
        height={100}
        className="h-56 w-full object-cover"
      />

      <div className="bg-white p-4 sm:p-6">
        <time dateTime="1997-07-07" className="block text-xs text-gray-500">
          07th July 1997
        </time>

        <a href="#">
          <h3 className="mt-0.5 text-lg text-gray-900">
            Exploring the Unknown: The Alien Encounter Chronicles
          </h3>
        </a>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          Deep in the vastness of space lies a story untold—of strange beings,
          otherworldly landscapes, and encounters that defy imagination.
          Discover the mysteries of alien civilizations, their technology, and
          the secrets they carry across galaxies.
        </p>
      </div>
    </section>
  );
}

export default GalaxyCard;
