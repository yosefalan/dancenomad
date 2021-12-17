'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Events', [
     {
      hostId: 1,
      venueId: 1,
      name: 'January Swouk DC Party ',
      description: 'Join us for a night of Brazilian zouk and West Coast Swing! We\'ll have beginner classes, a swouk workshop, and lots of dancing.',
      start_date: new Date(2022, 0, 8),
      end_date: new Date(2022, 0, 9),
      image_url: 'https://dancenomad.s3.us-east-2.amazonaws.com/event_pics/1.jpg'
     },
     {
      hostId: 2,
      venueId: 2,
      name: 'Interfusion Festival ',
      description: 'Interfusion Festival: Ascension includes 4 days of transformative workshops, intensives & immersions, evening shows, performances with national and international instructors, performers and dj\'s.',
      start_date: new Date(2022, 0, 13),
      end_date: new Date(2022, 0, 17),
      image_url: 'https://dancenomad.s3.us-east-2.amazonaws.com/event_pics/2.jpg'
     },   {
      hostId: 3,
      venueId: 3,
      name: 'Lui & Larissa Seattle Zouk Weekender',
      description: 'Luí & Larissa Seattle Zouk Weekender offers 8 hours of instruction & two night socials.',
      start_date: new Date(2022, 1, 5),
      end_date: new Date(2022, 1, 6),
      image_url: 'https://dancenomad.s3.us-east-2.amazonaws.com/event_pics/3.jpg'
     },   {
      hostId: 4,
      venueId: 4,
      name: 'Aventura Dance Cruise',
      description: 'The 15th edition of Aventura Dance Cruise is a Latin dance cruise experience geared towards those who love Latin dance. It has hours of performances, social dancing, workshops, and parties.',
      start_date: new Date(2022, 1, 25),
      end_date: new Date(2022, 2, 1),
      image_url: 'https://dancenomad.s3.us-east-2.amazonaws.com/event_pics/4.jpg'
     },   {
      hostId: 5,
      venueId: 5,
      name: 'YoZouk New York Congress ',
      description: 'YoZouk New York Congress is offering workshops, shows ans socials with national and international instructors, performers and dj\'s.',
      start_date: new Date(2022, 3, 1),
      end_date: new Date(2022, 3, 4),
      image_url: 'https://dancenomad.s3.us-east-2.amazonaws.com/event_pics/5.jpg'
     },   {
      hostId: 6,
      venueId: 6,
      name: 'Zouk Heat B',
      description: 'Registration for the official Brazilian Zouk Dance Council (BZDC) Jack & Jill (J&J) Competition hosted at Zouk Heat 2022. This is ONLY for BZDC J&J registration! All participants must hold a Full Pass/Performer Pass to the festival. Festival passes are available on the Zouk Heat website: WWW.ZOUKHEAT.COM',
      start_date: new Date(2021, 3, 8),
      end_date: new Date(2021, 3, 10),
      image_url: 'https://dancenomad.s3.us-east-2.amazonaws.com/event_pics/6.jpg'
     },   {
      hostId: 7,
      venueId: 7,
      name: 'New York International Salsa Congress',
      description: 'The 20th edition of New York International Salsa Congress is featuring 4 days & 5 nights of live bands, concerts, performance showcases, instructional workshops, and non-stop social dancing',
      start_date: new Date(2022, 8, 1),
      end_date: new Date(2022, 8, 5),
      image_url: 'https://dancenomad.s3.us-east-2.amazonaws.com/event_pics/7.jpg'
     },
     {
      hostId: 8,
      venueId: 8,
      name: 'ZOUKMX FESTIVAL',
      description: 'Save the date.  Full festival moves to end of February in 2022.  It will be cold in USA, but nice and warm in Playa Del Carmen.',
      start_date: new Date(2022, 1, 22),
      end_date: new Date(2022, 1, 28),
      image_url: 'https://dancenomad.s3.us-east-2.amazonaws.com/event_pics/8.jpg'
     },
     {
      hostId: 9,
      venueId: 9,
      name: 'DCBX Ultimate Tropical New Year\'s Eve Festival ',
      description: 'The 9th edition of DCBX Ultimate Tropical New Year\'s Eve Festival offers workshops, shows, parties & socials with national & international instructors, performers & dj\'s.',
      start_date: new Date(2021, 11, 31),
      end_date: new Date(2022, 0, 3),
      image_url: 'https://dancenomad.s3.us-east-2.amazonaws.com/event_pics/9.png'
     },   {
      hostId: 10,
      venueId: 10,
      name: 'Baltimore Salsa Bachata Congress',
      description: 'The 10th edition of Baltimore Salsa Bachata Congress offers 4 days / 3 nights of over 40 dance workshops from beginners to advance levels with the world instructors on Salsa, Bachata, Kizomba, Cha Cha Cha and more.',
      start_date: new Date(2022, 3, 14),
      end_date: new Date(2022, 3, 18),
      image_url: 'https://dancenomad.s3.us-east-2.amazonaws.com/event_pics/10.jpg'
     },
    //  {
    //   hostId: 0,
    //   venueId: 0,
    //   name: '',
    //   description: '',
    //   start_date: new Date(),
    //   end_date: new Date(),
    //   image_url: ''
    //  },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Events', {}, {});
  }
};
