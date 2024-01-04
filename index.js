const express = require("express")

const userController = require("./src/controllers/user.controller")
// const studentController = require("./controllers/student.controller")
// const evaluationController = require("./controllers/evaluation.controller")
// const topicController = require("./controllers/topic.controller")

const Port = process.env.PORT || 2201

const app = express()
app.use(express.json())
// app.use("/", async (req, res) => {
//   res.send(`Welcome To MVC <br> 
//   Base URL: http://localhost:2201/  <br> 
//   Users URL: http://localhost:2201/users <br> 
//   User by id URL: http://localhost:2201/users/_id <br> 
//   Students URL: http://localhost:2201/students <br> 
//   Student by id URL: http://localhost:2201/users/_id <br> 
//   Students by evaluation topic name URL: http://localhost:2201/students/Topic= \\like DSA, Coding <br> 
//   Student who score Higest in evaluation topic URL: http://localhost:2201/students/higestScore/Topic= \\like DSA, Coding <br> 
//   Topic URL: http://localhost:2201/topics <br> 
//   Topic by id URL: http://localhost:2201/topics/_id <br> 
//   Evaluations URL: http://localhost:2201/evaluations <br> 
//   Evaluations by id URL: http://localhost:2201/evaluations/_id
//   `)
//  })
app.use("/api/users", userController)
// app.use("/students", studentController)
// app.use("/evaluations", evaluationController)
// app.use("/topics", topicController)

app.listen(Port, () => {
  try {
    console.log(`Running on Port- ${Port}`)
  } catch (error) {
    console.log(error)
  }
})

