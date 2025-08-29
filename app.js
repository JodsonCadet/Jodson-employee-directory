import express from "express";
import employees from "./db/employees";

// create an express app
const app = express();
export default app;

// GET / to send the message "Hello employees!"
app.route("/").get((req, res) => {
  res.send("Hello employees!");
});

// app.get("/", (req, res) => {
//     res.send("Hello employees!");
// });
// GET /send the array of employees

app.route("/employees").get((req, res) => {
  res.send(employees);
});
app.route("/employees/:id").get((req, res) => {
  const { id } = req.params;
  console.log(id);
  //   putting the + before ID, will convert it to a number
  const employee = employees.find((employee) => employee.id === +id);
  if (!employee) {
    res.status(404).send(`no employee with id: ${id}`);
  }
  res.status(200).send(employee);
});
app.route("/employees/random").get((req, res) => {
  const index = Math.floor(Math.random() * employees.length);
  const randomEmployee = employees[index];
  res.status(200).json(randomEmployee);
});
