let array = []
let original=[]
fetch("https://671cc44709103098807b2179.mockapi.io/api/worker")
    .then((res) => res.json())
    .then((data) => {
        findworker(data)  
        array = data;
        original = [...data];  // Store original data for reset button
    }) 
  .catch((error) => console.log("this error is coming in get api",error));
let worker = document.querySelector("#workers")
function findworker(emp) {
    worker.innerHTML = "";
        emp.forEach(element => {
            let workercard = document.createElement("div");
            workercard.setAttribute("id","workercards");
            let company = document.createElement("h2");
            company.innerText = `Company : ${element.company}`;
            let name = document.createElement("h3");
            name.innerText = `Name :${element.name}`;
            let country = document.createElement("h4");
            country.innerText = `Country : ${element.country}`;
            let salarytype = document.createElement("h4");
            salarytype.innerText = `payment type: ${element.salarytype}`;
            let salary = document.createElement("h3");
            salary.innerText = `Salary :${element.salary}`;
            
            workercard.append(company, name, country,salarytype, salary);
            worker.appendChild(workercard);
        });
};

document.querySelector("#sorting").addEventListener("change", sortworker)

function sortworker() {
  let sort = document.querySelector("#sorting").value;
  console.log(sort);

  if (sort === "asc") {
    array.sort((a, b) => a.salary - b.salary);
  } else if (sort === "desc") {
    array.sort((a, b) => b.salary - a.salary);
    }
  else {
     array=original // Reset to original data
    }

  findworker(array); // Re-render sorted data
}