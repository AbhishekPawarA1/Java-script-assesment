

let container=document.getElementById("container")
let dog=document.createElement("img")
dog.src="https://thehappypuppysite.com/wp-content/uploads/2017/12/siberian6.jpg";
dog.style.display="none";

let cat=document.createElement("img")
cat.src="https://www.rd.com/wp-content/uploads/2021/04/GettyImages-988013222-scaled-e1618857975729.jpg?w=1670";
cat.style.display="none";

let elephant=document.createElement("img")
elephant.src="https://th.bing.com/th/id/R.3a82af2943ee3a9a8e248bba160aaf8c?rik=oQ8dGrf%2bx7N5iw&riu=http%3a%2f%2fwww.botswana.co.za%2fimages%2felephant-jeremy-jowell-1280x881.jpg&ehk=RFcq9%2f%2bFIjuGDXgtvl%2brX6EdtA34ZUwziP%2fkejZI4gI%3d&risl=&pid=ImgRaw&r=0";
elephant.style.display="none";

let lion=document.createElement("img")
lion.src="https://wallpapers.com/images/hd/lion-pictures-snw3r6217skr1ni5.jpg";
lion.style.display="none";

container.append(dog)
container.append(cat)
container.append(elephant)
container.append(lion)

// function

function dogdisplay(){
    hideAllImages();
    dog.style.display="block";
    dog.style.width="90%"

    dog.style.marginTop="30px";
    
    
}

function catdisplay(){
    hideAllImages();
    cat.style.display="block";
    cat.style.width="90%"
    cat.style.marginTop="30px";
    
    
}

function elephantdisplay(){
    hideAllImages();
    elephant.style.display="block";
    elephant.style.width="90%"
    elephant.style.marginTop="30px";
    
    
}

function liondisplay(){
    hideAllImages();
    lion.style.display="block";
    lion.style.width="90%"
    lion.style.marginTop="30px";
    

    
}


function hideAllImages() {
    dog.style.display = "none";
    cat.style.display = "none";
    elephant.style.display = "none";
    lion.style.display = "none";
}