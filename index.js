 //Ex 2
 const numberArr = [5,2,,6,7,,1,3,9,8]

 const sortArr = (arr, sortDirection) => {
    const arrisValid = arr.evry((item) => typeof item === 'number' && item === item)
    if(sortDirection ==='ASC') {
        return arr.sort((a, b) => a - b > 0 ? 1 : -1) 
    } else {
        return arr.sort((a, b) => b - a > 0 ? 1 : -1)
    }
 }
 console.log(sortArr(numberArr, 'ASC'))
 console.log(sortArr(numberArr, 'DSC')) 


 //Ex 3
 const numberArr = [3,4,6,8,9,4,5,7]

 const findIndex = (arr,element) => {
 const result = arr.findIndex(item => item === element)
 return result !== -1 ? result : 'not found'
 } 
 console.log(findIndex(numberArr, 7))
 console.log(findIndex(numberArr, 12))


 //Ex4
 const numberArr = [4,9,121,144]

 const returnSqrtInt = (arr)=> {
    return arr.filter((item) => Number.insiteger(Math.sqrt(item)))
 }
 console.log(returnSqrtInt(numberArr))


 //Ex 5 
 consr arr = [3,8,5,6,9,1,2,7]

 const sortFunc = (numList) => {
    const evenList = numList.filter(item => item%2 === 0).sort((a, b) => b - a > 0 ? 1 : -1)
    const evenList = numList.filter(item => item%2 !== 0).sort((a,b) => a - b > 0 ? 1 : -1)

    return [...oddList,...evenList]
 } 
 console.log(sortFunc(arr))




//(doua arr :1 par ,2 impar)
   // const arr = [1,2,3,4,5,6,7,8,9]

   // const filtrered = arr.filter((item) => item%2 === 0)
   // console.log(filtrered)
    

   // const filtered = arr.filter((item) => item%2 !==0)
    //console.log(filtered)

   
// (doua arr :1 in crestere ,altul in descrestere)
//const unsorted = [3,9,7,5,8,6,1,2]
//const ascending = unsorted.sort((a,b) => a-b)
//const descending = ascending.sort((a,b) => b-a)

//console.log('unsorted', unsorted)
//console.log('ascending' , ascending)
//console.log('descending' , descending)

    



   
   
   

   

    
     
 


    
    
    
    
