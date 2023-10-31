import Link from "next/link";

const StudentsList = () => {
    let studentsList = ["Student1", "Student2", "Student3"];
     let name ;
  return (
    <div>
        <h1>Students List PAge</h1>
        <ul>
        {studentsList.map((studentName, index) => (
          <li key={index}>
            <Link href={`/students/studentslist/${studentName}`}>
              {studentName}
            </Link>
          </li>
        ))}
        </ul>
        <Link href="/">Go to Home Page</Link>
    </div>
  )
}

export default StudentsList;