const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

const temples = [
	{
		templeName: "Aba Nigeria",
		location: "Aba, Nigeria",
		dedicated: "2005, August, 7",
		area: 11500,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
		templeName: "Manti Utah",
		location: "Manti, Utah, United States",
		dedicated: "1888, May, 21",
		area: 74792,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
		templeName: "Payson Utah",
		location: "Payson, Utah, United States",
		dedicated: "2015, June, 7",
		area: 96630,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
		templeName: "Yigo Guam",
		location: "Yigo, Guam",
		dedicated: "2020, May, 2",
		area: 6861,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
		templeName: "Washington D.C.",
		location: "Kensington, Maryland, United States",
		dedicated: "1974, November, 19",
		area: 156558,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
		templeName: "Lima Perú",
		location: "Lima, Perú",
		dedicated: "1986, January, 10",
		area: 9600,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
		templeName: "Mexico City Mexico",
		location: "Mexico City, Mexico",
		dedicated: "1983, December, 2",
		area: 116642,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Rome Italy",
		location: "Rome, Italy",
		dedicated: "2019, March, 10",
		area: 41010,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-42837.jpg"
	},
	{
		templeName: "Tokyo Japan",
		location: "Tokyo, Japan",
		dedicated: "1980, October, 27",
		area: 52820,
		imageUrl:
			"https://tokyojapantemple.jp/wp-content/uploads/2022/04/about_history-scaled.jpeg"
	},
	{
		templeName: "Johannesburg South Africa",
		location: "Johannesburg, South Africa",
		dedicated: "1985, August, 24",
		area: 19600,
		imageUrl:
			"https://www.churchofjesuschrist.org/imgs/b378c080e5880db5bf2bcf6d828b2f3fd59820de/full/800%2C/0/default"
	}
];


hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

createTempleCard(temples);

function createTempleCard(temples) {
	temples.forEach(temple => {
		let card = document.createElement("section");
		let name = document.createElement("h3");
		let location = document.createElement("p");
		let dedicated = document.createElement("p");
		let area = document.createElement("p");
		let image = document.createElement("img");

		name.textContent = temple.templeName;
		location.innerHTML = `<span class="label">Location: </span> ${temple.location}`;
		dedicated.innerHTML = `<span class="label">Dedicated: </span> ${temple.dedicated}`;
		area.innerHTML = `<span class="label">Area: </span> ${temple.area} sq ft`;
		image.setAttribute("src", temple.imageUrl);
		image.setAttribute("alt", `${temple.name} Temple`);
		image.setAttribute("loading", "lazy");
		image.style.borderRadius = "10px";
		image.style.maxWidth = "100%";
		image.style.height = "300px";
		image.style.objectFit = "cover";
		image.style.verticalAlign = "middle";


		card.appendChild(image);
		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedicated);
		card.appendChild(area);


		document.querySelector(".card-grid").appendChild(card);
	})
}

function filterTemples(criteria) {
	let filtered;

	switch (criteria) {
		case 'old':
			filtered = temples.filter(t => {
				const year = parseInt(t.dedicated.split(',')[0].trim());
				return year < 1900;
			});
			break;
		case 'new':
			filtered = temples.filter(t => {
				const year = parseInt(t.dedicated.split(',')[0].trim());
				return year > 2000;
			});
			break;
		case 'large':
			filtered = temples.filter(t => t.area > 90000);
			break;
		case 'small':
			filtered = temples.filter(t => t.area < 10000);
			break;
		case 'home':
		default:
			filtered = temples;
	}

	document.querySelector(".card-grid").innerHTML = "";
	createTempleCard(filtered);
}


document.querySelectorAll(".navigation a").forEach(link => {
	link.addEventListener("click", e => {
		e.preventDefault();
		const filter = link.dataset.filter;
		filterTemples(filter);
	});
});