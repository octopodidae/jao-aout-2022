(function () {
  "use-strict";
  function Employee(name, age, companyName, salary) {
    Object.getPrototypeOf(Employee.prototype).constructor(name, age);
    this.companyName = companyName;
    this.salary = salary;
  }

  //   Employee.prototype.sayHello = function () {
  //     console.log("Hello my name is " + this.name + " and I am " + this.age);
  //   };

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
