import React from "react";
import AlbumForm from "../../components/AlbumForm";

type Props = {
  children: React.ReactNode;
};

const layout = (props: Props) => {
  return (
    <div className="dark:bg-slate-800 min-h-screen justify-center">
      <div className="relative w-full px-4 pt-20 sm:pt-24 lg:pt-32">
        <div>
          {/* client component */}
          <div className="w-full p-4 m-4">
            <AlbumForm />
          </div>
          {/* server component, needs to be child */}
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default layout;
