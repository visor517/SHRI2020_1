stubs();

//вставляем заглушки
function stubs() {
	var imgList = document.querySelectorAll('.image');
	for (var i=0; i<imgList.length; i++) {
		var theme = window.getComputedStyle(imgList[i]).borderColor; //вычисляем тему по цвету примененного бордера
		if (theme == 'rgb(0, 0, 0)') {imgList[i].innerHTML ='<svg width="80px" height="64px" viewBox="0 0 80 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>placeholder</title><desc>Created with Sketch.</desc><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="image-placeholder" transform="translate(-500.000000, -368.000000)" fill="#000000" fill-rule="nonzero"><g id="Group" transform="translate(500.000000, 368.000000)"><g id="placeholder"><path d="M32,16 L48,16 L48,8 L56,8 L56,16 L64,16 L64,24 L72,24 L72,32 L80,32 L80,48 L72,48 L72,40 L64,40 L64,48 L56,48 L56,56 L48,56 L48,48 L32,48 L32,56 L24,56 L24,48 L16,48 L16,40 L8,40 L8,48 L0,48 L0,32 L8,32 L8,24 L16,24 L16,16 L24,16 L24,8 L32,8 L32,16 Z M24,32 L32,32 L32,24 L24,24 L24,32 Z M16,0 L24,0 L24,8 L16,8 L16,0 Z M16,56 L24,56 L24,64 L16,64 L16,56 Z M56,32 L56,24 L48,24 L48,32 L56,32 Z M64,0 L64,8 L56,8 L56,0 L64,0 Z M64,56 L64,64 L56,64 L56,56 L64,56 Z" id="Shape"></path></g></g></g></g></svg>';} 
		else {imgList[i].innerHTML ='<svg width="80px" height="64px" viewBox="0 0 80 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>placeholder</title><desc>Created with Sketch.</desc><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="image-placeholder" transform="translate(-620.000000, -368.000000)" fill="#FFFFFF" fill-rule="nonzero"><g id="Group" transform="translate(500.000000, 368.000000)"><g id="placeholder" transform="translate(120.000000, 0.000000)"><path d="M32,16 L48,16 L48,8 L56,8 L56,16 L64,16 L64,24 L72,24 L72,32 L80,32 L80,48 L72,48 L72,40 L64,40 L64,48 L56,48 L56,56 L48,56 L48,48 L32,48 L32,56 L24,56 L24,48 L16,48 L16,40 L8,40 L8,48 L0,48 L0,32 L8,32 L8,24 L16,24 L16,16 L24,16 L24,8 L32,8 L32,16 Z M24,32 L32,32 L32,24 L24,24 L24,32 Z M16,0 L24,0 L24,8 L16,8 L16,0 Z M16,56 L24,56 L24,64 L16,64 L16,56 Z M56,32 L56,24 L48,24 L48,32 L56,32 Z M64,0 L64,8 L56,8 L56,0 L64,0 Z M64,56 L64,64 L56,64 L56,56 L64,56 Z" id="Shape"></path></g></g></g></g></svg>';}
	}
}

// ловим клик на переключатель
if (document.querySelector('.onoffswitch__button')) document.querySelector('.onoffswitch__button').addEventListener('click', switcher);

function switcher(event) {
	//переключатель
	var onoffswitch = this.parentNode;
	if (onoffswitch.classList.contains('onoffswitch_checked')) onoffswitch.classList.remove('onoffswitch_checked');
	else onoffswitch.classList.add('onoffswitch_checked');
	//смена тем
	var themesDefault = document.querySelectorAll('.theme_color_project-default');
	var themesInverse = document.querySelectorAll('.theme_color_project-inverse');

	for (var i=0; i<themesDefault.length; i++) {
		themesDefault[i].classList.remove('theme_color_project-default');
		themesDefault[i].classList.add('theme_color_project-inverse');
	}
	for (var i=0; i<themesInverse.length; i++) {
		themesInverse[i].classList.remove('theme_color_project-inverse');
		themesInverse[i].classList.add('theme_color_project-default');
	}
	//меняем заглушки
	stubs();
}

//ловим клики по блоку истроии
if (document.querySelector('.history')) document.querySelector('.history').addEventListener('click', disclosure);

function disclosure(event) {
	var item = event.target.closest('.history__transaction');
	if (item != null) {
		var item_more = item.querySelector('.e-accordion__more')
		if (item_more.classList.contains('history__hide')) item_more.classList.remove('history__hide');
		else item_more.classList.add('history__hide');
	}
}