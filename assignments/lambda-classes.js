// CODE here for your Lambda Classes
class Person {
	constructor(prop) {
		this.name = prop.name;
		this.age = prop.age;
		this.location = prop.location;
	}
	speak() {
		return `Hello my name is ${this.name}, I am from ${this.location}`;
	}
}

class Instructor extends Person {
	constructor(prop) {
		super(prop);
		this.specialty = prop.specialty;
		this.favLanguage = prop.favLanguage;
		this.catchPhrase = prop.catchPhrase;
	}
	demo(subject) {
		return `Today we are learning about ${subject}`;
	}
	grade(student, subject) {
		return `${student} receives a perfect score on ${subject}`;
	}
}

class Student extends Person {
	constructor(prop) {
		super(prop);
		this.previousBackground = prop.previousBackground;
		this.className = prop.className;
		this.favSubject = prop.favSubject;
	}
	listsSubjects() {
		return `${this.favSubject}`;
	}
	PRAssignment(subject) {
		return `${this.name} has submitted a PR for ${subject}`;
	}
	sprintChallenge(subject) {
		return `${this.name} has begun sprint challenge on ${subject}`;
	}
}

class ProjectManager extends Instructor {
	constructor(prop) {
		super(prop);
		this.gradClassName = prop.gradClassName;
		this.favInstructor = prop.favInstructor;
	}
	standUp(channel) {
		return `${this.name} announces to ${channel}, @channel standy time!`;
	}
	debugsCode(object, subject) {
		return `${this.name} debugs ${object.name}'s code on ${subject}`;
	}
}

const jenny = new Student({
	name: 'Jenny',
	age: 19,
	location: 'Mexico',
	previousBackground: 'College Student',
	className: 'WebPT9',
	favSubject: ['Html', 'CSS']
})

const david = new Student({
	name: 'David',
	age: 21,
	location: 'Canada',
	previousBackground: 'Full-Time Job',
	className: 'UX/UIPT9',
	favSubject: ['Javascript', 'CSS']
})

const fred = new Instructor({
	name: 'Fred',
	location: 'Bedrock',
	age: 37,
	favLanguage: 'JavaScript',
	specialty: 'Front-end',
	catchPhrase: `Don't forget the homies`
 });

 const bill = new Instructor({
	 name: 'Bill',
	 location: 'America',
	 age: 24,
	 favLanguage: 'C++',
	 specialty: 'Back-end',
	 catchPhrase: 'Technology rules the world'
 });

 const john = new ProjectManager({
	name: 'John',
	location: 'England',
	age: 31,
	gradClassName: 'CS1',
	favInstructor: 'Daniel'
 });

 const frank = new ProjectManager({
	name: 'Frank',
	location: 'California',
	age: 32,
	gradClassName: 'CS5',
	favInstructor: 'Sean'
 });