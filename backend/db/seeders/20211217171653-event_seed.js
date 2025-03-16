'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Events', [
    //  {
    //   hostId: 1,
    //   name: 'January Swouk DC Party ',
    //   description: 'Join us for a night of Brazilian zouk and West Coast Swing! We\'ll have beginner classes, a swouk workshop, and lots of dancing.',
    //   start_date: new Date(2023, 0, 8),
    //   end_date: new Date(2023, 0, 9),
    //   image_url: 'https://dancenomad.s3.us-east-2.amazonaws.com/event_pics/1.jpg'
    //  },
    //  {
    //   hostId: 2,
    //   name: 'Interfusion Festival ',
    //   description: 'Interfusion Festival: Ascension includes 4 days of transformative workshops, intensives & immersions, evening shows, performances with national and international instructors, performers and dj\'s.',
    //   start_date: new Date(2023, 0, 13),
    //   end_date: new Date(2023, 0, 17),
    //   image_url: 'https://dancenomad.s3.us-east-2.amazonaws.com/event_pics/2.jpg'
    //  },
    //  {
    //   hostId: 3,
    //   name: 'Lui & Larissa Seattle Zouk Weekender',
    //   description: 'Luí & Larissa Seattle Zouk Weekender offers 8 hours of instruction & two night socials.',
    //   start_date: new Date(2023, 1, 5),
    //   end_date: new Date(2023, 1, 6),
    //   image_url: 'https://dancenomad.s3.us-east-2.amazonaws.com/event_pics/3.jpg'
    //  },
    //  {
    //   hostId: 4,
    //   name: 'Aventura Dance Cruise',
    //   description: 'The 15th edition of Aventura Dance Cruise is a Latin dance cruise experience geared towards those who love Latin dance. It has hours of performances, social dancing, workshops, and parties.',
    //   start_date: new Date(2023, 1, 25),
    //   end_date: new Date(2023, 2, 1),
    //   image_url: 'https://dancenomad.s3.us-east-2.amazonaws.com/event_pics/4.jpg'
    //  },
    //  {
    //   hostId: 5,
    //   name: 'YoZouk New York Congress ',
    //   description: 'YoZouk New York Congress is offering workshops, shows ans socials with national and international instructors, performers and dj\'s.',
    //   start_date: new Date(2023, 3, 1),
    //   end_date: new Date(2023, 3, 4),
    //   image_url: 'https://dancenomad.s3.us-east-2.amazonaws.com/event_pics/5.jpg'
    //  },
    // {
    //   hostId: 6,
    //   name: 'Zouk Heat',
    //   description: 'Registration for the official Brazilian Zouk Dance Council (BZDC) Jack & Jill (J&J) Competition hosted at Zouk Heat 2023. This is ONLY for BZDC J&J registration! All participants must hold a Full Pass/Performer Pass to the festival. Festival passes are available on the Zouk Heat website: WWW.ZOUKHEAT.COM',
    //   start_date: new Date(2023, 3, 8),
    //   end_date: new Date(2023, 3, 10),
    //   image_url: 'https://dancenomad.s3.us-east-2.amazonaws.com/event_pics/6.jpg'
    //  },
    //  {
    //   hostId: 18,
    //   name: 'New York International Salsa Congress',
    //   description: 'The 20th edition of New York International Salsa Congress is featuring 4 days & 5 nights of live bands, concerts, performance showcases, instructional workshops, and non-stop social dancing',
    //   start_date: new Date(2023, 8, 1),
    //   end_date: new Date(2023, 8, 5),
    //   image_url: 'https://dancenomad.s3.us-east-2.amazonaws.com/event_pics/7.jpg'
    //  },
    //  {
    //   hostId: 8,
    //   name: 'ZOUKMX FESTIVAL',
    //   description: 'Save the date.  Full festival moves to end of February in 2024.  It will be cold in USA, but nice and warm in Playa Del Carmen.',
    //   start_date: new Date(2023, 1, 22),
    //   end_date: new Date(2023, 1, 28),
    //   image_url: 'https://dancenomad.s3.us-east-2.amazonaws.com/event_pics/8.jpg'
    //  },
    //  {
    //   hostId: 18,
    //   name: 'DCBX Ultimate Tropical New Year\'s Eve Festival ',
    //   description: 'The 9th edition of DCBX Ultimate Tropical New Year\'s Eve Festival offers workshops, shows, parties & socials with national & international instructors, performers & dj\'s.',
    //   start_date: new Date(2023, 11, 31),
    //   end_date: new Date(2023, 0, 3),
    //   image_url: 'https://dancenomad.s3.us-east-2.amazonaws.com/event_pics/9.png'
    //  },
    //  {
    //   hostId: 18,
    //   name: 'Baltimore Salsa Bachata Congress',
    //   description: 'The 10th edition of Baltimore Salsa Bachata Congress offers 4 days / 3 nights of over 40 dance workshops from beginners to advance levels with the world instructors on Salsa, Bachata, Kizomba, Cha Cha Cha and more.',
    //   start_date: new Date(2023, 3, 14),
    //   end_date: new Date(2023, 3, 18),
    //   image_url: 'https://dancenomad.s3.us-east-2.amazonaws.com/event_pics/10.jpg'
    //  },
    //  {
    //   hostId: 0,
    //   name: '',
    //   description: '',
    //   start_date: new Date(),
    //   end_date: new Date(),
    //   image_url: ''
    //  },
//     {
//       hostId: 1,
//       name: 'January Swouk DC Party ',
//       description: 'Join us for a night of Brazilian zouk and West Coast Swing! We\'ll have beginner classes, a swouk workshop, and lots of dancing.',
//       start_date: new Date(2024, 0, 8),
//       end_date: new Date(2024, 0, 9),
//       image_url: 'https://dancenomad.s3.us-east-2.amazonaws.com/event_pics/1.jpg'
//      },
//      {
//       hostId: 2,
//       name: 'Interfusion Festival ',
//       description: 'Interfusion Festival: Ascension includes 4 days of transformative workshops, intensives & immersions, evening shows, performances with national and international instructors, performers and dj\'s.',
//       start_date: new Date(2024, 0, 13),
//       end_date: new Date(2024, 0, 17),
//       image_url: 'https://dancenomad.s3.us-east-2.amazonaws.com/event_pics/2.jpg'
//      },
//      {
//       hostId: 3,
//       name: 'Lui & Larissa Seattle Zouk Weekender',
//       description: 'Luí & Larissa Seattle Zouk Weekender offers 8 hours of instruction & two night socials.',
//       start_date: new Date(2023, 1, 5),
//       end_date: new Date(2023, 1, 6),
//       image_url: 'https://dancenomad.s3.us-east-2.amazonaws.com/event_pics/3.jpg'
//      },
//      {
//       hostId: 4,
//       name: 'Aventura Dance Cruise',
//       description: 'The 15th edition of Aventura Dance Cruise is a Latin dance cruise experience geared towards those who love Latin dance. It has hours of performances, social dancing, workshops, and parties.',
//       start_date: new Date(2024, 1, 25),
//       end_date: new Date(2024, 2, 1),
//       image_url: 'https://dancenomad.s3.us-east-2.amazonaws.com/event_pics/4.jpg'
//      },
//      {
//       hostId: 5,
//       name: 'YoZouk New York Congress ',
//       description: 'YoZouk New York Congress is offering workshops, shows ans socials with national and international instructors, performers and dj\'s.',
//       start_date: new Date(2024, 3, 1),
//       end_date: new Date(2024, 3, 4),
//       image_url: 'https://dancenomad.s3.us-east-2.amazonaws.com/event_pics/5.jpg'
//      },
//     {
//       hostId: 6,
//       name: 'Zouk Heat B',
//       description: 'Registration for the official Brazilian Zouk Dance Council (BZDC) Jack & Jill (J&J) Competition hosted at Zouk Heat 2023. This is ONLY for BZDC J&J registration! All participants must hold a Full Pass/Performer Pass to the festival. Festival passes are available on the Zouk Heat website: WWW.ZOUKHEAT.COM',
//       start_date: new Date(2024, 3, 8),
//       end_date: new Date(2024, 3, 10),
//       image_url: 'https://dancenomad.s3.us-east-2.amazonaws.com/event_pics/6.jpg'
//      },
//      {
//       hostId: 18,
//       name: 'New York International Salsa Congress',
//       description: 'The 20th edition of New York International Salsa Congress is featuring 4 days & 5 nights of live bands, concerts, performance showcases, instructional workshops, and non-stop social dancing',
//       start_date: new Date(2023, 8, 1),
//       end_date: new Date(2023, 8, 5),
//       image_url: 'https://dancenomad.s3.us-east-2.amazonaws.com/event_pics/7.jpg'
//      },
//      {
//       hostId: 8,
//       name: 'ZOUKMX FESTIVAL',
//       description: 'Save the date.  Full festival moves to end of February in 2023.  It will be cold in USA, but nice and warm in Playa Del Carmen.',
//       start_date: new Date(2024, 1, 22),
//       end_date: new Date(2024, 1, 28),
//       image_url: 'https://dancenomad.s3.us-east-2.amazonaws.com/event_pics/8.jpg'
// },
//      {
//       hostId: 18,
//       name: 'DCBX Ultimate Tropical New Year\'s Eve Festival ',
//       description: 'The 9th edition of DCBX Ultimate Tropical New Year\'s Eve Festival offers workshops, shows, parties & socials with national & international instructors, performers & dj\'s.',
//       start_date: new Date(2023, 11, 31),
//       end_date: new Date(2023, 0, 3),
//       image_url: 'https://dancenomad.s3.us-east-2.amazonaws.com/event_pics/9.png'
//      },
//      {
//       hostId: 18,
//       name: 'Baltimore Salsa Bachata Congress',
//       description: 'The 10th edition of Baltimore Salsa Bachata Congress offers 4 days / 3 nights of over 40 dance workshops from beginners to advance levels with the world instructors on Salsa, Bachata, Kizomba, Cha Cha Cha and more.',
//       start_date: new Date(2024, 3, 14),
//       end_date: new Date(2024, 3, 18),
//       image_url: 'https://dancenomad.s3.us-east-2.amazonaws.com/event_pics/10.jpg'
//      },

  {
      "hostId": 108,
      "name": "The Edge Dance Event 2025",
      "description": "The Edge Dance Event: An Innovative Approach to Line and Partner Dancing Year SIX of our dance event where each hour you can choose from a variety of line dance genres/levels as well as partner dance lessons options to get you confidently dancing on ANY dance floor! The Edge 2025 will be a 3 day event!We've got Award Winning line dance choreographers/instructors from all over Southern California to teach a variety of new and those dance hall staples. There will be something to gain for all line dance levels!You'll also get partner dance instruction from very knowledgeable dancers that are sure to help you step up your game! From Two Step, to Country Swing, to Zouk, to West Coast Swing, you are sure to find something to improve your move library and skill base! No need to have a partner, we'll pair you up and not require you to change partners (unless you want to).We are happy to continue the tradition with LIVE MUSIC  to celebrate the various artists who contribute to our dance community! We are excited to continue line dance competitions as well as a Country Swing and other competitions to showcase your skills! Social Dancing will be off the charts at The Edge with multiple opportunities to dance throughout the day AND 2-3 social floors in the evening! Instructors will be roaming around answering questions and helping out (and dancing of course!) while everyone is enjoying food, drinks, and an awesome night of dancing!Dance/Spectator Pass Available if you want to join in the fun but want to skip on all the awesome lessons! You will get to enjoy the live music, competitions, showcases, and open dancing!",
      "start_date": "2025-04-04",
      "end_date": "2025-04-06",
      "image_url": "https://www.danceplace.com/index/image/The+Edge+Dance+Event-Temecula_+CA-United+States/14209.jpg"
  },
  {
      "hostId": 108,
      "name": "New York SBKZ Congress 2025",
      "description": "New York SBKZ Congress offers a full weekend of daily workshops, marathon style nonstop social dancing, afternoon socials, nightly performances and social dancing until 6 AM with internationally renowned dancers, instructors & DJs!",
      "start_date": "2025-02-07",
      "end_date": "2025-02-10",
      "image_url": "https://www.danceplace.com/index/image/New+York+SBKZ+Congress-New+York_+NY-United+States/13070.png"
  },
//   {
//       "hostId": 108,
//       "name": "Brazilian Zouk Bootcamps Jan 2025",
//       "description": "Join us in January for Saturday afternoon bootcamps for a crash course in Brazilian zouk. On January 4, Elena Rovito and Sarah Epling will be teaching an accelerated bootcamp for experienced dancers from other styles - if you're a west coast swing, salsa, bachata or tango dancer and have been curious about zouk, this is for you! Then on January 25, Sarah Epling and Jamiel Roberson will be teaching a bootcamp for any dancers new to zouk or those who want to work on their basics. This is the perfect way to get ready for upcoming festivals or classes so you can gain confidence on the dance floor.",
//       "start_date": "2025-01-04",
//       "end_date": "2025-01-25",
//       "image_url": "https://www.danceplace.com/index/image/Brazilian+Zouk+Bootcamps-Washington_+DC-United+States/14522.png"
//   },
  {
      "hostId": 108,
      "name": "Elevation Zouk Festival - Denver 2025",
      "description": "The 5th edition of Elevation Zouk Festival in Denver offers workshops, social dancing (including a 12hr Marathon) with national and international instructors, performers and dj's.",
      "start_date": "2025-12-05",
      "end_date": "2025-12-07",
      "image_url": "https://www.danceplace.com/index/image/Elevation+Zouk+Festival+_+Denver-Denver_+CO-United+States/14359.png"
  },
//   {
//       "hostId": 108,
//       "name": "San Francisco Salsa Festival 2025",
//       "description": "Celebrating our 15th year! A weekend of world-class performances, dancing, competition, and workshops with top salsa instructors from around the world.",
//       "start_date": "2025-03-28",
//       "end_date": "2025-03-29",
//       "image_url": "https://www.danceplace.com/index/image/San+Francisco+Salsa+Festival-Burlingame_+CA-United+States/13373.png"
//   },
  {
      "hostId": 108,
      "name": "Brazilian Zouk World Championships 2025",
      "description": "The Brazilian Zouk World Championships is where dancers get together to learn at workshops with national and international teachers, dance at 4 nights of parties, and compete or watch our J&J, Strictly Zouk and Choreography Competitions. The event consists in more than 40 hours of workshops with international and national dance teachers, 4 nights of parties with an incredible DJ\u2019s line up, at the incredible The Scott Resort & Spa!",
      "start_date": "2025-08-14",
      "end_date": "2025-08-17",
      "image_url": "https://www.danceplace.com/index/image/Brazilian+Zouk+World+Championships-Scottsdale_+AZ-United+States/10962.png"
  },
//   {
//       "hostId": 108,
//       "name": "Mock Dance Competition 2025",
//       "description": "Mock dance competition",
//       "start_date": "2025-12-29",
//       "end_date": "2025-12-31",
//       "image_url": "https://www.danceplace.com/index/image/Mock+Dance+Competition-Oakland_+CA-United+States/12313.png"
//   },
  {
      "hostId": 108,
      "name": "JACK N JILL CHAMPIONS TRAINING ED.4 ARISE",
      "description": "8H WORKSHOP",
      "start_date": "2025-02-28",
      "end_date": "2025-03-02",
      "image_url": "https://www.danceplace.com/index/image/JACK+N+JILL+CHAMPIONS+TRAINING-Paris-France/14392.png"
  },
  {
      "hostId": 108,
      "name": "Taiwan Zouk Festival 2025",
      "description": "Thursday Feb 20 \u2013 Preparty at Flow TaipeiFriday \u2013 Sunday Feb 21-23 main event with:~20+ hours of workshop with Open Level and Int/Adv tracks  in 2 rooms~18 hours of partiesBZDC Jack & Jill competitionVenueTaiwan Zouk Festival will be held at Syntrend 12F ShowThis is a 793 sq meter exhibition/performance space in the center of Taipei with 4M high ceilings, professional lighting and sound system and beautiful daytime natural light. The space is divided will be divided into two rooms for workshops.",
      "start_date": "2025-02-21",
      "end_date": "2025-02-23",
      "image_url": "https://www.danceplace.com/index/image/Taiwan+Zouk+Festival-Taipei-Taiwan/13944.png"
  },
  {
      "hostId": 108,
      "name": "Eclipse Zouk Marathon 2025",
      "description": "Danceplace | The third Annual Edition of the Eclipse Zouk Marathon offers 100% PURE social dancing, 45+ hours of dancing with music from the Zouk Dj\u2019s, Balanced of leaders and followers, No workshops, No shows, No contests. ",
      "start_date": "2025-03-07",
      "end_date": "2025-03-10",
      "image_url": "https://www.danceplace.com/index/image/Eclipse+Zouk+Marathon-Portland_+OR-United+States/14486.jpg"
  },
  {
      "hostId": 108,
      "name": "Hawaii Connection Camp with Zouk Atoms 2025",
      "description": "Train with Zouk Atoms in Hawaii!Geek out on the complete periodic table of zouk moves!  Learn the science behind making dance chemistry!  First time in the USA!What\u2019s included?3-4 hours daily training mon- friYoga & fitness classesArt journalngBreakfast & lunch on train days Sauna & cold plungeWaterfall hot tub lagoon & fire pitHikes & excursionsHawaiian cultural activitiesLodging includedPick up & drop off to airportUnscheduled weekends to island hop or relax",
      "start_date": "2025-11-01",
      "end_date": "2025-11-30",
      "image_url": "https://www.danceplace.com/index/image/Hawaii+Connection+Camp+with+Zouk+Atoms-Holualoa_+HI-United+States/14639.png"
  },
  {
      "hostId": 108,
      "name": "Divergence Zouk Festival 2025",
      "description": "Divergence Zouk Festival is the first ever Zouk festival in Austin, TX! We aim to be different in the best of ways, and to lead with our values of safety, technique, and health!",
      "start_date": "2025-09-26",
      "end_date": "2025-09-28",
      "image_url": "https://www.danceplace.com/index/image/Divergence+Zouk+Festival-Austin_+TX-United+States/12683.png"
  },
  {
      "hostId": 108,
      "name": "CALDAC Colorado Afro-Latin Dance & Arts Collective 2024",
      "description": "Danceplace | The Denver Salsa Bachata Zouk/Kizomba Dance Congress is named ",
      "start_date": "2025-10-09",
      "end_date": "2025-10-13",
      "image_url": "https://www.danceplace.com/index/image/CALDAC+Colorado+Afro_Latin+Dance+_+Arts+Collective-Aurora_+CO-United+States/14651.jpg"
  },
  {
      "hostId": 108,
      "name": "Level Up with Walter & Larissa 2025",
      "description": "Join us on January 25-26 for an immersive Zouk weekend with the incredible Walter and Larissa!",
      "start_date": "2025-01-25",
      "end_date": "2025-01-26",
      "image_url": "https://www.danceplace.com/index/image/Level+Up+with+Walter+_+Larissa-Oakland_+CA-United+States/14539.jpg"
  },
  {
      "hostId": 108,
      "name": "KiZouK Night 2025",
      "description": "KiZouK  where KiZomba & Brazilian Zouk meet ?  Let's Be  KiZouKAble and join  forces to  Co - Create movements through Connection with this beautiful Dance Styles.\u25a0\u25a0 Class Intro? KiZ         7:30pm? ZouK     8:00pm? KiZouK  SoCiAl Dancing  8:30 - 11pm\u2664 A KiZouK Affair \u2664\u2714\ufe0f KiZouKAble Moves \u2714\ufe0f KiZouKAble Music \u2714\ufe0f KiZouKAble Smoothness ? Class & Social \u2664    $10$15 Bring  a friend$8 Enrolled weekly classes students",
      "start_date": "2025-02-01",
      "end_date": "2025-02-01",
      "image_url": "https://www.danceplace.com/index/image/KiZouK+Night-Salt+Lake+City_+UT-United+States/14733.png"
  },
  {
      "hostId": 108,
      "name": "EverZouk Summer Festival 2025",
      "description": "The next edition of Seattle's annual Zouk festival.- 24 hours of classes, split in 2 programs of 12 hours, with 2 hours per class- Lambada Track- Balance of Leaders and Followers- Level Control for Challenge Program- Specialty Masterclasses- BZDC Zouk and Lambada Jack & JillsWe are Everzouk.",
      "start_date": "2025-06-27",
      "end_date": "2025-06-29",
      "image_url": "https://www.danceplace.com/index/image/EverZouk+Summer+Festival-Seattle_+WA-United+States/12445.jpg"
  },
  {
      "hostId": 108,
      "name": "Lancaster Salsa Bachata Fest 2025",
      "description": "The Lancaster Salsa Bachata Fest aims to showcase the beauty of Latin dance with top-notch instruction from talented local artists. Attendees will have the chance to enhance their skills through engaging mini workshops and then practice them on the social dancefloor after! With its vibrant atmosphere and inclusive spirit, this festival will be a wonderful celebration of salsa and bachata dance for dancers of all levels.",
      "start_date": "2025-06-06",
      "end_date": "2025-06-08",
      "image_url": "https://www.danceplace.com/index/image/Lancaster+Salsa+Bachata+Fest-Lancaster_+PA-United+States/14551.png"
  },
  {
      "hostId": 108,
      "name": "Hawaii Connection Camp with Cedric & Romane 2025",
      "description": "Come live & train in Hawaii with Cedric & Romane - the masters of FLOW! What\u2019s included?Lodging3-4 hours zouk training monday-friday2 week or 1 month optionsYoga & fitness classes Sauna & cold plungeWaterfall hot tub lagoon & fire pit Breakfast & Lunch & some dinnersSocials & partiesHikes & excursions around the islandUnscheduled weekends to rest or island hop",
      "start_date": "2025-06-30",
      "end_date": "2025-07-26",
      "image_url": "https://www.danceplace.com/index/image/Hawaii+Connection+Camp+with+Cedric+_+Romane-Holualoa_+HI-United+States/14638.png"
  },
  {
      "hostId": 108,
      "name": "SAWA SAWA Kizomba Festival  2025",
      "description": "Danceplace | Featuring 3 days of workshops, 4 nights of parties with national and international performers, instructors and djs.",
      "start_date": "2025-07-03",
      "end_date": "2025-07-06",
      "image_url": "https://www.danceplace.com/index/image/SAWA+SAWA+Kizomba+Festival+-Bethesda_+MD-United+States/14262.jpg"
  },
  {
      "hostId": 108,
      "name": "Dunedin Zouk Intensive 2025",
      "description": "The Organizers decided not to have Kizomba at this event anymore due to the cost of International Kizomba artists and the number of current Kizomba dancers attending events in New Zealand.Dunedin Zouk Intensive offers 18 hours of workshops to choose from!\u2022 3 themed parties and 3 after-parties!\u2022 Zouk Jack and Jill with Novice and Intermediate categories!\u2022 Monday Masterclasses* and Survivors party.",
      "start_date": "2025-02-28",
      "end_date": "2025-03-03",
      "image_url": "https://www.danceplace.com/index/image/Dunedin+Zouk+Intensive-Dunedin-New+Zealand/14548.png"
  },
  {
      "hostId": 108,
      "name": "Zouk & Lambada with Ale and Victoria in Atlanta 2025",
      "description": "Zouk Conex\u00e3o is honored to welcome Ale and Victoria to Atlanta! We will be offering a 3 types of classes: Lambada, Progressive and Open level! Full schedule and details here: https://bit.ly/alevictoria",
      "start_date": "2025-02-17",
      "end_date": "2025-04-03",
      "image_url": "https://www.danceplace.com/index/image/Zouk+_+Lambada+with+Ale+and+Victoria+in+Atlanta-Atlanta_+GA-United+States/14599.png"
  },
  {
      "hostId": 108,
      "name": "Iago + Vanessa Boston ZOTD Weekender 2025",
      "description": "Jos\u00e9 Cuadra and Boston Zouk on the Docks bring you Iago+Vanessa ZOTD Weekender - July 24-29, 2025We love having this amazing lambada couple keep teaching Boston. We will be having lambada workshops and outdoor events during the weekender.Let's welcome them back with some chicotes.Details and info will be posted closer to the event.",
      "start_date": "2025-07-24",
      "end_date": "2025-07-28",
      "image_url": "https://www.danceplace.com/index/image/Iago+_+Vanessa+Boston+ZOTD+Weekender-Boston_+MA-United+States/14629.png"
  },
  {
      "hostId": 108,
      "name": "Zouk Conex\u00e3o Weekender with Kuna & Tori 2025",
      "description": "We are excited to welcome Kuna and Tori to Atlanta for an exciting weekender!!!",
      "start_date": "2025-01-17",
      "end_date": "2025-01-19",
      "image_url": "https://www.danceplace.com/index/image/Zouk+Conex__o+Weekender+with+Kuna+_+Tori-Atlanta_+GA-United+States/14057.png"
  },
  {
      "hostId": 108,
      "name": "KiZouk & Bachata 2025",
      "description": "Global SettingsWelcome to KiZouk & Bachata 2024.Where the very essence of dance comes to live. With much emphasis on the tree of dance life. \u2022\tMusicality \u2022\tVersatility\u2022\tAccuracy\u2022\tCreativity\u2022\tPrecision\u2022\t& Personality Plan ahead for this extravaganza event live in the Motherland of Cleveland.The event Tickets for the year 2025 can be obtain via danceplace (NO REFUNDS - ALL SALES ARE FINAL):TICKET Link to be updated here very soon.Lodging:No hotel is allocated for this event due to high cost.Agenda:\uf0d8\tKizomba/Urban Kiz Fusion\uf0d8\tBrazilian Zouk Fusion\uf0d8\tBachata Sensual Fusion\uf0d8\tAfro Beatz Fusion\uf0d8\tBody Isolation Fusion\uf0d8\tTBD\u2026WHAT TO EXPECT FOR 2025 KiZouk & Bachata: \tOne Family, One Dance, One Love, so Bring Your Own Shamelessness (BYOS) \tInternational Artists \tWorld\u2019s Brand KiZouk & Bachata DJs \tNon-Stop Learning, Dancing, & Networking \tHouse Parties \tOne Room, many dance styles.The very first of its kind live here in the Midwest. Come learn from the creators themselves along with improving your already favorite dance styles in Brazilian Zouk, Kizomba/Urban Kiz, Kompa, Bachata, Lambada with extra sauce in Afro Beats & Hip Hop. You own what you pay for, come SHOW OFF YOUR STYLE with your own creative dance. Come learn about Dance Safety and increase your awareness of creepy dance moves to avoid.\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c6\u22c63 Days \u25ab\ufe0f 2 Nights, One Room, variety sauces.FEATURING ARTIST:Jules Bertrand (Instructor/DJ)  Canada/Cameroon, https://www.facebook.com/Jules.Afro.Kizouk.DatlifeSoraya Dance ArtFactory (Instructor) Morocco/Canada, https://www.facebook.com/sara.soraya.artfactoryAleja Smyle (Instructor)  Mexico City/Africa ?, https://www.facebook.com/aleja.o.arParker Amsel (Instructor/DJ) Cleveland, https://www.facebook.com/parker.amselUnknown Wahala (GHOST) - No Intro Needed------------------------------------------------------------------Can't wait to see you on the dance floor!  #DanceIsTherapy#WeAllWeGot",
      "start_date": "2025-02-28",
      "end_date": "2025-03-02",
      "image_url": "https://www.danceplace.com/index/image/KiZouk+_+Bachata-Cleveland_+OH-United+States/13586.png"
  },

  {
      "hostId": 108,
      "name": "Team Auditions Jan 2025",
      "description": "Come audition for one of three training teams!Training Team with Kuna & ToriPartner Choreo Team with Elena & BrendaFollower's Team with Elena",
      "start_date": "2025-02-03",
      "end_date": "2025-03-27",
      "image_url": "https://www.danceplace.com/index/image/Team+Auditions-Washington_+DC-United+States/14609.png"
  },
  {
      "hostId": 108,
      "name": "3rd edition - Zouk Lab - intensive training by Lucas and Thayn\u00e1 2025",
      "description": "Zouk Lab is an intensive training of 10 hours of training with Thayn\u00e1 and Lucas with assisted practice combined with feedbacks to keep the growth of your dance in all the process.",
      "start_date": "2025-02-22",
      "end_date": "2025-02-23",
      "image_url": "https://www.danceplace.com/index/image/3rd+edition+_+Zouk+Lab+_+intensive+training+by+Lucas+and+Thayn__-Lisbon+-Portugal/13211.png"
  },
//   {
//       "hostId": 108,
//       "name": "Miami Beach Zouk Festival 2025",
//       "description": "",
//       "start_date": "2025-04-24",
//       "end_date": "2025-04-28",
//       "image_url": "https://www.danceplace.com/index/image/Miami+Beach+Zouk+Festival-Miami_+FL-United+States/13544.png"
//   },
  {
      "hostId": 108,
      "name": "Franco Galiano Boston ZOTD  Weekender 2025",
      "description": "Jos\u00e9 Cuadra and Boston Zouk on the Docks bring you Franco Galiano Boston ZOTD  Weekender - Sept 4-8, 2025We have a new visiting switch artist trained in lambada and zouk from Argentina. Let's give him a warm welcome and show him how welcoming  and open we are with other lgbtq+ dancers. The weekender will consist of zouk, lambada workshops and socials.Details will be posted closer to the date of the event.",
      "start_date": "2025-09-04",
      "end_date": "2025-09-08",
      "image_url": "https://www.danceplace.com/index/image/Franco+Galiano+Boston+ZOTD++Weekender-Boston_+MA-United+States/14633.png"
  },

  {
      "hostId": 108,
      "name": "Zoukville Winter Weekender 2025",
      "description": "Winter has come and with it, our need to bring the Brazilian zouk heat to warm our hearts during these cold times. For the second time together in Nashville, we\u2019ll have Bruno & Fae teaching alongside Gustavo & Ayane. Are you guys ready for this experience? Limited tickets available! Join us in Nashville for our Zoukville Winter Weekender. 6h of workshops + social + practica!Social will be on Friday night.  Nashville Zouk is holding a SBK social on Saturday and in support of the community, we will not hold an social on Saturday.  You can attend the Nashville Zouk social on Saturday (not included in pass).See y\u2019all there! Zouk hugs!",
      "start_date": "2025-01-24",
      "end_date": "2025-01-26",
      "image_url": "https://www.danceplace.com/index/image/Zoukville+Winter+Weekender-Nashville_+TN-United+States/14615.png"
  },
  {
      "hostId": 108,
      "name": "Olympia Zouk Diversion 2025",
      "description": "DJ Kakah returns with N.E.D to power the second edition of the Olympia Zouk Diversion! Enjoy 20+ hours of social dancing, dance AND music workshops, top-notch lights and sound, and the magic of OlyDance! This is a dance weekend you\u2019ll want to be part of\u2014don\u2019t miss out! Go to olydance.com/olympia-zouk-diversion for Early bird tickets!",
      "start_date": "2025-06-13",
      "end_date": "2025-06-15",
      "image_url": "https://www.danceplace.com/index/image/Olympia+Zouk+Diversion-Olympia_+WA-United+States/14378.jpg"
  },
  {
      "hostId": 108,
      "name": "Zoukville Mini Festival  2025",
      "description": "After the success of our first edition. Zoukville Mini Festival will be back in 2025. Get your passes before price goes up! Very Limited spots. Amazing instructors. Official BZDC Jack&Jill.  World Class DJs, warm community, with bonding expereiences, in a pocket version. If you love the line up of a congress, but prefer the warm vibe of a weekender, this is the perfect mix. Join us for Zoukville Mini Festival 2025.  On top of that if purchased in advance, flights and accommodations are pretty cheap in Nashville. See y'all here. November 14-16th of 2025",
      "start_date": "2025-11-14",
      "end_date": "2025-11-16",
      "image_url": "https://www.danceplace.com/index/image/Zoukville+Mini+Festival+-Nashville_+TN-United+States/14393.png"
  },
  {
      "hostId": 108,
      "name": "Marck & Melyssa Brazilian Zouk Weekender in Boston 2025",
      "description": "Join us for a weekender of Brazilian Zouk in Boston with Marck & Melyssa Brazilian Zouk Training with Marck & Melyssa!Live World Class BZouk DJsPracticas & Social Dancing",
      "start_date": "2025-05-30",
      "end_date": "2025-06-01",
      "image_url": "https://www.danceplace.com/index/image/Marck+_+Melyssa+Brazilian+Zouk+Weekender+in+Boston-Boston_+MA-United+States/14523.jpg"
  },
  {
      "hostId": 108,
      "name": "New York International Salsa Congress 2025",
      "description": "Danceplace | The 23th edition of New York International Salsa Congress is featuring 4 days & 5 nights of live bands, concerts, performance showcases, instructional workshops, and non-stop social dancing.",
      "start_date": "2025-08-28",
      "end_date": "2025-09-01",
      "image_url": "https://www.danceplace.com/index/image/New+York+International+Salsa+Congress-New+York_+NY-United+States/14628.jpg"
  },
  {
      "hostId": 108,
      "name": "Hawaii Connection Camp Iago & Ninna 2025",
      "description": "Live & Train with Iago & Ninna in beautiful Hawaii! What\u2019s included:3-4 hours dance training dailyBreakfast & lunchYoga & fitness classesSauna & cold plungeArt journalingWaterfall hot tub Hikes & excursions all over the island Unscheduled weekends so you can rest, island hop or explore on your own Shared lodgingAirport pick up & drop off Hawaiian cultural activities to learn native customs like lomilomi massage & lei makingIt\u2019s going to be an amazing adventure & we hope you\u2019ll join us!",
      "start_date": "2025-03-24",
      "end_date": "2025-04-11",
      "image_url": "https://www.danceplace.com/index/image/Hawaii+Connection+Camp+Iago+_+Ninna-Holualoa_+HI-United+States/14635.png"
  },
  {
      "hostId": 108,
      "name": "Las Vegas Salsa Bachata Super Congress 2025",
      "description": "Danceplace | The 23nd edition of Las Vegas Salsa Bachata Super Congress offers 50 workshops, 4 parties with more than 30 international artists and performers.",
      "start_date": "2025-07-02",
      "end_date": "2025-07-07",
      "image_url": "https://www.danceplace.com/index/image/Las+Vegas+Salsa+Bachata+Super+Congress-Los+Angeles_+CA-United+States/13954.jpg"
  },
  {
      "hostId": 108,
      "name": "March Workshops & Social March 2025",
      "description": "Join us on March 8th for workshops and our monthly social at Glen Echo. We have a variety of classes you can choose from, including a bootcamp for those new to Brazilian zouk, workshops for those with more experience, and an open level class before the social. Come explore, learn and dance with us.",
      "start_date": "2025-03-08",
      "end_date": "2025-03-09",
      "image_url": "https://www.danceplace.com/index/image/March+Workshops+_+Social-Washington_+DC-United+States/14865.png"
  },
  {
      "hostId": 108,
      "name": "Zouk Heat 2025",
      "description": "IT'S LIT! Register for our official BZDC J&J here on Danceplace! Looking for other tickets & event info? Checkout our website at: WWW.ZOUKHEAT.COM.",
      "start_date": "2025-04-03",
      "end_date": "2025-04-07",
      "image_url": "https://www.danceplace.com/index/image/Zouk+Heat-Herndon_+VA-United+States/13385.png"
  },
  {
      "hostId": 108,
      "name": "Leandro and Nayara Weekender in Charlotte 2025",
      "description": "Brazilian Zouk Weekender in Charlotte, NC with Leandro and Nayara.",
      "start_date": "2025-05-30",
      "end_date": "2025-06-01",
      "image_url": "https://www.danceplace.com/index/image/Leandro+and+Nayara+Weekender+in+Charlotte-Charlotte_+NC-United+States/14849.jpg"
  },
  {
      "hostId": 108,
      "name": "Zouk Hour The Congress 2025",
      "description": "Zouk Congress on Magic IslandFlorianopolis/SC - Brazil - 27/28/29/30 March 2025",
      "start_date": "2025-03-27",
      "end_date": "2025-03-30",
      "image_url": "https://www.danceplace.com/index/image/Zouk+Hour+The+Congress-Florianopolis-Brazil/13570.jpg"
  },
  {
      "hostId": 108,
      "name": "ForbidDance Fest 2025",
      "description": "Both Zouk & Lambada workshops, Jack & Jill\u2019s & parties!",
      "start_date": "2025-08-01",
      "end_date": "2025-08-03",
      "image_url": "https://www.danceplace.com/index/image/ForbidDance+Fest-Austin_+TX-United+States/14699.png"
  },
  {
      "hostId": 108,
      "name": "Denver Zouk Marathon 2025",
      "description": "The Denver Zouk Marathon is for people who love to SOCIAL DANCE, CONNECT and CREATE.",
      "start_date": "2025-04-19",
      "end_date": "2025-04-20",
      "image_url": "https://www.danceplace.com/index/image/Denver+Zouk+Marathon-Denver_+CO-United+States/14422.png"
  },
  {
      "hostId": 108,
      "name": "Nina+Matheus Boston ZOTD Weekender 2025",
      "description": "Jos\u00e9 Cuadra and Boston Zouk on the Docks bring you Nina+Matheus Boston ZOTD Weekender - April 17-21, 2025The rainbow power house duo will be returning back to Boston. I asked  to book them right away during our last event. Let's welcome them back! The weekender will consist of Brazilian Zouk workshops and socials. We will have our usual line up of ZOTD classes, events and socials. Stay tuned for more details.",
      "start_date": "2025-04-17",
      "end_date": "2025-04-21",
      "image_url": "https://www.danceplace.com/index/image/Nina_Matheus+Boston+ZOTD+Weekender-Boston_+MA-United+States/14631.jpg"
  },
  {
      "hostId": 108,
      "name": "Practicas + Assessments Jan 2025",
      "description": "Join us for a practica to practice what you've learned. Get assessed by our instructors for feedback on what to work on and which class(es) you can take.",
      "start_date": "2025-01-09",
      "end_date": "2025-01-31",
      "image_url": "https://www.danceplace.com/index/image/Practicas+_+Assessments-Washington_+DC-United+States/9993.jpg"
  },
  {
      "hostId": 108,
      "name": "Iago + Ninna with Rachel+Laura Boston ZOTD Weekender 2025",
      "description": "Jos\u00e9 Cuadra and Boston Zouk on the Docks bring you Iago + Ninna Boston ZOTD Weekender - June 19-23, 2025This will be their 3rd time coming to Boston. If you haven't met this amazing couple then now is your chance.  We will be having a special SONIDOS concert with zoukers that are musicians perform during the weekender.We will have our usual line up of ZOTD classes, events and socials. Stay tuned for more details.",
      "start_date": "2025-06-19",
      "end_date": "2025-06-23",
      "image_url": "https://www.danceplace.com/index/image/Iago+_+Ninna+with+Rachel_Laura+Boston+ZOTD+Weekender-Boston_+MA-United+States/14632.jpg"
  },
  {
      "hostId": 108,
      "name": "Year of the Snake Party 2025",
      "description": "2025 is the Year of the Snake! Lets celebrate with costumes, dancing & sushi!",
      "start_date": "2025-01-27",
      "end_date": "2025-01-27",
      "image_url": "https://www.danceplace.com/index/image/Year+of+the+Snake+Party-Holualoa_+HI-United+States/14626.png"
  },
  {
      "hostId": 108,
      "name": "Epicenter Zouk Marathon  2025",
      "description": "Marathon-style social dancing, where participants enjoy extended hours of music, connection, and creativity plus we\u2019ll have a Jack and Jill Competition to bring an extra excitement and entertainment for dancers.",
      "start_date": "2025-06-06",
      "end_date": "2025-06-09",
      "image_url": "https://www.danceplace.com/index/image/Epicenter+Zouk+Marathon+-Kansas+City_+MO-United+States/14467.png"
  },
  {
      "hostId": 108,
      "name": "Los Angeles Bachata Festival 2025",
      "description": "Danceplace | The 16th edition of  Los Angeles Bachata Festival offers 3 days & 4 nights of social dancing, more than 80 workshops and dance shows with line-up performers and instructors. ",
      "start_date": "2025-02-13",
      "end_date": "2025-02-17",
      "image_url": "https://www.danceplace.com/index/image/Los+Angeles+Bachata+Festival-Universal+City_+CA-United+States/14396.jpg"
  },
  {
      "hostId": 108,
      "name": "Zouk Conexao Festival Atlanta  2025",
      "description": "Zouk Conexao Festival offers workshops, socials, parties with national & international instructors, performers & DJ's.",
      "start_date": "2025-10-23",
      "end_date": "2025-10-27",
      "image_url": "https://www.danceplace.com/index/image/Zouk+Conexao+Festival+Atlanta+-Atlanta_+GA-United+States/14110.jpg"
  },
  {
      "hostId": 108,
      "name": "ATX KiZouk Boat Party 2025",
      "description": "Austin's Hottest Boat Party for Kizomba and Brazilian Zouk, Celebrating Texas Summers and Birthdays.Eat, Drink, Dance and have fun on the water.",
      "start_date": "2025-07-05",
      "end_date": "2025-07-06",
      "image_url": "https://www.danceplace.com/index/image/ATX+KiZouk+Boat+Party-Austin_+TX-United+States/14495.jpg"
  },
  {
      "hostId": 108,
      "name": "Salsa In Hawaii Salsa & Bachata Congress 2025",
      "description": "Danceplace | The 9th edition of Salsa In Hawaii will include 3 days of workshops, 5 nights of social dancing, specialty boot camps, theme parties & beach party.",
      "start_date": "2025-02-19",
      "end_date": "2025-02-23",
      "image_url": "https://www.danceplace.com/index/image/Salsa+In+Hawaii+Salsa+_+Bachata+Congress-Honolulu_+HI-United+States/14401.jpg"
  },
  {
      "hostId": 108,
      "name": "San Francisco SBK Congress 2025",
      "description": "The 7th edition of San Francisco SBK Congress offers a weekend dance event with 3 days of workshops, 3 nights of social dancing to the tunes of some of the best Salsa, Bachata, Kizomba and Zouk, 3 evenings of dance showcases with national and international performers and instructors.",
      "start_date": "2025-11-21",
      "end_date": "2025-11-23",
      "image_url": "https://www.danceplace.com/index/image/San+Francisco+SBK+Congress-Burlingame_+CA-United+States/13678.jpg"
  },
  {
      "hostId": 108,
      "name": "DCBX|17 2025",
      "description": "The 16 edition of DCBX offers 100 workshops, 200 shows and parties with national and international instructors, performers and dj's.",
      "start_date": "2025-08-20",
      "end_date": "2025-08-25",
      "image_url": "https://www.danceplace.com/index/image/DCBX_17-Washington_+DC-United+States/12435.png"
  },
  {
      "hostId": 108,
      "name": "Hawaii Connection Camp 2025",
      "description": "Dancing Adventures in HawaiiWhat\u2019s included?Airport pick up & drop off Monday - Friday 4 hours daily dance training with Jules + SorayaMorning yoga & art journaling 2 meals dailyShared room, bathroom & kitchenette Access to hot tub, sauna, cold plunge, forest fitness trail, & fire pit Island adventures hiking to waterfalls & beaches 5 night Option $1250 USDChoose Week 1 Jan 27 - 31Week 2 Feb 3-7Week 3 Feb 10-14Full Experience Option $2500 USD Stay from Jan 27 - Feb 19Get $150 off each when you sign up with a partner ($2350ea) Full Schedule Jan 27 Year of Snake Welcome Dance PartyJan 28-31 1st training weekFeb 1-2 free time or check out Volcano Feb 3-7 2nd training weekFeb 8-9 free time to explore or see Kauai*Feb 10-14 3rd training weekFeb 15-16 free time to explore or see Maui*Feb 17-18 Kona & Hilo classesFeb 19-23 Oahu Dance Congress option*Want to see the volcano that just began erupting again or the snow on Mauna Kea? \u2026the Green sand beach at South Point?  \u2026the hot springs in Kalapana? \u2026want to tour multiple islands with Jules & Soraya? *island hopping has additional fees not included (airfare/accommodations/etc)To register or ask questions : Contact Star Bolton at +1-808-854-1270Aloha@orchidislemanor.comInsta :@dancehi_hawaii",
      "start_date": "2025-01-27",
      "end_date": "2025-02-22",
      "image_url": "https://www.danceplace.com/index/image/Hawaii+Connection+Camp-Holualoa_+HI-United+States/14634.jpg"
  },
  {
      "hostId": 108,
      "name": "Atlanta Salsa Bachata Festival 2025",
      "description": "Danceplace | The 7th edition of Atlanta Salsa Bachata Festival offers 3 days of workshops, shows, pre-party, socials with national & international instructors, performers & dj's.",
      "start_date": "2025-03-07",
      "end_date": "2025-03-10",
      "image_url": "https://www.danceplace.com/index/image/Atlanta+Salsa+Bachata+Festival-Atlanta_+GA-United+States/13990.jpg"
  },
  {
      "hostId": 108,
      "name": "Al\u00ea + Victoria Boston ZOTD Weekender 2025",
      "description": "Jos\u00e9 Cuadra and Boston Zouk on the Docks bring you Al\u00ea + Victoria Boston ZOTD Weekender- March 13-17, 2025Victoria will be returning back to Boston with her partner from Brazil, Al\u00ea! Let's welcome them back with hugs and dances. The weekender will consist of Brazilian Zouk and Lambada workshops and socials. We will have our usual line up of ZOTD classes, events and socials. Stay tuned for more details.",
      "start_date": "2025-03-13",
      "end_date": "2025-03-17",
      "image_url": "https://www.danceplace.com/index/image/Al__+_+Victoria+Boston+ZOTD+Weekender-Boston_+MA-United+States/14630.jpg"
  },
  {
      "hostId": 108,
      "name": "Rio Is Here Dance Festival  2025",
      "description": "",
      "start_date": "2025-03-07",
      "end_date": "2025-03-10",
      "image_url": "https://www.danceplace.com/index/image/Rio+Is+Here+Dance+Festival+-Santa+Ana_+CA-United+States/13240.jpg"
  },
  {
      "hostId": 108,
      "name": "Evelyn & Derrick Intensive 2025",
      "description": "NeoZouk & Follows Intensive",
      "start_date": "2025-05-09",
      "end_date": "2025-05-11",
      "image_url": "https://www.danceplace.com/index/image/Evelyn+_+Derrick+Intensive-San+Jose_+CA-United+States/14870.jpg"
  },
  {
      "hostId": 108,
      "name": "Brazilian Dance Festival Holland 2025",
      "description": "The 8th edition of Brazilian Dance Festival offers 4 nights of parties and 3 days of workshops with more than 50 confirmed international world class instructors and DJ's.",
      "start_date": "2025-03-06",
      "end_date": "2025-03-10",
      "image_url": "https://www.danceplace.com/index/image/Brazilian+Dance+Festival+Holland-Isolatorweg+28_+1014+AS+Amsterdam-Netherlands/14514.jpg"
  },
  {
      "hostId": 108,
      "name": "Interfusion Festival  2025",
      "description": "Danceplace | Interfusion Festival: Ascension includes 4 days of transformative workshops, intensives & immersions, evening shows, performances with national and international instructors, performers and dj's.",
      "start_date": "2025-01-16",
      "end_date": "2025-01-20",
      "image_url": "https://www.danceplace.com/index/image/Interfusion+Festival+-Arlington_+VA-United+States/13166.jpg"
  },
  {
      "hostId": 108,
      "name": "Learn to Zouk- 2nd Fridays 2025",
      "description": "Bachata",
      "start_date": "2025-01-10",
      "end_date": "2025-01-10",
      "image_url": "https://www.danceplace.com/index/image/Learn+to+Zouk_+2nd+Fridays-Knoxville_+TN-United+States/14595.jpg"
  },
  {
      "hostId": 108,
      "name": "Dallas Zouk & Lambada Festival 2025",
      "description": "Dallas Zouk & Lambada Festival offers workshops,Pool Party, 4 parties with international instructors.",
      "start_date": "2025-07-03",
      "end_date": "2025-07-06",
      "image_url": "https://www.danceplace.com/index/image/Dallas+Zouk+_+Lambada+Festival+2025-Dallas_+TX-United+States/13686.jpg"
  },
  {
      "hostId": 108,
      "name": "The Zouk Lounge - London Edition 2025",
      "description": "Once upon a time\u2026 in a cute Zouk community in a place called London Town lived a little boy called Ricky\u2026 and a much bigger boy called Pedrinho. Together fate brought them together through the love and appreciation of life, dance and doing silly things.In a Zouk world saturated with festivals and classes, they wanted to share their ideas to explore something different, something unique and something wild.They decided it was time to move direction and launch The Zouk Lounge.",
      "start_date": "2025-04-11",
      "end_date": "2025-04-14",
      "image_url": "https://www.danceplace.com/index/image/The+Zouk+Lounge+_+London+Edition-London-United+Kingdom/14249.png"
  },
  {
      "hostId": 108,
      "name": "ZOUKMX 2025",
      "description": "It's our 10th year in Mexico! ZoukMX is now a month long zouk summer of training, excursions and more culminating into a magical festival! <br><br>We've dubbed this edition the Secret Cento & Beach Jungle edition! We are planning a special Cenote Party and will keep making our Jungle Party even better! <br><br>\u2584\u2584\u2584 FEATURES \u2584\u2584\u2584<br>\u2605 ZoukMX 100 - 100 hour training program (over 4 tracks!)<br>\u2605 Secret Cenote Party planned!<br>\u2605 4 Day Pre-festival Intensives<br>\u2605 New first time artists to North America!Playa Del Carmen is home to our beach vacation dance experience. Playa is an incredible place like no other in the world. Join us and some of the best dj's and artists in the world for an incredible winter escape of training and epic parties in the sun! See you in Playa!<br><br>\u2584\u2584\u2584 SCHEDULE \u2584\u2584\u2584\u2584\u2584<br>\u2605 100 Hour Training Program - Jan 26- Feb 20, 2025<br>\u2605 Pre-Festival Intensives - Feb 17-20, 2025<br>\u2605 Festival - Feb 21-24, 2025<br>\u2605 Excursion: Lagoon Party - Feb 24 2025<br>\u2584\u2584\u2584 2025 FEATURES \u2584\u2584\u2584<br>\u2605 Only 100 Hour intensive training in North America (Int'l Brazilian Training Team),<br>\u2605 Cenote Parties!<br>\u2605 Underground Cave Party!<br>\u2605 Beach Front Venue Parties<br>\u2605 Rooftop Parties<br>\u2605 After Sunrise Parties<br>\u2605 Training @ top venues<br>\u2605 Pre-Festival Intensives<br>\u2605 1 month, over 100 hours of workshop classes!<br>\u2605 Leveled workshops (audition process)<br>\u2605 Top International DJ's<br>\u2605 Official Brazilian Zouk Dance Council Jack and Jill Competition<br><br>\u2584\u2584\u2584\u2584\u2584\u2584 LOGISTICS \u2584\u2584\u2584\u2584\u2584<br>Fly into Cancun International, take the ADO premier shuttle service that runs every 30 minutes to Playa Del Carmen for $12 one way.<br>Event Organizer: Joe Sandoval<br>Send questions to email zoukmx@zouk.usOfficial website with additional schedule information:<br>http://zouk.mx",
      "start_date": "2025-02-21",
      "end_date": "2025-02-24",
      "image_url": "https://www.danceplace.com/index/image/ZOUKMX-Playa+Del+Carmen-Mexico/14423.jpg"
  },
  {
      "hostId": 108,
      "name": "Paulo & Luiza Zouk Weekender\u25c7 2025",
      "description": "Date  \u25c7 Update March 14th & 15th \u26062 different Locations -March 14th Dance Junction Cottonwood Heights -March 15th Re Studio/En ConTacTo Salt Lake City? Excited to announce ? Paulo & Luiza Brazilian Zouk Weekender ?\u27289X Brazilian Zouk Champions\u27282X Word Champions-ZOUK TEAMS\u2728First Brazilian Zouk Couple to conquer the 2 place in the most important swing event,   \u2667The Open Swing Championships in the category \u201cCabaret\u201d.\u26062 Brazilian Zouk International Champions\u26062 days of Workshops\u26062 night Socials \u2606 1 Incredible Weekend of Dancing\u300a2025 Event Schedule:\u300b\u2728\u2022 March 14th \u2b50\ufe0f Workshop  7PM - 9PM\u2b50\ufe0f SOCIAL  9PM - 11pm!\u2728\u2022 March 15th\u2b50\ufe0f Workshop  7PM - 9PM\u2b50\ufe0fSOCIAL  9PM - Until you Drop!\u25c7Ticket information\u25c7Full Weekender Pass $140Full Weekender for 2 $240Weekender 1 Day $80Early Registration $120 ends Feb 28th, or Until Last. Limited Passes Available!Danceplace.com Questions \u2753please PM Zouk  UtahPut on your dancing shoes and Let\u2019s Zouk !",
      "start_date": "2025-03-14",
      "end_date": "2025-03-15",
      "image_url": "https://www.danceplace.com/index/image/Paulo+_+Luiza+Zouk+Weekender___-Salt+Lake+City_+UT-United+States/14783.png"
  }

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Events', {}, {});
  }
};
