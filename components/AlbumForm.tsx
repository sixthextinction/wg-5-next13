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
    <form onSubmit={handleSubmit} className="flex items-center">
      <input
        type="number"
        value={albumId}
        onChange={(event)=> setAlbumId(event.target.value)}
        className="form-input w-32"
      />
      <button type="submit" className="btn ml-4 text-white">
        Submit
      </button>
    </form>
  );
};

export default AlbumForm;
