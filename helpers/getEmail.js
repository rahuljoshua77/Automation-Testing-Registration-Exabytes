const axios = require('axios')
const { url } = require('inspector')

const getEmail = (url) => {
  return new Promise(async(resolve, reject) => {
    const getData = await axios.get(url)
    if (getData.status === 200) {
      resolve(getData.data.split(/\r?\n/))
      // console.log(getData.data.split(/\r?\n/))
      
    } else {
      resolve(false)
    }
  })
}
module.exports = getEmail
