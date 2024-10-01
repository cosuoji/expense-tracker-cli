import expenses from "./readFileData.js";

let arr = []
export const totalExpenses = () =>{
    expenses.forEach(item=>{
        //console.log(item)
       let value =  +item.amount.split("").splice(1).join("")
       arr.push(value)
        
    })
    return arr.reduce((acc,curr) => acc + curr)
}