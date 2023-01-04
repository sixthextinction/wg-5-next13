import { NextPage } from "next";
import { useState } from "react";
import DataTable from "../components/DataTable";
import { useQuery, withWunderGraph } from "../components/generated/nextjs";

const Home: NextPage = () => {
  const [albumId, setAlbumId] = useState(7);
  const [newValue, setNewValue] = useState(null);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewValue(parseInt(event.target.value));
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAlbumId(newValue);
  };

  // data.tracks is of type AlbumByIdResponseData, automatically typed.
  const { data } = useQuery({
    operationName: "AlbumById",
    input: {
      albumId: albumId, //7 by default
    },
    enabled: true,
  });

  return (
    <div>
      <div className="relative w-full px-4 pt-4">
        <div>
          <div className="absolute right-0 top-0 flex items-center justify-center mt-2 mx-8 text-sm text-white">
            🍵Using Next.js 12!
          </div>
          <div className="flex items-center justify-center w-full p-4 mt-4 mb-4">
            <form onSubmit={handleSubmit} className="flex ">
              <label className="py-2 px-4 text-black bg-sky-700 text-lg font-bold rounded-l-xl">
                AlbumID
              </label>
              <input
                type="number"
                value={newValue}
                onChange={handleChange}
                className="form-input w-32 py-2 px-4 text-black text-lg font-bold"
              />
              <button
                type="submit"
                className="bg-sky-700 hover:bg-cyan-400 text-white text-lg font-bold py-2 px-4 ml-0 hover:border-blue-500 rounded-r-xl"
              >
                Search
              </button>
            </form>
          </div>
          {!newValue ? (
            <div className="flex items-center justify-center mx-5 text-lg text-white">
              Enter an Album ID!
            </div>
          ) : (
            <></>
          )}
          {data?.Album && <DataTable data={data} />}
        </div>
      </div>
    </div>
  );
};

export default withWunderGraph(Home);
