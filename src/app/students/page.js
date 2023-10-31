
import Link from "next/link";

const Students = () => {
  return (
    <div>
        <h1>Student Page</h1>
        <Link href='/students/studentslist'>Students List</Link>
        <br/> <br />
        <Link href="/">Go to Home Page</Link>
    </div>
  )
}

export default Students;