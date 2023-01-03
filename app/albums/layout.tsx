import React from "react";
import AlbumForm from "../../components/AlbumForm";

type Props = {
  children: React.ReactNode;
};

export default function AlbumsLayout(props: Props) {
  return (
    <div className="text-cyan-500 bg-zinc-900 min-h-screen">
      <div className="w-full px-4 pt-4">
        <div>
          {/* client component */}
          <div className="flex items-center justify-center w-full p-4 mb-4">
            <AlbumForm />
          </div>
          {/* server component, needs to be child */}
          {props.children}
        </div>
      </div>
    </div>
  );
};

