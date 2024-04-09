import { getMovieByGener } from "@/services/product.service";

const GetMovieByGenrer = async () => {
  //  const movieData = await getallMovies();
  const movieData = await getMovieByGener("Drama");
  return (
    <main>
      <div className="w-full mx-auto p-5  bg-red-950 overflow-x-auto no-scrollbar snap-x snap-mandatory ">
        <div className="flex flex-nowrap ">
          {/* card */}
          {movieData.payload.map((data) => (
            <div
              key={data?.movie_id}
              className="border-8 w-64 flex-shrink-0 flex flex-col justify-between leading-normal bg-slate-200 snap-center"
            >
              {/* <link href={`/CardComponent/${data?.movie_id}`}>Click</link> */}
              <img src={data.image} className="w-full mb-3" />
              {/* <Link href={"/movie"}>click</Link> */}
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
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default GetMovieByGenrer;
