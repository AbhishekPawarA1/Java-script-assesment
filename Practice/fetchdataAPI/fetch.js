let apiurl = "https://671a11b9acf9aa94f6a8f9ec.mockapi.io/api/jobs";

const container = document.querySelector("#parent");
const sortingSelect = document.querySelector("#sorting");

// Fetch jobs based on the current sort option
function fetchJobs(sortOrder) {
  let url = apiurl;

  if (sortOrder === "asc" || sortOrder === "desc") {
    url += `?sortBy=salary&order=${sortOrder}`;
  }

  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      // Clear previous jobs
      container.innerHTML = "";
      // Call the function to find jobs and display them
      findJobs(data);
    })
    .catch((err) => console.log(err));
}

// Function to create job cards
function findJobs(jobs) {
  jobs.forEach((element) => {
    let card = document.createElement("div");
    card.setAttribute("id", "card");
    let company = document.createElement("h2");
    company.textContent = `Company: ${element.company}  `;
    let role = document.createElement("h3");
    role.textContent = `Job Title: ${element.role}`;
    let country = document.createElement("p");
    country.textContent = `Country: ${element.country}`;
    let salary = document.createElement("p");
    salary.textContent = `Salary: ${element.salary}`;
    let fulltime = document.createElement("button");
    fulltime.setAttribute("id", "time");
    fulltime.textContent = element.time ? "Full Time" : "Part Time";

    card.append(company, role, country, salary, fulltime);
    container.appendChild(card);
  });
}

// Event listener for sorting
sortingSelect.addEventListener("change", function () {
  const sortValue = this.value === "default" ? "" : this.value;
  fetchJobs(sortValue);
});

// Initial fetch with default sorting
fetchJobs("");
