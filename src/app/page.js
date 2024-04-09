import CardComponent from "@/components/CardComponent";
import GetMovieByGenrer from "@/components/GetMovieByGener";
import Image from "next/image";

export default function Home() {
  return (
   <main className="bg-red-950 h-screen">
   
     <h1 className="text-white text-2xl font-bold mt-4 p-5">All Movie</h1>
    <CardComponent/>
    <h1 className="text-white text-2xl font-bold mt-4 p-5">Drama Movie</h1>
    
    <GetMovieByGenrer/>
   </main>
  );
}
