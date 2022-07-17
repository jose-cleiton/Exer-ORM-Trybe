'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert('Stores', [
      {
        name: "Arapúa",
        description: "Aqui voçê tem negócio."        
      },
      {
        name: "Bebidas",
        description: "Aqui voçê tem bebidas."

      },
    {
        name: "Carnes",
        description: "Aqui voçê tem carnes."
    },
    {
        name: "Doces",
        description: "Aqui voçê tem doces."

    },
    {
        name: "Frutas",
        description: "Aqui voçê tem frutas."
    },
    {
        name: "Hortifruti",
        description: "Aqui voçê tem hortifruti."
    }

  
  ]);
   
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Stores', null, {});
  }
};
