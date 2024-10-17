//     // questions 1

// const strings = [
//     "apple",
//     "banana",
//     "apple",
//     "orange",
//     "banana",
//     "pear",
//     "apple",
//   ];

// let fruitCount = strings.reduce((countObj, fruit) => {
//     countObj[fruit] = (countObj[fruit] || 0) + 1;
//     return countObj;
// }, {});

// console.log(fruitCount);
 

//     // question 2
// const numbers = [7, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];
// var sum = numbers.reduce(function(emp, char) {
//     if (char % 3 === 0 || char % 5 === 0) {
//         return emp + char;
//     }
//     return emp; // Return accumulator unchanged if the condition is not met
// }, 0);
// console.log(sum)



// // result=findsum(number)
// // console.log(result)


//    question 3


// const words = [
//     "racecar",
//     "hello",
//     "deified",
//     "world",
//     "level",
//     "programming",
//     "radar",
//     "civic",
//     "javascript",
//   ];

// words.forEach(function(emp){
//     var reverse=emp.split('').reverse().join('');;
//     if (emp===reverse){
//        console.log(emp) 
//     }
// })


//   question 4



// const filePaths = [
//     "/images/pic1.jpg",
//     "/images/pic2.png",
//     "/assets/img/background.jpg",
//     "/assets/img/logo.png",
//     "/downloads/document.pdf",
//     "/downloads/image.png",
//     "/downloads/image.jpg",
//   ];

  
// var file=filePaths.filter(function(emp){
//     return emp.endsWith(".png")|| emp.endsWith(".jpg");
   
// })
// var res=[]
// file.forEach(function(name){
//     res.push(name)
// })

// console.log(res)
