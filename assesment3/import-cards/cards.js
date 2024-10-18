// let user=JSON.parse(window.localstorage.getItem("user")||[])|| []
  
let user = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
  },
];

// if(window.localStorage.getItem("user")){
//   user=JSON.parse(window.localstorage.getItem("user")||[])|| []
// }
let container=document.getElementById("user-cards-container")  
  
function getproduct(data){
data.map((products)=>{
  let card=document.createElement("div")
  card.setAttribute("id","card")
  let id=document.createElement("h2")
  id.innerText=`id: ${products.id}`
  let name=document.createElement("h1")
  name.setAttribute("id","name")
  name.textContent=`Name: ${products.name}`
  let username=document.createElement("h2");
  username.textContent=`username: ${products.username}`;
  let email=document.createElement("h2")
  email.textContent=`Email: ${products.email}`;
  card.append(id,name,username,email)
  container.append(card)
})
}
getproduct(user)

document.querySelector("#form").addEventListener("submit", function(addcard) {
  addcard.preventDefault();

  let user1 = {
      id: document.querySelector("#id").value,
      name: document.querySelector("#name").value,
      username: document.querySelector("#username").value,
      email: document.querySelector("#email").value
  };

  user.push(user1)
  console.log(user)
  localStorage.setItem("user",JSON.stringify(user))
  
getproduct(user) 
  
  
  form.reset()
});






