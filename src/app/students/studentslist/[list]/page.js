import Link from "next/link";

const Users = ({params}) => {
  return (
    <div>
        <h1>Student Details</h1>
        Welcome {params.list} 
        <br /><br/>
        <Link href="/">Go to Home Page</Link>
        </div>
        
  )
}

export default Users;