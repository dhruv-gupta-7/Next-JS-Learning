import Link from "next/link";
import getUsers from "./users";

export default async function Index() {
  let usersList = await getUsers();
  return usersList.map((user) => {
    return (
      <ul key={user.id}>
        <Link href={`/ssg/${user.id}`}>
          <li key={user.id}><h2>{user.name}</h2></li>
        </Link>
      </ul>
    );
  });
}
