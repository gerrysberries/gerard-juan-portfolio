const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', e => {
	e.preventDefault();

	// code to submit form data here

	// reset form fields
	form.reset();
	form.action = 'https://formspree.io/f/xoqzrzay';
	nameInput.focus();
});
