import expenses, { writeExpense } from "./readFileData.js"

const year = new Date().getFullYear()
let month = new Date().getMonth()
if(month < 10) month = ("0" + month.toString())
let day = new Date().getDay()
if(day < 10) day = ("0" + day.toString())
const date = `${year}-${month}-${day}`


export const addExpense = (description, amount) => {
    try {         
    if(expenses.length === 0){
          let obj = {
            "id": 1,
            "desription": description, 
            "date": date,
            "amount": `₦${amount}`
          } 

          expenses.push(obj)
          let data = JSON.stringify(expenses)        
          writeExpense(data)
    } else {
          let id = expenses[expenses.length - 1].id + 1
          let obj = {
            "id": id,
            "desription": description, 
            "date": date,
            "amount": `₦${amount}`
          } 
          expenses.push(obj)
          let data = JSON.stringify(expenses)        
          writeExpense(data)

    }

    let id = expenses[expenses.length - 1].id

    return {
        message:`Task added successfully ID: ${id}`
    }   

    } catch (error) {
        console.log(error)
        return {
            message: "Expense not added"
        }
    }

}