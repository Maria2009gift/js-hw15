"use strict"

// =====1=====

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
}

let {name, age, hobby, premium, mood} = user

user.mood = "happy"
hobby = "skydiving"
premium = false

for (const i of Object.keys(user)) {
    console.log(i, ":", user[i])
}

// =====2=====

const lenght = {
    mail: 'poly@mail.com', 
    isOnline: true, 
    score: 500
}

const {mail, isOnline, score} = lenght

function countMet(obj) {
    return console.log(Object.keys(obj).length)
}

countMet(lenght)

// =====3=====

function findBestEmployee(employees) {
    let maxTasks = 0;
    let bestEmployee = ''
  
    for (const employee in employees) {
      const tasksCompleted = employees[employee]
      if (tasksCompleted > maxTasks) {
        maxTasks = tasksCompleted
        bestEmployee = employee
      }
    }
  
    console.log("Найкращий працівник:", bestEmployee)}

findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
})

const {ann, david, helen, lorence} = findBestEmployee

// =====4=====

function countTotalSalary(employees) {
    let maxSalary = 0;

    let salary = Object.values(employees)
    for (const i of salary) {
        maxSalary += i
    }  
    console.log(maxSalary)
}

countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
})

const {mango, poly, alfred} = countTotalSalary

// =====5=====

const products5 = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроїд', price: 400, quantity: 7 },
    { name: 'Захоплення', price: 1200, quantity: 2 },
]

const [obj1, obj2, obj3, obj4] = products5

function getAllPropValues(arr, prop) {
    for (const i of arr) {
        console.log(i[prop])
    }
}

getAllPropValues(products5, "name")

// =====6=====

const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроїд', price: 400, quantity: 7 },
    { name: 'Захоплення', price: 1200, quantity: 2 },
]

const [prod1, prod2, prod3, prod4] = products

function calculateTotalPrice(allProdcuts, productName) {
    let allPrice = 0

    for (const product of allProdcuts) {
        if (product.name === productName) {
          allPrice += product.price * product.quantity;
        }
      }
      console.log(allPrice)
}

calculateTotalPrice(products, 'Радар')

// =====7=====

// * Типів транзацкій всього два.
// * Можна покласти або зняти гроші з рахунку.
// */
const Transaction = {
 DEPOSIT: 'deposit',
 WITHDRAW: 'withdraw',
}
/*
* Кожна транзакція - це об'єкт з властивостями: id, type і amount
*/
const account = {
 // Поточний баланс рахунку
 balance: 0,

 // Історія транзакцій
 transactions: [],


 createTransaction(amount, type) {
    const transaction = {
      id: account.transactions.length, 
      type,
      amount,
    }
    return transaction
 },


 deposit(amount) {

  const transaction = this.createTransaction(amount, Transaction.DEPOSIT)
  this.transactions.push(transaction)
  this.balance += amount
  return console.log(`Рахунок поповнено ${amount}`);
 },

 withdraw(amount) {

  if (amount > this.balance) {
    console.log(`Недостатньо коштів на рахунку`)
    return
  }
  const transaction = this.createTransaction(amount, Transaction.WITHDRAW)
  this.transactions.push(transaction)
  this.balance -= amount
  return console.log(`З рахунку знято ${amount}`)
 },

 /*
  * Метод повертає поточний баланс
  */
 getBalance() {
  return console.log(`На вашому рахунку ${this.balance}`);
 },

 /*
  * Метод шукає і повертає об'єкт транзакції по id
  */
 getTransactionDetails(id) {
  return account.transactions[id]
 },

 /*
  * Метод повертає кількість коштів
  * певного типу транзакції з усієї історії транзакцій
  */
 getTransactionTotal(type) {

  let sum = 0
  for (const transaction of this.transactions) {
    if (transaction.type === type) {
      sum += transaction.amount
    }
  }
  return sum
 },
}

account.deposit(500)
account.withdraw(100)
account.deposit(300)
account.getBalance()
account.deposit(600)
account.withdraw(800)
account.getBalance()

console.log(account.getTransactionDetails(1))
console.log(account.getTransactionDetails(4))


console.log(account.getTransactionTotal(Transaction.WITHDRAW))
console.log(account.getTransactionTotal(Transaction.DEPOSIT))





















