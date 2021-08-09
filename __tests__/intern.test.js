const Intern = require("../lib/Intern");

test('creates an intern object', () => {
    const intern = new Intern('Somebody');
    expect(typeof(intern)).toBe('object');
});

test('can set values via constructor argument', () => {
    const intern = new Intern('Somebody', 30, "somebody@special.com", "University of Somewhere")
    
    expect (intern.name).toEqual("Somebody");
    expect (intern.id).toEqual(30);
    expect (intern.email).toEqual("somebody@special.com");
    expect (intern.school).toEqual("University of Somewhere");
  })

// test to see if my methods for getting data work correctly
test('creates intern name', () => {
    const intern = new Intern('Somebody', 30, "somebody@special.com", "University of Somewhere");
    expect (intern.getName()).toEqual(expect.any(String))
});

test('creates intern id', () => {
    const intern = new Intern('Somebody', 30, "somebody@special.com", "University of Somewhere");
    expect (intern.getId()).toEqual(expect.any(Number))
});

test('creates intern email', () => {
    const intern = new Intern('Somebody', 30, "somebody@special.com", "University of Somewhere");
    expect (intern.getEmail()).toEqual(expect.any(String))
});

test('creates intern role', () => {
    const intern = new Intern('Somebody', 30, "somebody@special.com", "University of Somewhere");
    expect (intern.getRole()).toBe("Intern")
})

test('creates intern school', () => {
    const intern = new Intern('Somebody', 30, "somebody@special.com", "University of Somewhere");
    expect (intern.getSchool()).toEqual(expect.any(String))
})