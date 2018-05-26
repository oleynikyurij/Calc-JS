let totalPrice = 5000,

	time = 1,
	hourRate,
	tabLeft = document.querySelector('.tab-left'),
	tabRight = document.querySelector('.tab-right'),
	blocksBlock = document.getElementById('blocks-block'),
	counterBlock = document.getElementById('counter-block'),
	pagesBlock = document.getElementById('pages-block'),
	counterPages = document.getElementById('counter-pages'),
	counterHours = document.getElementById('counter-hours'),
	counterRate = document.getElementById('counter-rate'),
	changesCheck = document.getElementById('changes-check'),
	changesCMS = document.getElementById('changes-cms'),
	totalValue = document.getElementsByClassName('total-count')[0],
	input = document.getElementsByTagName('input');

const landingPrice = 5000,
	corporateSiteprice = 12000,
	blocksPrice = 500,
	pagesPrice = 2500,
	cmsPrice = 4000,
	changesSite = 1000;


	window.addEventListener('DOMContentLoaded', function() {

		tabLeft.addEventListener('click', () => {

			for (let i = 0; i < input.length; i++) {
				input[i].value = '';
							
			};

			blocksBlock.style.display = 'flex';
			pagesBlock.style.display = 'none';

			tabLeft.classList.add('active');
			tabRight.classList.remove('active');

			if (changesCheck.checked) {
				changesCheck.checked = false;
			};

			if (changesCMS.checked) {
				changesCMS.checked = false;
			};

			totalPrice = landingPrice;
			totalValue.value = totalPrice;


		});

		tabRight.addEventListener('click', () => {

			for (let i = 0; i < input.length; i++) {
				input[i].value = '';
							
			};

			blocksBlock.style.display = 'none';
			pagesBlock.style.display = 'flex';

			tabRight.classList.add('active');
			tabLeft.classList.remove('active');

			if (changesCheck.checked) {
				changesCheck.checked = false;
			};

			if (changesCMS.checked) {
				changesCMS.checked = false;
			};

			totalPrice = corporateSiteprice;
			totalValue.value = totalPrice;


		});
	});