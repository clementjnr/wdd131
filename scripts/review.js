let reviewCount =
Number(localStorage.getItem("reviewCount")) || 0;

reviewCount++;

localStorage.setItem(
    "reviewCount",
    reviewCount
);

document.querySelector("#reviewCount").textContent =
`Total Reviews Submitted: ${reviewCount}`;

document.getElementById("currentyear").textContent =
new Date().getFullYear();

document.getElementById("lastModified").textContent =
`Last Modified: ${document.lastModified}`;

