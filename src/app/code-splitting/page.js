
import dynamic from "next/dynamic";
import Link from "next/link";
export default async function CodeSplitting() {
    const ChunkCode = dynamic(()=>import('../chunkCode'))
  return (
    <div>
      <h1>Main Page</h1>
        <ChunkCode/>
        <br/>
        <Link href='/'>Go to Home Page</Link>
    </div>
  );
}
