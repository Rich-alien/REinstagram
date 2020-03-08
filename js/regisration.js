document.addEventListener("DOMContentLoaded", () => {
	"use strict";
	const form = document.querySelector('.form'),
		blockLogin = document.querySelector('.Dblock'),
		btnRegistr = document.querySelector('.btnClick'),
		formReg = document.querySelector('.BlockRegistration'),
		btnEnter = document.querySelector('.enter'),
		theLogin = document.querySelector('.thelogin'),
		thereg = document.querySelector('.thereg'),
		backReg = document.querySelector('.regenter'),
		formLogin = document.querySelector('.formLogin'),
		btnOnFeed = document.querySelector('.btnTest');
	const Registr = [];
	const	Login = [];


	const renderRegistr = () => {
		Registr.forEach((order) => {
				console.log(order.email);
			Login.forEach((orderL) => {
				console.log(orderL.emailOrnickname);
				if ((order.email == orderL.emailOrnickname || order.nickname == orderL.emailOrnickname) &&
					order.password == orderL.password){
					window.location.href = 'main.html';
				} else {
				}
			});
		});
	};
	let test = () =>{

	};


	//добавление окна входа
	btnEnter.addEventListener("click", () => {
		formReg.style.display = "none";
		blockLogin.style.display = "flex";
		theLogin.style.display = "none";
		thereg.style.display = "flex";

		//добавление окна регистрации
	});
	backReg.addEventListener("click", () => {
		blockLogin.style.display = "none";
		formReg.style.display = "flex";
		thereg.style.display = "none";
		theLogin.style.display = "flex";

	});
	btnRegistr.addEventListener("click", ()=>{
		alert("Спасибо за регистрцию, теперь нажмите кнопку Вход" );
	});
	// запись данных с регистрции value
	form.addEventListener("submit", (e) => {
		console.log('hi');
		e.preventDefault();
		const inputsElement = {};
		const elements = [...form.elements];
		elements.forEach((elem) => {
			inputsElement[elem.name] = elem.value;
		});
		form.reset();
		Registr.push(inputsElement);

	});
	//запись данных с входа value
	formLogin.addEventListener("submit", (e) => {
		
		e.preventDefault();
		const inputsElement = {};

		const elements = [...formLogin.elements];
		elements.forEach((elem) => {
			inputsElement[elem.name] = elem.value;
		});
		// formLogin.reset();
		Login.push(inputsElement);
	});

	btnOnFeed.addEventListener("click", () => {
		renderRegistr();
	});
});