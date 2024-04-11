import { getMovieByGener } from "@/services/product.service";
import Link from "next/link";
const GetMovieAnime = async () => {
  const movieData = await getMovieByGener(`anime`);
  console.log("Movie data", movieData);
  return (
    <main>
      <div className="w-full mx-auto p-5  bg-red-950 overflow-x-auto no-scrollbar snap-x snap-mandatory ">
        <h1 className="text-white text-2xl font-bold mt-4 p-5">Anime Movie</h1>
        <div className="flex flex-nowrap ">
          {/* card */}
          {movieData.payload.map((data) => (
            <Link
              href={`/movie/${data.movie_id}`}
              key={data?.movie_id}
              className="border-8 w-64 flex-shrink-0 flex flex-col justify-between leading-normal bg-slate-200 snap-center mr-5"
            >
              <img src={data.image} className="w-full mb-3" />

              <div className="p-4 pt-2">
                <div className="mb-8">
                  <a
                    href="#"
                    className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block"
                  >
                    {data.movie_title}
                  </a>
                  <p className="text-gray-700 text-sm line-clamp-3">
                    {data.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default GetMovieAnime;
