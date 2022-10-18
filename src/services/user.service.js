
export const userService = {
  getUser,
}

const user = {
  name: "Puki Ben David",
  balance: 100,
  transactions: []
}

function getUser() {
  return user
}