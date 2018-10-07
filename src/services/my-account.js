export default {
  login (name, password) {
    console.log('login api called', name, password)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (name === 'admin' && password === '123456') {
          resolve({
            success: true
          })
        } else {
          resolve({
            success: false
          })
        }
      }, 500)
    })
  }
}
