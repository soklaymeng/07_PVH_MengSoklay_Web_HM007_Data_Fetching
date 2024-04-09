//GEt Dog Image
export async function getDogService(){
    const res= await fetch('https://dog.ceo/api/breeds/image/random');
    console.log(" Res Value : " + res)
}
//get all Movies
export async function getallMovies(){
    const res= await fetch('https://movie-api-get-only-bmc3.vercel.app/api');
    //covert from JSON object to javascript object
    const data= res.json();
    return data;
}