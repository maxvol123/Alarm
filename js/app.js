let title = document.querySelector('.form__title')
let description = document.querySelector('.form__description')
let button = document.querySelector('.create')
let posts = document.querySelector('.posts')
let time = document.querySelector('.time')
let time1 = document.querySelector('.time1')
let modal = document.querySelector('.modal')
let close = document.querySelector('.close')
let bg = document.querySelector('.bg')
let checkbox = document.querySelector('.checkbox__input')
let nowSeconds = 1

close.addEventListener('click', ()=>{
	modal.style.display='none'
	bg.style.opacity='1'
})
function alarmTime(event) {
	let current_time= new Date()
	let nowHours = current_time.getHours()
	let nowMinutes = current_time.getMinutes()
	time.innerHTML = nowSeconds
	if (nowHours<10) {
		if (nowMinutes<10) {
			nowSeconds = `0${current_time.getHours()}` + ":"+ `0${current_time.getMinutes()}`
		}else{
		nowSeconds = `0${current_time.getHours()}` + ":"+ `${current_time.getMinutes()}`
	}
	}else{
		if (nowMinutes<10) {
			nowSeconds = `${current_time.getHours()}` + ":"+ `0${current_time.getMinutes()}`
		}else{
		nowSeconds = `${current_time.getHours()}` + ":"+ `${current_time.getMinutes()}`
	}
	}
	console.log(checkbox.value);
	time.innerHTML = nowSeconds
	
	if (nowSeconds == event ) {
		modal.style.display='block'
		bg.style.opacity='0.5'
		if (checkbox.checked===true) {
			console.log(123541);
		}else{
			console.log(123);
			posts.style.display='none'
		}
	}
	return nowSeconds
}

alarmTime()
setInterval(alarmTime, 1000)
	button.addEventListener('click',()=>{
		if (title.value=="") {
			
		} else {
			posts.style.display='flex'
			alarmTime(title.value)
			console.log(title.value);
			posts.innerHTML = `<div class="time1">Alarm time ${title.value} </div><div class="description">${description.value}</div>`;
		}
	})

