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
  // No need to define your own types/interfaces for this response. Nifty!
  /*
		export interface AlbumByIdResponseData {
		tracks: {
			TrackId: number;
			Name: string;
			Composer?: string;
		}[];
	}
	*/
  const { data } = useQuery({
    operationName: "AlbumById",
    input: {
      albumId: albumId, //7 by default
    },
    enabled: true,
  });

  return (
    <div>
      <div className="relative w-full px-4 pt-20 sm:pt-24 lg:pt-32">
        <div className="">
          <div className="w-full p-4 m-4">
            <form onSubmit={handleSubmit} className="flex items-center">
              <input
                type="number"
                value={newValue}
                onChange={handleChange}
                className="form-input w-32"
              />
              <button type="submit" className="btn ml-4 text-white">
                Submit
              </button>
            </form>
          </div>
          {/* <div className="w-40 text-cyan-400 dark:text-white">
            <pre>{JSON.stringify(data?.tracks, null, 2)} </pre>
          </div> */}
          {data?.tracks && <DataTable tracks={data.tracks} />}
        </div>
      </div>
    </div>
  );
};

export default withWunderGraph(Home);