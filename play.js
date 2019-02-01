// const person={
//     name:'Max',
//     age:29,
//     greet(){
//         console.log("my name is "+this.name);
//     }
// };
// const printName=({name})=>{
//     console.log(name)
// }
// printName(person)
// const {name,age}=person;
// console.log(name,age)
const hobbies=['Sports','Music']
const copy=[...hobbies];
console.log(copy)
copy.pop()
console.log(copy)
console.log(hobbies)
// const [hobby1,hobby2]=hobbies;
// console.log(hobby1,hobby2)
// // for(let hobby of hobbies)
// // {
// //     console.log(hobby);
// // }
// // console.log(hobbies.map(hobby=>"Hobby: "+hobby));
// hobbies.push("Programming")
// // console.log(hobbies)
// const toArray=(...args)=>{
//     return args;
// }
// console.log(toArray(1,2,3,4,5))

const fetchData=()=>{
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("DONE");
        },1500)
        
    })
    return promise;
    }
setTimeout(()=>{
    console.log("Timer is Done");
    fetchData().then(text=>{
        console.log(text);
        return fetchData();
    })
    .then(text2=>{
        console.log(text2);
    })
},5000)