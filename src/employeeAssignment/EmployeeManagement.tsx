import { useState, useEffect } from "react";
import "./EmployeeManagement.css";

// Employee ka type define kiya, taake TypeScript ko pata ho har employee me kya kya hoga
interface Employee {
  id: number;
  name: string;
  role: string;
  department: string;
  salary: string;
}

function EmployeeManagement() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [name, setName] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [department, setDepartment] = useState<string>("");
  const [salary, setSalary] = useState<string>("");
  const [editingId, setEditingId] = useState<number | null>(null);

  // Page load hote hi localStorage se purana data uthao
  useEffect(() => {
    const saved = localStorage.getItem("ems_employees");
    if (saved) {
      setEmployees(JSON.parse(saved));
    }
  }, []);

  // Jab bhi list change ho, localStorage me save kar do
  useEffect(() => {
    localStorage.setItem("ems_employees", JSON.stringify(employees));
  }, [employees]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !role || !department || !salary) {
      alert("Please fill all fields");
      return;
    }

    if (editingId) {
      setEmployees(
        employees.map((emp) =>
          emp.id === editingId
            ? { ...emp, name, role, department, salary }
            : emp
        )
      );
      setEditingId(null);
    } else {
      const newEmployee: Employee = {
        id: Date.now(),
        name,
        role,
        department,
        salary,
      };
      setEmployees([...employees, newEmployee]);
    }

    setName("");
    setRole("");
    setDepartment("");
    setSalary("");
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to remove this employee?")) {
      setEmployees(employees.filter((emp) => emp.id !== id));
    }
  };

  const handleEdit = (employee: Employee) => {
    setName(employee.name);
    setRole(employee.role);
    setDepartment(employee.department);
    setSalary(employee.salary);
    setEditingId(employee.id);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setName("");
    setRole("");
    setDepartment("");
    setSalary("");
  };

  return (
    <div className="ems-app">
      <header className="ems-header">
        <h1>Employee Management System</h1>
        <p>HR Dashboard — Add, Update & Manage Employee Records</p>
      </header>

      <div className="ems-container">
        {/* FORM */}
        <div className="ems-form-card">
          <h2>{editingId ? "Update Employee" : "Add New Employee"}</h2>
          <form onSubmit={handleSubmit}>
            <div className="ems-form-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="e.g. Ayesha Khan"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="ems-form-group">
              <label>Role</label>
              <input
                type="text"
                placeholder="e.g. Frontend Developer"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </div>

            <div className="ems-form-group">
              <label>Department</label>
              <input
                type="text"
                placeholder="e.g. Engineering"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              />
            </div>

            <div className="ems-form-group">
              <label>Salary</label>
              <input
                type="number"
                placeholder="e.g. 90000"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            </div>

            <div className="ems-form-actions">
              <button type="submit" className="ems-btn-primary">
                {editingId ? "Update Employee" : "Add Employee"}
              </button>
              {editingId && (
                <button
                  type="button"
                  className="ems-btn-secondary"
                  onClick={handleCancelEdit}
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* LIST */}
        <div className="ems-list-card">
          <h2>All Employees ({employees.length})</h2>

          {employees.length === 0 ? (
            <p className="ems-empty-state">No employees yet. Add one from the form.</p>
          ) : (
            <div className="ems-table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Department</th>
                    <th>Salary</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((emp) => (
                    <tr key={emp.id}>
                      <td>{emp.name}</td>
                      <td>{emp.role}</td>
                      <td>{emp.department}</td>
                      <td>${Number(emp.salary).toLocaleString()}</td>
                      <td className="ems-actions">
                        <button className="ems-btn-edit" onClick={() => handleEdit(emp)}>
                          Edit
                        </button>
                        <button className="ems-btn-delete" onClick={() => handleDelete(emp.id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EmployeeManagement;