import Link from "next/link";

const About = () => {
    return (
      <div>
          <h1>About Page</h1>
          <Link href='/about/...'>Go to Dynamic Page</Link>
          <br/><br/>
          <Link href='/'>Go to Home Page</Link>
      </div>
    )
  }
  
  export default About;