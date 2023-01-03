"use client";
import React from "react";
import { useRouter } from "next/navigation";

type Props = {};

const AlbumForm = (props: Props) => {
  const router = useRouter();
  const [albumId, setAlbumId] = React.useState("7");
  // form submit handler
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    //alert("new playerid = " + playerId);
    router.push(`/albums/${albumId}`);
  }
  return (
    <form onSubmit={handleSubmit} className="flex">
      <label className="py-2 px-4 text-black bg-sky-700 text-lg font-bold rounded-l-xl">AlbumID</label>
      <input
        type="number"
        value={albumId}
        onChange={(event) => setAlbumId(event.target.value)}
        className="form-input w-32 py-2 px-4 text-black text-lg font-bold"
      />
      <button
        type="submit"
        className="bg-sky-700 hover:bg-cyan-400 text-white text-lg font-bold py-2 px-4 ml-0 hover:border-blue-500 rounded-r-xl"
      >
        Search
      </button>
    </form>
  );
};

export default AlbumForm;
