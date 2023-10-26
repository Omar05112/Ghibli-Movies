const axios = require("axios");
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
const fs = require("fs").promises;

async function saveMovies() {
  try {
    let response = await axios.get("http://localhost:8000/film");

    let movieList = "";
    response.data.forEach((movie) => {
      movieList += `${movie["title"]}, ${movie["release_date"]}\n`;
    });
    await fs.writeFile("asyncAwaitMovies.csv", movieList);
  } catch (error) {
    console.error(`Could not save the Ghibli movies to a file: ${error}`);
  }
}

saveMovies();
