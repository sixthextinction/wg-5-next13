import secondsToTime from "../utils/secondsToTime";
import { AlbumByIdResponseData } from "./generated/models";

// No need to define your own types/interfaces for passed props. 
// Just import and use the one WunderGraph already generated. Nifty!
type Props = {
  data: AlbumByIdResponseData;
};

const DataTable = ({ data }: Props) => (
  <div className="flex flex-col items-center ">
    <p className="text-3xl text-white font-bold mt-8">
      &quot;{data?.Album?.Title}&quot;
    </p>
    <p className="text-lg text-cyan-100 font-bold mt-2 mb-12">
      {data?.Album?.Artist?.Name}
    </p>
    <table className="table-fixed w-full">
      <thead>
        <tr>
          <th className="border-2 px-4 py-2">Name</th>
          <th className="border-2 px-4 py-2">Composer</th>
          <th className="border-2 px-4 py-2">Length</th>
        </tr>
      </thead>
      <tbody>
        {data?.Album?.Track.map((track) => (
          <tr
            className="hover:bg-cyan-500 hover:text-zinc-900 hover:font-bold cursor-pointer"
            key={track.TrackId}
          >
            <td className="border-2 px-4 py-2 ">{track.Name}</td>
            <td className="border-2 px-4 py-2 ">{track.Composer}</td>
            <td className="border-2 px-4 py-2 ">
              {secondsToTime(track.Milliseconds / 1000)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default DataTable;
