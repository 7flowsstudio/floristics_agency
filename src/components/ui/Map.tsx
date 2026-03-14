interface MapProps {
  address: string;
  mapSrc: string;
}

export default function Map({ address, mapSrc }: MapProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-full overflow-hidden rounded-b-lg border border-stone-200">
        <iframe
          src={mapSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[195px] lg:h-[245px]"
        />
      </div>

      <p className="text-[12px] text-black text-center">{address}</p>
    </div>
  );
}
