let submit = document.querySelector("#submit");
submit.addEventListener("click", users);
function users() {
  const requestOption = {
    method: "GET",
    request: "follow",
  };

  let URL = "https://reqres.in/api/users";
  fetch(URL, requestOption)
    .then((res) => res.json())
    .then((data) => displaydata(data))
    .catch((error) => console.log("error in fetching data", error));
  let container = document.querySelector("#container");

  function displaydata(data) {
    data.data.forEach((element) => {
      let card = document.createElement("div");
      card.setAttribute("id", "card");
      card.innerHTML = `
                        <img src="${element.avatar}"/>
                        <h2>Name: ${element.first_name} ${element.last_name}</h2>
                        <h3>Email: ${element.email}</h3>
                    
                    `;
      container.appendChild(card);
    });
  }
}
