//    question 1

function double(array){
    var char=[]
    array.map(function(emp){
        char.push(emp+emp)
        
    })
    return char
}

var array=[1,2,3,4]
result=double(array)
console.log(result)


//   question 2


function even(array1){
    var char=[]
    array1.filter(function(emp){
        if (emp%2==0){
            char.push(emp)
        }
    })
    return char
}
var array1=[1,2,3,4,5]
result=even(array1)
console.log(result)


    // question 3
function sum(array2){
    return array2
    .reduce(function(emp,char){
        return emp+char
    })
}

var array2=[5,10,15]
result=sum(array2)
console.log(result)    
