import { getallMovies } from "@/services/product.service";
import { data } from "autoprefixer";
import Link from "next/link";
const MoviePage = async () => {
  const movieData = await getallMovies();
  console.log("Movie", movieData);

  return (
    <main>
      <div className="w-full mx-auto p-5  bg-red-950 overflow-x-auto flex snap-x snap-mandatory no-scrollbar">
        <div className="flex flex-nowrap ">
          {/* card */}
          {movieData.payload.map((data) => (
            <Link
              href={`/movie/${data.movie_id}`}
              key={data?.movie_id}
              className="border-8 w-64 flex-shrink-0 flex flex-col justify-between leading-normal bg-slate-200 snap-center hide-scroll-bar mr-5"
            >
              {/* <Link href={`/movie/${data.movie_id}`}> addd</Link> */}
              <img src={data.image} className="w-full mb-3" />
              <div className="p-4 pt-2">
                <div className="mb-8">
                  <p className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block">
                    {data.movie_title}
                  </p>
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

export default MoviePage;
