type ParamsType = {
  params: {
    id: number;
    resultid: number;
  };
};

export const generateMetadata = async ({ params }: ParamsType) => {
  const resp = await fetch(`https://dummyjson.com/products/${params.id}`);
  const data = await resp.json();

  return {
    title: `Product ${data.title}`,
  };
};

export default async function User({ params }: ParamsType) {
  return (
    <>
      User dynamic list {params.id} Result list {params.resultid}
    </>
  );
}
