export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (currentDepartmentIndex >= departments.length) {
        return { done: true };
      }

      const currentDepartment = departments[currentDepartmentIndex];
      if (currentEmployeeIndex >= currentDepartment.length) {
        currentDepartmentIndex++;
        currentEmployeeIndex = 0;
        return this.next();
      }

      const employee = currentDepartment[currentEmployeeIndex];
      currentEmployeeIndex++;

      return { value: employee, done: false };
    },
  };
}
