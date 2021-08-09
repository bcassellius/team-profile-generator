const Manager = require("../lib/Manager");

test('creates a manager object', () => {
    const manager = new Manager('Nobody');
    expect(typeof(manager)).toBe('object');
});

test('can set values via constructor argument', () => {
    const manager = new Manager('Nobody', 40, "nobody@special.com", 456)
    
    expect (manager.name).toEqual("Nobody");
    expect (manager.id).toEqual(40);
    expect (manager.email).toEqual("nobody@special.com");
    expect (manager.officeNumber).toEqual(456);
  })

// test to see if my methods for getting data work correctly
test('creates manager name', () => {
    const manager = new Manager('Nobody', 40, "nobody@special.com", 456);
    expect (manager.getName()).toEqual(expect.any(String))
});

test('creates manager id', () => {
    const manager = new Manager('Nobody', 40, "nobody@special.com", 456);
    expect (manager.getId()).toEqual(expect.any(Number))
});

test('creates manager email', () => {
    const manager = new Manager('Nobody', 40, "nobody@special.com", 456);
    expect (manager.getEmail()).toEqual(expect.any(String))
});

test('creates manager officeNumber', () => {
    const manager = new Manager('Nobody', 40, "nobody@special.com", 456);
    expect (manager.getOfficeNumber()).toEqual(expect.any(Number))
})
    
test('creates manager role', () => {
    const manager = new Manager('Nobody', 40, "nobody@special.com", 456);
    expect (manager.getRole()).toBe("Manager")
})