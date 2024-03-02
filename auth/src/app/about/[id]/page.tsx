export default function User({
  params,
}: {
  params: {
    id: number;
  };
}) {
  return <>User dynamic list {params.id}</>;
}
