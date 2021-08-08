const Employee = require("../lib/Employee");

test('creates an employee object', () => {
    const employee = new Employee('John');
    expect(typeof(employee)).toBe('object');
});

test('can set values via constructor argument', () => {
    const employee = new Employee('John', 10, "john@doe.com")
    
    expect (employee.name).toEqual("John");
    expect (employee.id).toEqual(10);
    expect (employee.email).toEqual("john@doe.com");
  })

// test to see if my methods for getting data work correctly
test('creates employee name', () => {
    const employee = new Employee('John', 10, "john@doe.com");
    expect (employee.getName()).toEqual(expect.any(String))
});

test('creates employee id', () => {
    const employee = new Employee('John', 10, "john@doe.com");
    expect (employee.getId()).toEqual(expect.any(Number))
});

test('creates employee email', () => {
    const employee = new Employee('John', 10, "john@doe.com");
    expect (employee.getEmail()).toEqual(expect.any(String))
});

test('creates employee role', () => {
    const employee = new Employee('John', 10, "john@doe.com");
    expect (employee.getRole()).toBe("Employee")
})