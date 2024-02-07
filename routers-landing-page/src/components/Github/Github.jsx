import { useLoaderData } from "react-router-dom";

export default function Github() {
  const data = useLoaderData();

  console.log(data);

  return (
    <>
      <div className="text-center m-4 bg-gray-600 text-white text-3xl">Github Username : {data.name}</div>;
      <img className="m-auto" src={data.avatar_url} alt="Git profile" width={300} />
    </>
  );
}

export const githubInfo = async () => {
  const response = await fetch("https://api.github.com/users/karthik-gowda");

  return response.json();
};
