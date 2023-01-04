"use client";
import DataTable from "../../../components/DataTable";
import {
  useQuery
} from "../../../components/generated/nextjs";

type Props = {
  params: Params;
};

type Params = {
  id: string;
};

export default function AlbumPage(props: Props) {
  /* For Client components - use the hook! */
  const { data } = useQuery({
    operationName: "AlbumById",
    input: {
      albumId: parseInt(props.params.id),
    },
    suspense: true,
  });

  return (
    <div>
      <DataTable data={data} />
    </div>
  );
}
