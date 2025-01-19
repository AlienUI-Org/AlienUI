import React from "react";
import Image from "next/image";

function EarthCard() {
  return (
    <section className="relative overflow-hidden rounded-lg shadow w-[320px]">
      <Image
        alt=""
        src="/images/alien1.avif"
        width={100}
        height={100}
        className="absolute h-full w-full object-cover"
      />

      <div className="relative pt-32 sm:pt-48 lg:pt-64">
        <div className="p-4 sm:p-6">
          <time dateTime="1997-07-07" className="block text-xs text-white/90">
            07th July 1997
          </time>

          <a href="#">
            <h3 className="mt-0.5 text-lg text-white">
              Exploring the Unknown: The Alien Encounter Chronicles
            </h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
            Deep in the vastness of space lies a story untold—of strange beings,
            otherworldly landscapes, and encounters that defy imagination.
            Discover the mysteries of alien civilizations, their technology, and
            the secrets they carry across galaxies.
          </p>
        </div>
      </div>
    </section>
  );
}

export default EarthCard;
