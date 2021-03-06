const users = [
	{
		id: 1,
		name: 'ryan',
		email: 'ryan@codeup.com',
		languages: ['clojure', 'javascript'],
		yearsOfExperience: 5
	},
	{
		id: 2,
		name: 'luis',
		email: 'luis@codeup.com',
		languages: ['java', 'scala', 'php'],
		yearsOfExperience: 6
	},
	{
		id: 3,
		name: 'zach',
		email: 'zach@codeup.com',
		languages: ['javascript', 'bash'],
		yearsOfExperience: 7
	},
	{
		id: 4,
		name: 'fernando',
		email: 'fernando@codeup.com',
		languages: ['java', 'php', 'sql'],
		yearsOfExperience: 8
	},
	{
		id: 5,
		name: 'justin',
		email: 'justin@codeup.com',
		languages: ['html', 'css', 'javascript', 'php'],
		yearsOfExperience: 9
	}
];
//Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
const moreThan3Languages = users.filter(user => {return user.languages.length >=3; })
console.log(moreThan3Languages)

//Use .map to create an array of strings where each element is a user's email address
const userEmails = users.map( user => user.email);
console.log(userEmails)

//Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
const totalYearsOfExperience = users.reduce((totalYears, user) => totalYears + user.yearsOfExperience, 0);

let avgYearsOfExperience = totalYearsOfExperience / users.length;
console.log(totalYearsOfExperience)
console.log(avgYearsOfExperience);

//Use .reduce to get the longest email from the list of users.
const longestInstructorEmail = users.reduce((longest, user) => {
	if(user.email.length > longest.length){
		return user.email;
	}else{
		return longest;
	}
}, '');
console.log(longestInstructorEmail);

//Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

const userNames = users.reduce((names, user) =>{
	if(names !== ''){
		names += '';
	}
	return names + ',' + user.name;
}, ' Your instructors are: ')
console.log(userNames)




