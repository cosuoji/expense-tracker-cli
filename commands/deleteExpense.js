import expenses, { writeExpense } from "./readFileData.js"

export const deleteExpense = (id) =>{
   let deleteIndex = Number(id) - 1
  
   const message = expenses.filter(item =>{
    return item.id !== Number(id)
   })

   let data = JSON.stringify(message);
   writeExpense(data)

if(message.length === expenses.length){
    return "Task Not Found"
} else {
    return "Task Deleted"
}

}

