'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Diets', [
      { name: "Vegan" },
      { name: "Vegetarian" },
      { name: "Pescatarian" },
      { name: "Paleo" },
      { name: "Fruitarian" },
      { name: "Ketogenic" },
      { name: "Gluten-Free" },
      { name: "Dairy-Free" },
      { name: "Egg-Free" },
      { name: "Soy-Free" },
      { name: "Grain-Free" },
      { name: "Sugar-Free" },
      { name: "Wheat-Free" },
      { name: "Nut-Free" },
      { name: "Carnivore" },
      { name: "Alkaline" },
      { name: "Pollotarian" },
      { name: "Shellfish-Free" }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Diets', null, {});
  }
};
