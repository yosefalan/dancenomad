'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'District Zouk',
        email: 'districtzouk@mail.com',
        hashedPassword: bcrypt.hashSync('password'),
        url: 'https://dancenomad.s3.us-east-2.amazonaws.com/profile_pics/1.png'
      },
      {
        username: 'Interfusion',
        email: 'interfusion@mail.com',
        hashedPassword: bcrypt.hashSync('password'),
        url: 'https://dancenomad.s3.us-east-2.amazonaws.com/profile_pics/2.png'
      },
      {
        username: 'Seattle Zouk',
        email: 'seatllezouk@mail.com',
        hashedPassword: bcrypt.hashSync('password'),
        url: 'https://dancenomad.s3.us-east-2.amazonaws.com/profile_pics/3.jpg'
      },
      {
        username: 'Aventura Cruises',
        email: 'aventuracruises@mail.com',
        hashedPassword: bcrypt.hashSync('password'),
        url: 'https://dancenomad.s3.us-east-2.amazonaws.com/profile_pics/4.png'
      },
      {
        username: 'YoZouk',
        email: 'yozouk@mail.com',
        hashedPassword: bcrypt.hashSync('password'),
        url: 'https://dancenomad.s3.us-east-2.amazonaws.com/profile_pics/5.png'
      },
      {
        username: 'Zouk Heat',
        email: 'zoukheat@mail.com',
        hashedPassword: bcrypt.hashSync('password'),
        url: 'https://dancenomad.s3.us-east-2.amazonaws.com/profile_pics/6.png'
      },

      {
        username: 'New York International Salsa Congress',
        email: 'nysalsacongress@mail.com',
        hashedPassword: bcrypt.hashSync('password'),
        url: 'https://dancenomad.s3.us-east-2.amazonaws.com/profile_pics/7.jpg'
      },
      {
        username: 'ZoukMx',
        email: 'zoukmx@mail.com',
        hashedPassword: bcrypt.hashSync('password'),
        url: 'https://dancenomad.s3.us-east-2.amazonaws.com/profile_pics/8.jpg'
      },
      {
        username: 'DCBX ',
        email: 'dcbx@mail.com',
        hashedPassword: bcrypt.hashSync('password'),
        url: 'https://dancenomad.s3.us-east-2.amazonaws.com/profile_pics/9.jfif'
      },
      {
        username: 'Baltimore Salsa ',
        email: 'baltimoresalsa@mail.com',
        hashedPassword: bcrypt.hashSync('password'),
        url: 'https://dancenomad.s3.us-east-2.amazonaws.com/profile_pics/10.jpg'
      },
      {
        username: 'Grace',
        email: 'grace@mail.com',
        hashedPassword: bcrypt.hashSync('password'),
        url: 'https://dancenomad.s3.us-east-2.amazonaws.com/profile_pics/11.jpg'
      },
      {
        username: 'Pawel',
        email: 'pawel@mail.com',
        hashedPassword: bcrypt.hashSync('password'),
        url: 'https://dancenomad.s3.us-east-2.amazonaws.com/profile_pics/12.jpg'
      },
      {
        username: 'Amanda ',
        email: 'amanda@mail.com',
        hashedPassword: bcrypt.hashSync('password'),
        url: 'https://dancenomad.s3.us-east-2.amazonaws.com/profile_pics/13.jpg'
      },
      {
        username: 'Ashley',
        email: 'ashley@mail.com',
        hashedPassword: bcrypt.hashSync('password'),
        url: 'https://dancenomad.s3.us-east-2.amazonaws.com/profile_pics/14.webp'
      },
      {
        username: 'Rob',
        email: 'rob@mail.com',
        hashedPassword: bcrypt.hashSync('password'),
        url: 'https://dancenomad.s3.us-east-2.amazonaws.com/profile_pics/15.jfif'
      },
      {
        username: 'Trevis',
        email: 'trevis@mail.com',
        hashedPassword: bcrypt.hashSync('password'),
        url: 'https://dancenomad.s3.us-east-2.amazonaws.com/profile_pics/16.jfif'
      },
      {
        username: 'Chrissy',
        email: 'chrissy@mail.com',
        hashedPassword: bcrypt.hashSync('password'),
        url: 'https://dancenomad.s3.us-east-2.amazonaws.com/profile_pics/17.jfif'
      },
      {
        username: 'Demo-lition',
        email: 'demo-lition@mail.com',
        hashedPassword: bcrypt.hashSync('password'),
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {}, {});
  }
};
