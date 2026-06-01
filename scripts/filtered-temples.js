const temples = [
{
templeName: "Aba Nigeria",
location: "Aba, Nigeria",
dedicated: "2005, August, 7",
area: 11500,
imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5549.jpg"
},
{
templeName: "Manti Utah",
location: "Manti, Utah, United States",
dedicated: "1888, May, 21",
area: 74792,
imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-7612.jpg"
},
{
templeName: "Payson Utah",
location: "Payson, Utah, United States",
dedicated: "2015, June, 7",
area: 96630,
imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-38438.jpg"
},
{
templeName: "Yigo Guam",
location: "Yigo, Guam",
dedicated: "2020, May, 2",
area: 6861,
imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/yigo-guam-temple-2910.jpg"
},
{
templeName: "Washington D.C.",
location: "Maryland, United States",
dedicated: "1974, November, 19",
area: 156558,
imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/washington-dc-temple/washington-dc-temple-8355.jpg"
},
{
templeName: "Lima Peru",
location: "Lima, Peru",
dedicated: "1986, January, 10",
area: 9600,
imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-temple/lima-peru-temple-107.jpg"
},
{
templeName: "Mexico City Mexico",
location: "Mexico City, Mexico",
dedicated: "1983, December, 2",
area: 116642,
imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-406.jpg"
},

/* YOUR EXTRA 3 TEMPLES */

{
templeName: "Accra Ghana",
location: "Accra, Ghana",
dedicated: "2004, January, 11",
area: 17500,
imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-38295.jpg"
},
{
templeName: "Rome Italy",
location: "Rome, Italy",
dedicated: "2019, March, 10",
area: 41010,
imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-40477.jpg"
},
{
templeName: "Salt Lake",
location: "Salt Lake City, Utah",
dedicated: "1893, April, 6",
area: 253000,
imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-37762.jpg"
}
];

const gallery = document.querySelector(".gallery");

function displayTemples(filteredTemples) {

gallery.innerHTML = "";

filteredTemples.forEach(temple => {

const card = document.createElement("section");

card.classList.add("card");

card.innerHTML = `
<h3>${temple.templeName}</h3>
<p><strong>Location:</strong> ${temple.location}</p>
<p><strong>Dedicated:</strong> ${temple.dedicated}</p>
<p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>

<img
src="${temple.imageUrl}"
alt="${temple.templeName}"
loading="lazy">
`;

gallery.appendChild(card);

});
}

displayTemples(temples);

document.querySelector("#home").addEventListener("click", (e) => {
    e.preventDefault();
    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", (e) => {
    e.preventDefault();
    displayTemples(
        temples.filter(t => Number(t.dedicated.split(",")[0]) < 1900)
    );
});

document.querySelector("#new").addEventListener("click", (e) => {
    e.preventDefault();
    displayTemples(
        temples.filter(t => Number(t.dedicated.split(",")[0]) > 2000)
    );
});

document.querySelector("#large").addEventListener("click", (e) => {
    e.preventDefault();
    displayTemples(
        temples.filter(t => t.area > 90000)
    );
});

document.querySelector("#small").addEventListener("click", (e) => {
    e.preventDefault();
    displayTemples(
        temples.filter(t => t.area < 10000)
    );
});


document.getElementById("currentyear").textContent =
new Date().getFullYear();

document.getElementById("lastModified").textContent =
`Last Modified: ${document.lastModified}`;
