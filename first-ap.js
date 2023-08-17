// console.log("hello");

// const product=(a,b)=>{
//     return a*b;
// }
// console.log(product(5,10))

// const student={
//     name:"gazal",
//     roll_No:10,
//     greet(){
//         console.log("My name is "+this.name)
//     }
// }
// student.greet();


// let array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
// let newArray=array.map((items,index)=>{
   
//     if(items===' '){
        
//        items='empty string';
//     }
//     return items;
// })
// console.log(newArray)


// const obj1 = {'key1': 1}
// console.log(obj1)
// const obj2 = { ...obj1}
// console.log(obj2)

// if(obj2 === obj1){

// console.log('same objects')

// }

// else{

// console.log('different objects')

// }



// const obj1 = {'key1': 1 , 'key2' : 2}

// const obj2 = { ...obj1, key1: 1000}



// console.log(obj1)

// console.log(obj2)


// const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

// const { key1, key3,key2} = { ...obj1}

// console.log(key1,key3, key2)



// const arr1 = ['value1', 'value2']

// const [ val1, val2 ] = arr1

// console.log(val1)

// console.log(val2)


// const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

// let { key1, key3} = obj1

// key1 = 20;

// key3 = 123

// console.log(obj1.key1, obj1.key3)

async function  asyncFunc(){
console.log('a');

console.log('b');

const promise1=new Promise((resolve,reject)=>{
    setTimeout(() => resolve('c'), 0)
})

const promise2=new Promise((resolve,reject)=>{
    
setTimeout(() => resolve('d'), 1000)
})
const promise3=new Promise((resolve,reject)=>{
    
    setTimeout(() => resolve('e'), 1500)
    })

const data1 =await promise1;
const data2 =await promise2;
const data3 =await promise3;
console.log(data1)
console.log(data2)
console.log(data3)

}
asyncFunc();