import express from "express";
const app = express();
export default app;
import employees from "#db/employees";

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

app.get("/employees", (req, res) => {
  res.send(employees);
});

app.get("/employees/random", (req, res) => {
  const index = Math.floor(Math.random() * employees.length);
  const employee = employees[index];
  res.send(employee);
});

app.get("/employees/:id", (req, res) => {
  const { id } = req.params;
  const employee = employees.find((e) => e.id === +id);
  if (!employee) {
    return res.status(404).send("Employee does not exist");
  }
  res.send(employee);
});
