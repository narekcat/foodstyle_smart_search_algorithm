'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Brands', [
      { name: "Costa Coffee" },
      { name: "Greggs" },
      { name: "Subway" },
      { name: "McDonald's" },
      { name: "KFC" },
      { name: "Greene King" },
      { name: "Wetherspoon" },
      { name: "Caffé Nero" },
      { name: "Burger King" },
      { name: "Pizza Hut" },
      { name: "Pret A Manger" },
      { name: "PizzaExpress" },
      { name: "Hungry Horse" },
      { name: "Lounges" },
      { name: "Sushimania" },
      { name: "Five Guys" },
      { name: "Chef & Brewer Collection" },
      { name: "Gail's" },
      { name: "Zizzi" },
      { name: "Taco Bell" },
      { name: "Creams" },
      { name: "Coffee#1" },
      { name: "Prezzo" },
      { name: "Morley's" },
      { name: "Favorite" },
      { name: "Chaiiwala" },
      { name: "Cote" },
      { name: "Panku" },
      { name: "Itsu" },
      { name: "Kaspa's Desserts" },
      { name: "Fridays" },
      { name: "Poundbakery" },
      { name: "Kokoro" },
      { name: "Bella Italia" },
      { name: "Chopstix" },
      { name: "JOE & THE JUICE" },
      { name: "Tortilla" },
      { name: "Franco Manca" },
      { name: "Tops Pizza" },
      { name: "Ask Italian" },
      { name: "Farmhouse Inns" },
      { name: "Wimpy" },
      { name: "Muffin Break" },
      { name: "Black Sheep Coffee" },
      { name: "Turtle Bay" },
      { name: "Giggling Squid" },
      { name: "Heavenly Desserts" },
      { name: "Sam's Chicken" },
      { name: "Tim Hortons" },
      { name: "Wildwood" }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Brands', null, {});
  }
};
