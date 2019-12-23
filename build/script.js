document.addEventListener('click', interactiv);

function interactiv(event) {
	if (event.target.classList.contains('interactiv-vis')) {
		var invises = Array.from(event.target.closest('.list').querySelectorAll('.interactiv-invis'));
		invises.forEach(function (elem){
			elem.classList.remove('interactiv-invis');
		});
	}
}
