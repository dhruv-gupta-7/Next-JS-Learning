import Link from "next/link";
import Users from "./users";

export default function UsersList() {
  return (
    <div>
      <h1>Users List From SSR</h1>
      <Users />
      <br />
      <Link href='/'>Go to Home Page</Link>
    </div>
  );
}
