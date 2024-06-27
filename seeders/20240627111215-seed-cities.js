"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Cities", [
        { name: "London" },
        { name: "Birmingham" },
        { name: "Glasgow" },
        { name: "Liverpool" },
        { name: "Bristol" },
        { name: "Manchester" },
        { name: "Sheffield" },
        { name: "Leeds" },
        { name: "Edinburgh" },
        { name: "Leicester" },
        { name: "Coventry" },
        { name: "Bradford" },
        { name: "Cardiff" },
        { name: "Belfast" },
        { name: "Nottingham" },
        { name: "Derby" },
        { name: "Southampton" },
        { name: "Portsmouth" },
        { name: "Wolverhampton" },
        { name: "Plymouth" },
        { name: "Reading" },
        { name: "Swansea" },
        { name: "Aberdeen" },
        { name: "Bournemouth" },
        { name: "Middlesbrough" },
        { name: "Norwich" },
        { name: "Brighton and Hove" },
        { name: "Northampton" },
        { name: "York" },
        { name: "Blackpool" },
        { name: "Cambridge" },
        { name: "Dundee" },
        { name: "Ipswich" },
        { name: "Wolverhampton" },
        { name: "Luton" },
        { name: "Bolton" },
        { name: "Swindon" },
        { name: "Preston" },
        { name: "Milton Keynes" },
        { name: "Rotherham" },
        { name: "Peterborough" },
        { name: "Newport" },
        { name: "Sunderland" },
        { name: "Walsall" },
        { name: "Bury" },
        { name: "Crawley" },
        { name: "Stockport" },
        { name: "Dudley" },
        { name: "Teesside" },
        { name: "Brighton" }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Cities", null, {});
  },
};
