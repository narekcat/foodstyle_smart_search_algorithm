'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('DishTypes', [
      { name: "Seafood" },
      { name: "Lean Fish" },
      { name: "Sole" },
      { name: "Bass" },
      { name: "Cod" },
      { name: "Bream" },
      { name: "Whitebait" },
      { name: "Tilapia" },
      { name: "Halibut" },
      { name: "Trout" },
      { name: "Haddock" },
      { name: "Plaice" },
      { name: "Monkfish" },
      { name: "Skate" },
      { name: "Fatty Fish" },
      { name: "Salmon" },
      { name: "Anchovy" },
      { name: "Mackerel" },
      { name: "Sardines" },
      { name: "Tuna" },
      { name: "Seafood Ceviche" },
      { name: "Seafood Carpaccio" },
      { name: "Seafood Tartare" },
      { name: "Seafood Tataki" },
      { name: "Seafood & Chips" },
      { name: "Seafood Cake" },
      { name: "Scallops" },
      { name: "Oysters" },
      { name: "Octopus" },
      { name: "Squid" },
      { name: "Scampi" },
      { name: "Lobster" },
      { name: "Prawn" },
      { name: "Crab" },
      { name: "Molluscs" },
      { name: "Surf & Turf" },
      { name: "Maki" },
      { name: "Aubergine Dish" },
      { name: "Beetroot Dish" },
      { name: "Cauliflower Dish" },
      { name: "Pepper Dish" },
      { name: "Cabbage Dish" },
      { name: "Squash Dish" },
      { name: "Asparagus Dish" },
      { name: "Fried Potatoes" },
      { name: "Sushi" },
      { name: "Pak Choi Dish" },
      { name: "Tofu" },
      { name: "Chocolate cake" },
      { name: "Kimchi" },
      { name: "Pickles" },
      { name: "Gherkin" },
      { name: "Potatoes" },
      { name: "Mashed Potatoes" },
      { name: "Potato Cake" },
      { name: "Potato Salad" },
      { name: "Baked Potato" },
      { name: "Potato Skins" },
      { name: "Moussaka" },
      { name: "Hash Browns" },
      { name: "Roast Potatoes" },
      { name: "Sweet Potato Dish" },
      { name: "Chips" },
      { name: "Potato Wedges" },
      { name: "Sweet Potato Chips" },
      { name: "Okra Dish" },
      { name: "Tomato Dish" },
      { name: "Avocado Dish" },
      { name: "Green Bean Dish" },
      { name: "Plantain Dish" },
      { name: "Rice, Bowls & Stir Fry" },
      { name: "Pasta Dish" },
      { name: "Mac & Cheese" },
      { name: "Carbonara" }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('DishTypes', null, {});
  }
};
