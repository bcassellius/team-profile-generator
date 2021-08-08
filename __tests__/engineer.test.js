const Engineer = require("../lib/Engineer");

test('creates an engineer object', () => {
    const engineer = new Engineer('Jane');
    expect(typeof(engineer)).toBe('object');
});

test('can set values via constructor argument', () => {
    const engineer = new Engineer('Jane', 20, "jane@doe.com", "janedoe")
    
    expect (engineer.name).toEqual("Jane");
    expect (engineer.id).toEqual(20);
    expect (engineer.email).toEqual("jane@doe.com");
  })

// test to see if my methods for getting data work correctly
test('creates engineer name', () => {
    const engineer = new Engineer('Jane', 20, "jane@doe.com", "janedoe");
    expect (engineer.getName()).toEqual(expect.any(String))
});

test('creates engineer id', () => {
    const engineer = new Engineer('Jane', 20, "jane@doe.com", "janedoe");
    expect (engineer.getId()).toEqual(expect.any(Number))
});

test('creates engineer email', () => {
    const engineer = new Engineer('Jane', 20, "jane@doe.com", "janedoe");
    expect (engineer.getEmail()).toEqual(expect.any(String))
});

test('creates engineer github', () => {
    const engineer = new Engineer('Jane', 20, "jane@doe.com", "janedoe");
    expect (engineer.getGithub()).toEqual(expect.any(String))
})