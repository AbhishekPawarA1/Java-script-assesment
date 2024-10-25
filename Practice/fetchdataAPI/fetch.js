// var original=[]
// var array=[]
let apiurl = "https://671a11b9acf9aa94f6a8f9ec.mockapi.io/api/jobs";
let sort = document.querySelector("#sorting").value;

if (sort === "asc" || sort === "desc") {
  apiurl += `?sortBy=salary&order=${sort}`;
}

fetch(apiurl)
    .then((resp) => resp.json())
    .then((data) => {
        original = data;
        array = data;
        findjobs(data)
    })
    
  .catch((err) => console.log(err));






let container=document.querySelector("#parent")    
function findjobs(jobs) {
    jobs.forEach(element => {
        let card = document.createElement("div");
        card.setAttribute("id", "card");
        let company = document.createElement("h2");
        company.textContent = `Company: ${element.company}  `;
        let role = document.createElement("h3");
        role.textContent = `job Title: ${element.role}`;
        let country = document.createElement("p");
        country.textContent = `Country: ${element.country}`;
        let salary = document.createElement("p");
        salary.textContent = `Salary: ${element.salary}`;
        let fulltime = document.createElement("button");
        fulltime.setAttribute("id","time")
        fulltime.textContent = element.time ? "Full Time" : "Part Time";

        card.append(company, role, country, salary, fulltime);
        container.appendChild(card);
    });
    
}    



