# dancenomad

https://dancenomad.herokuapp.com/

<img src='https://i.imgur.com/lzzmLuI.png'>

Dance Nomad is an site for event organizers to post adnd promote social dance events and for dancers to browse and sign up for events.  It is inspired by Eventbrite. 

# Project Installation

1. Clone the project repository from https://github.com/yosefalan/dancenomad

2. Install dependencies on both fronted and backend directories

      ```npm install ```
     

3. Create **.env** file based on the example with proper settings for your
   development environment
   
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. To run locally start npm on fronted and backend 

   ```npm start```

# Overview

>You can log in as a demo user with the `Demo Login` button on the login fand signup pages.

>Alternatively you can create a user account on the signup page.  

>You can upload a profile photo upon signup. 

<img src='https://i.imgur.com/uDGGOwq.png'>

>You can browse events in the event feed and navigate to an event page for more details on each event.

>On the event pages you can register for an event.

>You can see all of you registrations by clicking on 'Registrations.' 


<img src='https://i.imgur.com/8Jn2gLY.png'>


>Only an event creator can edit or delete registrations once they are made.


>You can create an event by clicking the 'Create Event' link on the navigation bar.  The form has clear instructions and error handling to guide you through the process of entering event details and uploading an event photo.  
<img src='https://i.imgur.com/m82Eu6P.png'>

>Event creators can edit their events from the `Manage Events` page.

>You can also delete your events and edit or delete the registrations.
<img src='https://i.imgur.com/HlTenee.png'>

Dance Nomad is a work in progress.  Features to be added include:
>Event Genres and Event Types to allow dancers to search and browse according to their preferences.  
>
>Google Maps API integration.
>
>More advanced ticketing and registration to allow event passes to be bought and sold.  
