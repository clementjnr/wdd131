// Footer

const year = document.getElementById("currentyear");

if (year) {
    year.textContent = new Date().getFullYear();
}

const modified = document.getElementById("lastModified");

if (modified) {
    modified.textContent = `Last Modified: ${document.lastModified}`;
}

// Food Data (Objects + Array)

const foods = [
    {
        name: "Jollof Rice",
        category: "rice",
        image: "images/jollof-rice.jpeg",
        description: "Nigeria's famous spicy rice dish."
    },
    {
        name: "Fried Rice",
        category: "rice",
        image: "images/fried-rice.jpeg",
        description: "Rice cooked with vegetables and meat."
    },
    {
        name: "Suya",
        category: "grill",
        image: "images/suya.jpeg",
        description: "Spicy grilled beef snack."
    },
    {
        name: "Asun",
        category: "grill",
        image: "images/asun.webp",
        description: "Peppered grilled goat meat."
    },
    {
        name: "Amala & Ewedu",
        category: "swallow",
        image: "images/amala.webp",
        description: "Popular Yoruba swallow meal."
    },
    {
        name: "Pounded Yam & Egusi",
        category: "swallow",
        image: "images/pounded-yam.jpeg",
        description: "Traditional Nigerian delicacy."
    }
];

// DOM

const foodsContainer = document.getElementById("foodsContainer");

// Display Foods

function displayFoods(foodList) {

    if (!foodsContainer) return;

    foodsContainer.innerHTML = "";

    foodList.forEach(food => {

        foodsContainer.innerHTML += `
            <article class="card">
                <img
                    src="${food.image}"
                    alt="${food.name}"
                    loading="lazy">

                <h3>${food.name}</h3>

                <p>${food.description}</p>
            </article>
        `;
    });
}

// Home Display

if (foodsContainer) {
    displayFoods(foods);
}

// Filter Buttons

const allBtn = document.getElementById("allBtn");
const riceBtn = document.getElementById("riceBtn");
const grillBtn = document.getElementById("grillBtn");
const swallowBtn = document.getElementById("swallowBtn");

if (allBtn) {

    allBtn.addEventListener("click", () => {
        displayFoods(foods);
    });

    riceBtn.addEventListener("click", () => {
        displayFoods(
            foods.filter(food => food.category === "rice")
        );
    });

    grillBtn.addEventListener("click", () => {
        displayFoods(
            foods.filter(food => food.category === "grill")
        );
    });

    swallowBtn.addEventListener("click", () => {
        displayFoods(
            foods.filter(food => food.category === "swallow")
        );
    });
}

// Form + localStorage

const foodForm = document.getElementById("foodForm");

if (foodForm) {

    foodForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("fullName").value;
        const food = document.getElementById("favoriteFood").value;

        const submission = {
            name,
            food
        };

        localStorage.setItem(
            "lagosFoodGuide",
            JSON.stringify(submission)
        );

        document.getElementById("savedMessage").textContent =
            `Thank you ${name}! Your favorite food (${food}) has been saved.`;

        foodForm.reset();
    });
}
