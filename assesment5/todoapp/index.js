let form = document.querySelector("#form");
form.addEventListener("submit", mytodo);

function mytodo(event) {
  event.preventDefault();
  let task = document.querySelector("#input").value;
  let Priority = document.querySelector("#select").value;
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  td1.innerText = task;
  let td2 = document.createElement("td");
  td2.innerText = Priority;
  if (Priority == "High") {
    td2.style.backgroundColor = "red";
  } else if (Priority == "Medium") {
    td2.style.backgroundColor = "yellow";
  } else {
    td2.style.backgroundColor = "green";
  }
  let td3 = document.createElement("td");
  td3.innerText = "completed ✔️";
  let td4 = document.createElement("td");
  let deletebtn = document.createElement("button");
  deletebtn.addEventListener("click", deletetodo);
  deletebtn.innerText = "Delete";
  td4.appendChild(deletebtn);
  tr.append(td1, td2, td3, td4);
  let tbody = document.querySelector("tbody");
  tbody.appendChild(tr);
  form.reset();
}

function deletetodo(event) {
  event.target.parentElement.parentElement.remove();
}
