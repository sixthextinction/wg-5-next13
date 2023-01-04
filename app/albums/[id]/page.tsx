// server component.
// fetches data from :
// http://localhost:9991/app/main/operations/AlbumById?albumId=[albumId]

import { Suspense } from "react";
import { AlbumByIdResponseData } from "../../../components/generated/models";
import DataTable from "../../../components/DataTable";

type Props = {
  params: Params;
};

type Params = {
  id: string;
};

export default async function AlbumPage(props: Props) {
  let data;
  let res;
  try {
    res = await fetch(
      `http://127.0.0.1:9991/app/main/operations/AlbumById?albumId=${props.params.id}`
    ); // nodeJs fetch errors out if using 'localhost'
    if (!res.ok) throw new Error(res.statusText);
    let json = await res.json();
    data = json.data as AlbumByIdResponseData;
  } catch (err) {
    console.log(err);
  }

  return (
    <div>
      {(!res.ok)? <div> Error! </div>:<></>}
      <Suspense fallback={<p> Loading...</p>}>
        {/* don't need the conditional rendering with && anymore since we're already using Suspense w/ fallback */}
        <DataTable data={data} />
      </Suspense>
    </div>
  );
}
