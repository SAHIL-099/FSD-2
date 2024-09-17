// Create a JSON object named Home Expenses in which you have to add monthly 
// expenses of transport , food bill and names of different family members including 
// mother,father,brother and sister.Print the expenses of father with his name.

const homeExpenses = {
    mother: {
        name: 'mother',
        transport: 1000,
        food: 5000,
        others: 1000
    },
    brother: {
        name: `brother`,
        transport: 10000,
        food: 2000,
        others: 1000
    },
    father: {
        name: `father`,
        transport: 10000,
        food: 500,
        others: 0
    },
    sister: {
        name: `sister`,
        transport: 100,
        food: 8000,
        others: 1000
    }
}

console.log(homeExpenses.father)