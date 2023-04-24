(function () {
	/**
	*  Utils
	**/
	// Set random value between min and max
	function between(min, max) {
		return Math.floor(
			Math.random() * (max - min) + min
		)
	}

	// Clamp value between min and max
	Number.prototype.clamp = function (min, max) {
		return Math.min(Math.max(this, min), max);
	}

	/**
	*  setTimeout via promise
	**/
	function delay(ms) {
		return new Promise((resolve, reject) => {
			setTimeout(resolve, ms);
		});
	}
	/* 
	Using ->

	delay(500)
	.then(() => {
			console.log("Some heavy operation")
	}).then(() => {
			console.log('New action that goes after heavy operation')
	})

	*/

	/**
	 * Sizes
	 */
	const sizes = {
		width: window.innerWidth,
		height: window.innerHeight
	}

	const $languageMenuEl = $('#city-select');
	const $languageMenuMobilesEl = $('#city-select-mobile');

	if (sizes.width <= 1170) {
		// Inferior than 1170
		$languageMenuMobilesEl.selectric({
			forceRenderAbove: true,
			disableOnMobile: false,
			nativeOnMobile: false,
			inheritOriginalWidth: false,
			arrowButtonMarkup: `<span class="city-select__label"><svg class="city-select__label-svg-arrow" width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 7V0L7 3.5L0.5 7Z" fill="#252525"/></svg><span class="city-select__label-span">Сменить</span></span>`,
			// `
			// <span class="city-select__label">
			// 	<svg class="city-select__label-svg-arrow" width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
			// 		<path d="M0.5 7V0L7 3.5L0.5 7Z" fill="#252525"/>
			// 	</svg>
			// 	<span class="city-select__label-span">Сменить</span>
			// </span>
			// `
		});
	} else {
		// Greater than 1170
		$languageMenuEl.selectric({
			disableOnMobile: false,
			nativeOnMobile: false,
			inheritOriginalWidth: false,
			arrowButtonMarkup: `<span class="city-select__label"><svg class="city-select__label-svg-arrow" width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 7V0L7 3.5L0.5 7Z" fill="#252525"/></svg><span class="city-select__label-span">Сменить</span></span>`,
			// `
			// <span class="city-select__label">
			// 	<svg class="city-select__label-svg-arrow" width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
			// 		<path d="M0.5 7V0L7 3.5L0.5 7Z" fill="#252525"/>
			// 	</svg>
			// 	<span class="city-select__label-span">Сменить</span>
			// </span>
			// `
		});
	}

	const openMainMenuBtnEl = document.querySelector('.js-open-main-menu');
	const mainMenuEl = document.querySelector('.js-main-menu');
	if (openMainMenuBtnEl) {
		openMainMenuBtnEl.addEventListener('click', () => {
			mainMenuEl.classList.toggle('main-menu__categories--open')
		});
	}

	const openMenuBtnEl = document.querySelector('.js-open-menu');
	const menuEl = document.querySelector('.js-menu');
	if (openMenuBtnEl) {
		openMenuBtnEl.addEventListener('click', () => {
			menuEl.classList.toggle('nav-menu--open')
		});
	}
	const closeMenuBtnEl = document.querySelector('.js-close-menu');
	if (closeMenuBtnEl) {
		closeMenuBtnEl.addEventListener('click', () => {
			menuEl.classList.remove('nav-menu--open')
		});
	}


}());
