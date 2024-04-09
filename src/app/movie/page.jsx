import { getallMovies } from "@/services/product.service";
import { data } from "autoprefixer";

const MoviePage = async () => {
  const movieData = await getallMovies();
  console.log("Movie", movieData);

  return (
    <main>
      <div className="flex px-10 py-10 snap-proximity snap-x ">
        {movieData.payload.map((data) => (
          <div
            key={movieData.id}
            className="max-w-sm rounded overflow-hidden shadow-lg snap-center mx-10"
          >
            <img
              className="w-full"
              src="https://tailwindcss.com/img/card-top.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MoviePage;
