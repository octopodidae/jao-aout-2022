(function () {
  "use-strict";
  function Employee(name, age, companyName, salary) {
    Object.getPrototypeOf(Employee.prototype).constructor.bind(this)(name, age);
    this.companyName = companyName;
    this.salary = salary;
  }

  Object.setPrototypeOf(Employee.prototype, Person.prototype);

  Employee.prototype.reward = function (percent) {
    this.salary = (this.salary * percent) / 100;
    console.log("youpi my new salary is " + this.salary);
  };

  Employee.prototype.sayHello = function () {
    Object.getPrototypeOf(Employee.prototype).sayHello();
    console.log("I am working for " + this.companyName);
  };

  window.Employee = Employee;
})();
