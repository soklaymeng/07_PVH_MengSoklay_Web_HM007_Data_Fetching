import { getMovieById } from "@/services/product.service";
import { data } from "autoprefixer";

const MovieDetails = async ({ params }) => {
  console.log("Params: ", params.movieId);
  const { payload } = await getMovieById(params.movieId);
  console.log("Movie Details", payload);

  return (
    <main>
      <div class="bg-gray-100 dark:bg-gray-800 py-8">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 px-4">
              <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  class="w-full h-full object-cover"
                  src={payload?.image}
                  alt="Product Image"
                />
              </div>
            </div>
            <div class="md:flex-1 px-4">
              <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {payload.movie_title}
              </h2>
              <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {data.description}
              </p>
              <div class="flex mb-4">
                <div class="mr-4">
                  <span class="font-bold text-gray-700 dark:text-gray-300">
                    {payload.runtime}
                  </span>
                </div>
                <div>
                  <span class="font-bold text-gray-700 dark:text-gray-300">
                    {payload.genre}
                  </span>
                </div>
              </div>
              {/* //erorr tok sen */}
              <div class="mt-2 flex items-center">
                <span class="text-teal-600 font-semibold">
                  <span>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                  </span>
                </span>
                <span class="ml-2 text-gray-600 text-sm">34 reviews</span>
              </div>
              {/* ///////////////////////////////////////////////// */}
              <div>
                <span class="font-bold text-gray-700 dark:text-gray-300">
                  Movie Description:{payload.released_year}
                </span>
                <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {payload.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MovieDetails;
