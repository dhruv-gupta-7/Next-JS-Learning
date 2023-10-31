import Image from "next/image";
import vercelLogo from "../../../public/vercel.svg";
import Link from "next/link";
export default function ImageOptimization() {
  return (
    <div>
        <h1>Next Js Image Component For Image Optimization</h1>
      <Image src={vercelLogo} height={200} width={500} alt="vercel logo"/>
      <br/>
      <Link href="/">Go to Home Page</Link>
    </div>
  );
}
