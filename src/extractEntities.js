const { City, Brand, DishType, Diet } = require('./db/models');

async function extractEntities(searchTerm) {
  const query = `
    SELECT 'city' AS type, id, name FROM "Cities" WHERE name ILIKE :searchTerm
    UNION ALL
    SELECT 'brand' AS type, id, name FROM "Brands" WHERE name ILIKE :searchTerm
    UNION ALL
    SELECT 'dishType' AS type, id, name FROM "DishTypes" WHERE name ILIKE :searchTerm
    UNION ALL
    SELECT 'diet' AS type, id, name FROM "Diets" WHERE name ILIKE :searchTerm
  `;
  
  const entities = await sequelize.query(query, {
    replacements: { searchTerm: `%${searchTerm}%` },
    type: sequelize.QueryTypes.SELECT
  });

  const combinations = [];

  const city = entities.find(e => e.type === 'city');
  const brand = entities.find(e => e.type === 'brand');
  const dishType = entities.find(e => e.type === 'dishType');
  const diet = entities.find(e => e.type === 'diet');

  if (city) combinations.push({ city });
  if (brand) combinations.push({ brand });
  if (dishType) combinations.push({ dishType });
  if (diet) combinations.push({ diet });

  return combinations;
}

module.exports = extractEntities;
