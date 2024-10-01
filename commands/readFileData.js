import fs from "fs"
let expenses

let text = fs.readFileSync('expenses.json','utf8')
expenses = JSON.parse(text)



export const writeExpense = (data) =>{
    const info = fs.writeFileSync("expenses.json", data)
}
export default expenses

