import Link from "next/link";

export default async function ServerDataFetching() {
  async function fetching() {
    let data = await fetch("https://jsonplaceholder.typicode.com/users");
    data = await data.json();
    return data;
  }

  let data = await fetching();

  return (
    <div>
      <h1>Users List</h1>
      {
        data.map((data)=>{
            return <h2 key={data.id}>Name: {data.name}</h2>
        })
      }
      <Link href='/'>Go to Home Page</Link>
    </div>
  );
}
