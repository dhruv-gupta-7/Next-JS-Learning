import Link from "next/link"

const Lectures = ({params}) => {
   
  return (
    <div>
        <h1>Day: {params.lectures[0]}</h1>
        <h1>Lecture: {params.lectures[1]}</h1>
        <Link href="/">Go to Home Page</Link>
    </div>
  )
}

export default Lectures