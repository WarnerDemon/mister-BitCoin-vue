import { contactService } from "./contact.service"
import { utilService } from "./util.service"

export const userService = {
  getUser,
  login,
  transferFunds,
  getTransactions,
}

const LOGGEDIN_USER_KEY = 'user'

function getUser() {
  return _loadFromLocalStorage()
}

function getTransactions() {
  const user = _loadFromLocalStorage()
  return user.transactions
}

function login(username) {
  const user = getUserTemplate()
  user.username = username
  _saveToLocalStorage(user)
  return user
}

function transferFunds(to, amount) {
  const user = _loadFromLocalStorage()
  const transaction = getTransactionTemplate(to._id, to.name, amount)
  user.balance -= amount
  user.transactions.push(transaction)
  _saveToLocalStorage(user)
  return user
}

function getTransactionTemplate(toId, to, amount) {
  return {
    toId: toId || '',
    to: to || '',
    at: Date.now(),
    amount: amount || 0,
  }
}

function getUserTemplate() {
  return {
    username: '',
    balance: 100,
    transactions: [],
  }
}

// Save to local storage array of object
function _saveToLocalStorage(val) {
  const str = JSON.stringify(val)
  localStorage.setItem('user', str)
}

// Load from local storage array of object
function _loadFromLocalStorage() {
  const str = localStorage.getItem('user')
  const val = JSON.parse(str)
  return val
}
