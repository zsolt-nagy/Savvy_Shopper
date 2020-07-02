import React from 'react';
import './greeting.scss';
import { render } from 'react-dom';

function setName() {
	let yourName = localStorage.getItem('userName');

	if (yourName === null) {
		return (yourName = localStorage.setItem('userName', prompt('Enter Your Name:')));
	}
}

setName();

const daysInWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthsInYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function App() {
	const date = new Date();
	const hours = date.getHours();
	const rightNow = date.toLocaleTimeString();
	const dayOfWeek = date.getDay();
	const month = date.getMonth();
	const dayOfMonth = date.getDate();

	let theme;
	let timeOfDay;
	let today = daysInWeek[dayOfWeek];
	let thisMonth = monthsInYear[month];

	if (hours > 11) {
		timeOfDay = 'Good Morning, ';
		theme = 'greeting morning';
	} else if (hours >= 11 && hours < 17) {
		timeOfDay = 'Good Afternoon, ';
		theme = 'greeting afternoon';
	} else {
		timeOfDay = 'Good Evening, ';
		theme = 'greeting night';
	}

	return (
		<div className={theme}>
			<div className='date-time'>
				<h2>{rightNow}</h2>
				<h2>{today + ', ' + thisMonth + ' ' + dayOfMonth}</h2>
			</div>
			<h1>{timeOfDay + localStorage.getItem('userName') + '!'}</h1>
		</div>
	);
}

function Greeting() {
	return setInterval(App, 1000);
}

export default App;
