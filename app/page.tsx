import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center ">
      <div className="h-24 w-24 text-black text-4xl font-semibold flex items-center justify-center bg-white rounded-full">
        AP
      </div>
      <div className="text-center text-2xl p-8">
        Welcome to <span className="font-bold">Abhilash Purohit's</span> website. He's building something supercool. 
        <br/><br />
        Check back in a day or so!
      </div>
      {/* <Link href={"/articles"}>Articles</Link> */}
    </div>
  );
}
