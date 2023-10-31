"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function dataFetching() {
      let data = await fetch("https://jsonplaceholder.typicode.com/user");  //removes 's' from users
      data = await data.json();
      setUsers(data);
    }
    dataFetching();
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      {users.map((item) => {
        return <h2 key={item.id}>Name: {item.name}</h2>;
      })}
      <br/>
      <Link href='/'>Go to Home Page</Link>
    </div>
  );
}
