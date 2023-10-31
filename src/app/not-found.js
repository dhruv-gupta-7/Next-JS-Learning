import Link from "next/link";

const NotFound = () => {
  return (
    <div>
        <h1>404: Page Not Found</h1>
        <Link href="/">Go to Home Page</Link>
    </div>
  )
}

export default NotFound;