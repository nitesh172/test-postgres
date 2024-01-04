const app = require('./index')

const Port = process.env.PORT || 2201

app.listen(Port, () => {
  try {
    console.log(`Running on Port- ${Port}`)
  } catch (error) {
    console.log(error)
  }
})
