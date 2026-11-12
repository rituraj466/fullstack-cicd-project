const express = require("express");

const app = express();
app.use(express.json());

const employees = [
  { id: 1, name: "Rituraj", role: "DevOps Engineer", email: "rituraj@example.com" },
  { id: 2, name: "Rituraj", role: "Frontend Developer", email: "ritu@example.com" },
  { id: 3, name: "Sinha", role: "Backend Developer", email: "sinha@example.com" }
];

app.get("/api/health", (req, res) => {
  res.json({ status: "healthy", service: "employee-backend" });
});

app.get("/api/employees", (req, res) => {
  res.json(employees);
});

if (require.main === module) {
  const port = process.env.PORT || 5000;
  app.listen(port, "0.0.0.0", () => {
    console.log(`Backend listening on port ${port}`);
  });
}

module.exports = app;
