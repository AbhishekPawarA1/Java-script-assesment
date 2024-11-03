const baseUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=df2a26f0";

const searchMovie = document.getElementById("searchMovie");

let currentPage = 1;
const resultsPerPage = 10;

searchMovie.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputData = document.getElementById("searchField").value;
  currentPage = 1;
  fetchMovie(inputData, currentPage);
});

async function fetchMovie(inputData, page) {
  try {
    const res = await fetch(`${baseUrl}&s=${inputData}&page=${page}`);
    const data = await res.json();

    if (data.Response === "True") {
      displayMovies(data.Search);
      displayPagination(inputData, page, data.totalResults);
    } else {
      console.error(data.Error);
    }
  } catch (err) {
    throw new Error(err.message);
  }
}

function displayMovies(movies) {
  const movieContainer = document.getElementById("movieContainer");
  movieContainer.innerHTML = "";

  movies.forEach((movie) => {
    const movieElement = document.createElement("div");
    movieElement.className =
      "flex flex-col my-6 bg-gray-800 shadow-sm border border-slate-200 rounded-lg";

    movieElement.innerHTML = `
       <div class=" p-2.5 h-96 overflow-hidden rounded-xl bg-clip-border ">
    <img
      src="${
        movie.Poster !== "N/A"
          ? movie.Poster
          : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_22TUyP0mvgQvUBpJ2Uh-MbVHC6tMgYQOOw&s"
      }" alt="${movie.Title}"

      class="h-full w-full object-cover rounded-md"
    />
  </div>
  <div class="p-4">
    <div class="mb-2 flex items-center justify-between">
      <p class="text-gray-100 text-xl font-semibold">
        ${movie.Title} (${movie.Year})
      </p>
      <p class="text-cyan-600 text-xl font-semibold">
        Type: ${movie.Type}
      </p>
    </div>
  </div>
        
    
      `;
    movieContainer.appendChild(movieElement);
  });
}

function displayPagination(movieName, currentPage, totalResults) {
  const paginationContainer = document.getElementById("paginationContainer");
  paginationContainer.innerHTML = "";

  const totalPages = Math.ceil(totalResults / resultsPerPage);

  if (currentPage > 1) {
    const prevButton = document.createElement("button");
    prevButton.innerText = "Previous";
    prevButton.addEventListener("click", () => {
      fetchMovie(movieName, currentPage - 1);
    });
    paginationContainer.appendChild(prevButton);
  }


  if (currentPage < totalPages) {
    const nextButton = document.createElement("button");
    nextButton.innerText = "Next";
    nextButton.addEventListener("click", () => {
      fetchMovie(movieName, currentPage + 1);
    });
    paginationContainer.appendChild(nextButton);
  }
}
