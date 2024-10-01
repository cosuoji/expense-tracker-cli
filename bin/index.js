#!/usr/bin/env node


import {program} from "commander"
import { addExpense } from "../commands/addExpense.js";
import { table } from "../commands/displayExpenses.js";
import expenses from "../commands/readFileData.js";
import { totalExpenses } from "../commands/totalExpenses.js";


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
  .action(()=>{
    console.log(`Total Expenses: ₦${totalExpenses()}`)
  })


  program
  .command("delete")
  .description("Deletes an expense")
  .action(()=>{
    console.log(`Total Expenses: ₦${totalExpenses()}`)
  })


// program
//   .command('build')
//   .description('build web site for deployment')
//   .action(() => {
//     console.log('build');
//   });

// program
//   .command('deploy')
//   .description('deploy web site to production')
//   .action(() => {
//     console.log('deploy');
//   });

// program
//   .command('serve', { isDefault: true })
//   .description('launch web server')
//   .option('-p,--port <port_number>', 'web port')
//   .action((options) => {
//     console.log(`server on port ${options.port}`);
//   });

program.parse(process.argv);