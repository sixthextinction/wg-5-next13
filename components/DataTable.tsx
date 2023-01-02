import React from "react";

type Track = {
  TrackId: number;
  Name: string;
  Composer?: string;
};

type Props = {
  tracks: Track[];
};

const DataTable: React.FunctionComponent<Props> = ({ tracks }) => (
  <div className="text-cyan-400 dark:text-white">
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="border-2 px-4 py-2">TrackID</th>
          <th className="border-2 px-4 py-2">Name</th>
          <th className="border-2 px-4 py-2">Composer</th>
        </tr>
      </thead>
      <tbody>
        {tracks.map((track) => (
          <tr key={track.TrackId}>
            <td className="border-2 px-4 py-2">{track.TrackId}</td>
            <td className="border-2  px-4 py-2">{track.Name}</td>
            <td className="border-2  px-4 py-2">{track.Composer}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default DataTable;
