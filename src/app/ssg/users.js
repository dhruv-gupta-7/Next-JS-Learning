
import Link from "next/link";
export default async function getUsers() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const usersList = await res.json();
  return usersList;
}