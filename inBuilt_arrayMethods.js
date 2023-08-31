const array = [6,2,5,1,9,4,3]
//filter method
let even = array.filter((element)=>element%2==0)
console.log(even)

//map method
let odd = array.map((element)=>element%2!=0)
console.log(odd)

//sort method
array.sort();
console.log(array)
//descending
array.sort((a,b)=>b-a)
console.log(array)

//reverse array
array.reverse()
console.log(array)

//concat
let arr1 = [1,2,3]
let arr2 = [4,5,6]
arr1 = arr1.concat(arr2)
console.log(arr1)

//every and some methods - checks if the every/atleast one element passes the condition
let ans = array.every((element)=>element%2==0)
console.log(ans)
ans = array.some((element)=>element%2==0)
console.log(ans)

//includes - checks if the array contains the given element
console.log(array.includes(23))

//joins() - joins the elements of the array using the specified separator
ans = array.join('-')
console.log(ans)

//find() - returns the first element which satisfies the condition
ans = array.find((element)=>element%9==0)
console.log(ans)

//findIndex() - returns the index of element which satisfies the condition, if not found then returns -1;
ans = array.findIndex((element)=>element%9==0)
console.log(ans)
//We can use this function to search an element and return its index, if not found then returns -1;
const key = 11;
ans = array.findIndex((element)=>element==key)
console.log(ans)

//indexOf() - returns the index of the searched element
ans = array.indexOf(2)
console.log(ans)

//fills() - initializes complete or a part of the array with given element
let fruits = ['Cherry','Litchi','Guava','Lime']
fruits.fill('Mango', 0, 2) //(newElement, start index, end index+1)
console.log(fruits)

//slice() - extracts a section of the array and returns a new array
let vegetables = ['potato','bottle guard','tomato','onion','celery']
ans = vegetables.slice(1,4) //(start index, end index+1)
console.log(ans)

//splice(start index, number of elements to remove, new set of comma separated elements to add) 
ans = fruits.splice(0, 2, 'Apple', 'Grapes') 
console.log(ans)
console.log(fruits)

//push() - add one or more comma separated values at the end of the array
fruits.push('Orange','Banana')
console.log(fruits)

//pop() - removes the last element from the array and returns the removed element
console.log(vegetables.pop())


Output:
[ 6, 2, 4 ]
[
  false, false,
  true,  true,
  true,  false,
  true
]
[
  1, 2, 3, 4,
  5, 6, 9
]
[
  9, 6, 5, 4,
  3, 2, 1
]
[
  1, 2, 3, 4,
  5, 6, 9
]
[ 1, 2, 3, 4, 5, 6 ]
false
true
false
1-2-3-4-5-6-9
9
6
-1
1
[ 'Mango', 'Mango', 'Guava', 'Lime' ]
[ 'bottle guard', 'tomato', 'onion' ]
[ 'Mango', 'Mango' ]
[ 'Apple', 'Grapes', 'Guava', 'Lime' ]
[ 'Apple', 'Grapes', 'Guava', 'Lime', 'Orange', 'Banana' ]
celery
