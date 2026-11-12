import { useEffect, useState } from "react";

export default function App() {
  const [employees, setEmployees] = useState([]);
  const [status, setStatus] = useState("Loading employees...");

  useEffect(() => {
    fetch("/api/employees")
      .then((response) => {
        if (!response.ok) throw new Error("API request failed");
        return response.json();
      })
      .then((data) => {
        setEmployees(data);
        setStatus("Backend API connected successfully");
      })
      .catch(() => setStatus("Could not connect to backend API"));
  }, []);

  return (
    <main className="container">
      <header>
        <p className="eyebrow">FULL STACK CI/CD DEMO</p>
        <h1>Employee Management</h1>
        <p className="subtitle">React frontend + Node.js backend deployed with Jenkins</p>
      </header>
      <section className="status">
        <span className="dot" />
        {status}
      </section>
      <section className="panel">
        <h2>Employee Directory</h2>
        {employees.length === 0 ? (
          <p className="empty">No employee records to display yet.</p>
        ) : (
          <div className="employees">
            {employees.map((employee) => (
              <article className="employee" key={employee.id}>
                <div className="avatar">{employee.name.charAt(0)}</div>
                <div>
                  <h3>{employee.name}</h3>
                  <p>{employee.role}</p>
                  <small>{employee.email}</small>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
      <footer>Deployed automatically using two independent Jenkins pipelines.</footer>
    </main>
  );
}