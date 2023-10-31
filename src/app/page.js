"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  function navigationExample(name) {
    router.push(name);
  }

  return (
    <main>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/students">Student</Link>
        </li>
        <li>
          <Link href="/study">Study</Link>
        </li>
        <li>
          <Link href="/ClientDataFetching">ClientDataFetchingPage</Link>
        </li>
        <li>
          <Link href="/ServerDataFetching">ServerDataFetchingPage</Link>
        </li>
        <li>
          <Link href="/ssr">SSR Page</Link>
        </li>
        <li>
          <Link href="/ssg">SSG Page</Link>
        </li>
        <li>
          <Link href="/image">Image Optimization</Link>
        </li>
        <li>
          <Link href="/code-splitting">Code Splitting Page</Link>
        </li>
        <li>
          <Link href="/error-handling">Error Handling Page</Link>
        </li>
      </ul>

      <button
        onClick={() => {
          navigationExample("/login");
        }}
      >
        Login
      </button>
    </main>
  );
}
