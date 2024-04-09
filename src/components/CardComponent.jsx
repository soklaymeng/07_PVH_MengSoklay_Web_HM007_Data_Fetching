import { getallMovies } from "@/services/product.service";
import { data } from "autoprefixer";

const CardComponent = async () => {
  const movieData = await getallMovies();
  console.log("Movie data", movieData);

  return (
    <main>
      <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 bg-red-950 overflow-x-auto">
        <h1 className="text-2xl font-bold">All Movies</h1>
        <div class="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-3 gap-10 grid-flow-row auto-rows-max ">
          {/* card */}
          {movieData.payload.map((data) => (
            <div class="border-8  flex flex-col justify-between leading-normal bg-slate-200">
              <img src={data.image} class="w-full mb-3" />
              <div class="p-4 pt-2">
                <div class="mb-8">
                  <a
                    href="#"
                    class="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block"
                  >
                    {data.movie_title}
                  </a>
                  <p class="text-gray-700 text-sm line-clamp-3">
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

export default CardComponent;
