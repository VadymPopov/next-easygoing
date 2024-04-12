import axios from "axios";

const KEY = "58195f53cf9a6acbb0dd23a41e5ca023";
const BASE_URL = "https://api.themoviedb.org/3";

// async function onGetFilmDataByID(id) {
//   try {
//     const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${KEY}`);
//     if (!response.status) {
//       throw new Error('This movie is not available');
//     }
//     return response;
//   } catch (error) {}
// }

export async function getGenres() {
  try {
    const response = await axios.get(
      `${BASE_URL}/genre/movie/list?api_key=${KEY}`
    );
    if (!response.status) {
      throw new Error("This movie is not available");
    }
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getInitialMovie() {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?query=The%20Matrix&year=1999&api_key=${KEY}`
    );
    if (!response.status) {
      throw new Error("This movie is not available");
    }
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
