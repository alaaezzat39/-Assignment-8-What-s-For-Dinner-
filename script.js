var meals = [
    {
        name: "Creamy Spaghetti Carbonara",
        cuisine: "Italian",
        difficulty: "Easy",
        rating: 4.8,
        reviews: 234,
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800",
        description: "A classic Italian pasta dish with eggs, cheese, and pancetta",
        prepMinutes: 15,
        cookMinutes: 20,
        servings: "4 people",

        ingredients: [
            "400g spaghetti pasta",
            "200g pancetta",
            "4 large eggs",
            "100g Parmesan cheese",
            "2 cloves garlic",
            "Salt and black pepper"
        ],

        instructions: [
            "Cook the spaghetti in boiling salted water",
            "Cook the pancetta until crispy",
            "Mix eggs and Parmesan cheese in a bowl",
            "Add the hot pasta and mix everything together"
        ],

        nutrition: {
            calories: 520,
            protein: "28g",
            carbs: "62g",
            fat: "18g",
            fiber: "3g",
            sodium: "680mg"
        },

        tips: [
            "Use freshly grated Parmesan",
            "Do not overcook the eggs"
        ]
    },

    {
        name: "Chicken Stir-Fry",
        cuisine: "Asian",
        difficulty: "Easy",
        rating: 4.5,
        reviews: 324,
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800",
        description: "Quick and healthy stir-fry with colorful vegetables",
        prepMinutes: 15,
        cookMinutes: 15,
        servings: "4 people",

        ingredients: [
            "500g chicken breast",
            "2 bell peppers",
            "1 broccoli head",
            "2 carrots",
            "3 tablespoons soy sauce",
            "2 cloves garlic"
        ],

        instructions: [
            "Heat oil in a pan",
            "Cook the chicken",
            "Add the vegetables",
            "Add the sauces and mix everything"
        ],

        nutrition: {
            calories: 380,
            protein: "32g",
            carbs: "18g",
            fat: "16g",
            fiber: "4g",
            sodium: "720mg"
        },

        tips: [
            "Keep the heat high",
            "Slice the chicken thin"
        ]
    },

    {
        name: "Margherita Pizza",
        cuisine: "Italian",
        difficulty: "Intermediate",
        rating: 4.9,
        reviews: 512,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800",
        description: "Classic Italian pizza with fresh mozzarella and basil",
        prepMinutes: 30,
        cookMinutes: 15,
        servings: "2 people",

        ingredients: [
            "300g pizza dough",
            "200g crushed tomatoes",
            "250g fresh mozzarella",
            "Fresh basil leaves",
            "2 tablespoons olive oil",
            "Salt and pepper"
        ],

        instructions: [
            "Prepare the pizza dough",
            "Add the tomato sauce",
            "Add mozzarella",
            "Bake the pizza",
            "Add fresh basil before serving"
        ],

        nutrition: {
            calories: 560,
            protein: "26g",
            carbs: "64g",
            fat: "22g",
            fiber: "3g",
            sodium: "890mg"
        },

        tips: [
            "Preheat the oven",
            "Add basil after baking"
        ]
    },

    {
        name: "Beef Tacos",
        cuisine: "Mexican",
        difficulty: "Easy",
        rating: 4.7,
        reviews: 378,
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800",
        description: "Classic ground beef tacos with fresh toppings",
        prepMinutes: 15,
        cookMinutes: 15,
        servings: "4 people",

        ingredients: [
            "500g ground beef",
            "8 small tortillas",
            "1 cup shredded lettuce",
            "1 cup diced tomato",
            "1 cup shredded cheese",
            "Sour cream and salsa"
        ],

        instructions: [
            "Cook the ground beef",
            "Add taco seasoning",
            "Warm the tortillas",
            "Fill tortillas with beef and toppings"
        ],

        nutrition: {
            calories: 480,
            protein: "28g",
            carbs: "34g",
            fat: "24g",
            fiber: "4g",
            sodium: "820mg"
        },

        tips: [
            "Drain excess fat",
            "Warm the tortillas before serving"
        ]
    }
];


function getRandomMeal() {

    var randomNumber = Math.floor(Math.random() * meals.length);

    return meals[randomNumber];
}


function showMeal(meal) {

    document.getElementById("mealName").textContent = meal.name;

    document.getElementById("mealCuisine").textContent = meal.cuisine;

    document.getElementById("mealDifficulty").textContent = meal.difficulty;

    document.getElementById("mealRating").textContent = meal.rating;

    document.getElementById("mealReviews").textContent =
        "(" + meal.reviews + " reviews)";

    document.getElementById("mealImg").src = meal.image;

    document.getElementById("mealImg").alt = meal.name;

    document.getElementById("mealDesc").textContent = meal.description;

    document.getElementById("mealPrep").textContent =
        meal.prepMinutes + " min";

    document.getElementById("mealCook").textContent =
        meal.cookMinutes + " min";

    document.getElementById("mealServings").textContent =
        meal.servings;


    document.getElementById("mealCalories").textContent =
        meal.nutrition.calories + " kcal";


    var ingredients = "";

    for (var i = 0; i < meal.ingredients.length; i++) {
        ingredients += "<li>" + meal.ingredients[i] + "</li>";
    }

    document.getElementById("mealIngredients").innerHTML = ingredients;


    var instructions = "";

    for (var i = 0; i < meal.instructions.length; i++) {
        instructions += "<li>" + meal.instructions[i] + "</li>";
    }

    document.getElementById("mealInstructions").innerHTML = instructions;


    var tips = "";

    for (var i = 0; i < meal.tips.length; i++) {
        tips += "<li>" + meal.tips[i] + "</li>";
    }

    document.getElementById("mealTips").innerHTML = tips;


    var nutrition = "";

    nutrition +=
        "<div class='nutrition-item'>" +
        "<span class='n-label'>Protein</span>" +
        "<span class='n-value'>" + meal.nutrition.protein + "</span>" +
        "</div>";

    nutrition +=
        "<div class='nutrition-item'>" +
        "<span class='n-label'>Carbohydrates</span>" +
        "<span class='n-value'>" + meal.nutrition.carbs + "</span>" +
        "</div>";

    nutrition +=
        "<div class='nutrition-item'>" +
        "<span class='n-label'>Fat</span>" +
        "<span class='n-value'>" + meal.nutrition.fat + "</span>" +
        "</div>";

    nutrition +=
        "<div class='nutrition-item'>" +
        "<span class='n-label'>Fiber</span>" +
        "<span class='n-value'>" + meal.nutrition.fiber + "</span>" +
        "</div>";

    nutrition +=
        "<div class='nutrition-item'>" +
        "<span class='n-label'>Sodium</span>" +
        "<span class='n-value'>" + meal.nutrition.sodium + "</span>" +
        "</div>";

    document.getElementById("nutritionGrid").innerHTML = nutrition;
}


function randomMeal() {

    var meal = getRandomMeal();

    showMeal(meal);
}


document.getElementById("btnRandom").onclick = function () {

    randomMeal();

};


randomMeal();


function showIngredients() {

    document.getElementById("panel-ingredients").style.display = "block";
    document.getElementById("panel-instructions").style.display = "none";
    document.getElementById("panel-nutrition").style.display = "none";
    document.getElementById("panel-tips").style.display = "none";

    document.getElementById("ingredientsBtn").classList.add("active");
    document.getElementById("instructionsBtn").classList.remove("active");
    document.getElementById("nutritionBtn").classList.remove("active");
    document.getElementById("tipsBtn").classList.remove("active");
}


function showInstructions() {

    document.getElementById("panel-ingredients").style.display = "none";
    document.getElementById("panel-instructions").style.display = "block";
    document.getElementById("panel-nutrition").style.display = "none";
    document.getElementById("panel-tips").style.display = "none";

    document.getElementById("ingredientsBtn").classList.remove("active");
    document.getElementById("instructionsBtn").classList.add("active");
    document.getElementById("nutritionBtn").classList.remove("active");
    document.getElementById("tipsBtn").classList.remove("active");
}


function showNutrition() {

    document.getElementById("panel-ingredients").style.display = "none";
    document.getElementById("panel-instructions").style.display = "none";
    document.getElementById("panel-nutrition").style.display = "block";
    document.getElementById("panel-tips").style.display = "none";

    document.getElementById("ingredientsBtn").classList.remove("active");
    document.getElementById("instructionsBtn").classList.remove("active");
    document.getElementById("nutritionBtn").classList.add("active");
    document.getElementById("tipsBtn").classList.remove("active");
}


function showTips() {

    document.getElementById("panel-ingredients").style.display = "none";
    document.getElementById("panel-instructions").style.display = "none";
    document.getElementById("panel-nutrition").style.display = "none";
    document.getElementById("panel-tips").style.display = "block";

    document.getElementById("ingredientsBtn").classList.remove("active");
    document.getElementById("instructionsBtn").classList.remove("active");
    document.getElementById("nutritionBtn").classList.remove("active");
    document.getElementById("tipsBtn").classList.add("active");
}