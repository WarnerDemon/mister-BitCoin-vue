import axios from "axios"
export const utilService = {
  getApi,
}

function getApi(api) {
  return axios.get(`${api}`).then((res) => {
    console.log('res:', res)
    console.log('res.data:', res.data)
    res.data
  })
}