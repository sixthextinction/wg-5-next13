import React from "react";
import AlbumForm from "../../components/AlbumForm";

type Props = {
  children: React.ReactNode;
};

const AlbumsLayout = (props: Props) => {
  return (
    <div className="relative text-cyan-500 bg-zinc-900 min-h-screen">
      <div className="absolute right-0 top-0 mt-2 mx-8 text-sm text-white">
        ☕Using Next.js 13!
      </div>
      <div className="w-full px-4 pt-4">
        <div>
          {/* client component */}
          <div className="flex items-center justify-center w-full p-4 mt-4 mb-4">
            <AlbumForm />
          </div>
          {/* server component, needs to be child */}
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default AlbumsLayout;