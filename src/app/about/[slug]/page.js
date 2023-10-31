import Link from "next/link";

export default function DynamicPage (){
    return(
        <div>
    <h1>This is Dynamic Page</h1>
    <Link href='/'>Go to Home Page</Link>
    </div>
    )
}