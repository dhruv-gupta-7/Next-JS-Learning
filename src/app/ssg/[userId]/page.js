import Link from "next/link";
import getUsers from "../users";

export default async function usersDetail(props) {
  const usersData = getUsers();
  const users = await usersData;
  const currentId = props.params.userId;
  const userDetails = users[currentId - 1];

  return (
    <div>
      <h1>ID: {userDetails.id}</h1>
      <h1>Name: {userDetails.name}</h1>
      <h1>Email: {userDetails.email}</h1>
      <br />
      <Link href="/">Go to Home Page</Link>
    </div>
  );
}

export async function generateStaticParams() {
  const usersData = getUsers();
  const users = await usersData;
  return users.map((users) => {
    userId:users.id.toString();
  });
}
