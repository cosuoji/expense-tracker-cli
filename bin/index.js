#!/usr/bin/env node


import {program} from "commander"
import { addExpense } from "../commands/addExpense.js";
import { table } from "../commands/displayExpenses.js";
import expenses from "../commands/readFileData.js";
import { monthSummary, totalExpenses } from "../commands/totalExpenses.js";
import { deleteExpense } from "../commands/deleteExpense.js";


program
  .command('add')
  .requiredOption('--description <expense>', 'expense')
  .requiredOption('--amount <amount>', 'amount expense cost')
  .action((options) => {
    const {description, amount} =  options
    let result = addExpense(description, amount)
    console.log(result.message)
  })



program
  .command("list")
  .description("List the expenses")
  .action(()=>{
    table(expenses)
  })


  program
  .command("summary")
  .description("List the total  expenses")
  .option("--month <value>", "Pick a month")
  .action((options)=>{
    let monthNames= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
    if(options.month) {
      const {month} = options
      let monthIndex = Number(month) - 1
      console.log(monthIndex)
      console.log(`Total Expenses for the month of ${monthNames[monthIndex]}: ₦${monthSummary(month)}`)
    } else{
 console.log(`Total Expenses: ₦${totalExpenses(expenses)}`)
    }
   
  })


  program
  .command("delete")
  .description("Deletes an expense")
  .requiredOption('--id <amount>', 'The id of the expense to delete')
  .action((options)=>{
    const {id} = options
    console.log(deleteExpense(id))
  })



program.parse(process.argv);
