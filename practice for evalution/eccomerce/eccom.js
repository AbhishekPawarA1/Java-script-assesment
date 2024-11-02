finddata();
let array = []
let original=[]
function finddata() {
    const requestOption = {
        method: "GET",
        redirect: "follow"
    };
    fetch(
      "https://eccomerce-2beea-default-rtdb.firebaseio.com/products.json",requestOption
    )
      .then((res) => res.json())
        .then((data) => {
            original = (data);
           array=[...original];
            displayproducts(data);
            
        })
      .catch((error) => console.log("error in fetching data", error));
    
    
    let container = document.querySelector("#parent");
    function displayproducts(products) {
      products.forEach((element) => {
        let card = document.createElement("div");
        card.setAttribute("id", "card");
        card.innerHTML = `
             <img
             src=${element.image_url}/>
            <h2>Name:${element.name}</h2>
            <h3>Category:${element.category}</h3>
            <h3>Description:${element.description}</h3>
            <h3>Price:${element.price}</h3>
            <h3>Stock:${element.stock}</h3>
            <button type="submit" id="add-to-card-btn">Add to cart</button>
        `;
        container.appendChild(card);
      });
    }


    let sorting = document.querySelector("#sorting");
    sorting.addEventListener("change", sortdata);

    function sortdata() {
      container.innerHTML = "";
      let sort = document.querySelector("#sorting").value;
      console.log(sort);

      if (sort === "asc") {
        array.sort((a, b) => {
          return a.price - b.price;
        });
      } else if (sort === "desc") {
        array.sort((a, b) => {
          return b.price - a.price;
        });
        }
      else {
          array=[...original]
        }
      
      displayproducts(array);
    }
}





