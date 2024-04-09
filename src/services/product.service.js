
//get all Movies
export async function getallMovies(){
    const res= await fetch('https://movie-api-get-only-bmc3.vercel.app/api');
    //covert from JSON object to javascript object
    const data= res.json();
    return data;
}
//get movies by Id
export async function getMovieById(movie_id){
    const res= await fetch(`https://movie-api-get-only-bmc3.vercel.app/api/${movie_id}`);
    const data= res.json();
    return data;
    
}
//get movies by gener
export async function getMovieByGener(genre){
    const res= await fetch(`https://movie-api-get-only-bmc3.vercel.app/api/?genre=${genre}`);
    const data= res.json();
    return data;
}
//get movies by genre Drama
