"use client";

import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import type { FleetRow } from "@/lib/dashboard-data";

type Props = {
  fleet: FleetRow[];
};

const center = { lat: 10.8231, lng: 106.6297 };

export function FleetMap({ fleet }: Props) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const { isLoaded } = useJsApiLoader({
    id: "logiflow-gmap",
    googleMapsApiKey: apiKey ?? ""
  });

  if (!apiKey || !isLoaded) {
    return (
      <div className="h-72 rounded-xl border border-slate-700/60 bg-slate-900/60 p-4 text-sm text-slate-300">
        <div className="font-medium text-slate-100">Map placeholder</div>
        <p className="mt-1 text-xs text-slate-400">
          Them `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` vao `.env.local` de hien thi ban do that.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
          {fleet.slice(0, 6).map((v) => (
            <div key={v.vehicleId} className="rounded-md bg-slate-800/80 px-2 py-1">
              {v.vehicleId} - {v.status}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "18rem", borderRadius: "0.75rem" }}
      center={center}
      zoom={10}
      options={{ mapTypeControl: false, streetViewControl: false }}
    >
      {fleet.map((v, index) => (
        <MarkerF
          key={v.vehicleId}
          position={{ lat: center.lat + index * 0.02 - 0.04, lng: center.lng + index * 0.02 - 0.04 }}
          label={v.vehicleId}
        />
      ))}
    </GoogleMap>
  );
}
