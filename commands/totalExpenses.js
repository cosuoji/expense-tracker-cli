import expenses from "./readFileData.js";

let finalArr = []
export const totalExpenses = (arr) =>{
    arr.forEach(item=>{
        //console.log(item)
       let value =  +item.amount.split("").splice(1).join("")
       finalArr.push(value)
        
    })
    return finalArr.reduce((acc,curr) => acc + curr)
}

export const monthSummary = (month) =>{
    if(Number(month) < 10){
        month = `0${month}`
    }

    let result = expenses.filter(item=>{
        return item.date.split("-")[1] === month
    })

    return totalExpenses(result)
}