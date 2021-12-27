import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams, useHistory } from "react-router-dom";
import { editEvent, getEvent } from '../../store/events'
import Select from 'react-select'
import styles from './EditEvent.module.css'

function EditEventForm ({ event }) {
  const id  = useParams().id;
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session?.user);
  const hostId = sessionUser?.id


  // const event = useSelector(state => Object.values(state?.events))[0];

  useEffect(() => {
    dispatch(getEvent(id));
      // setName();
      // setDescription();
      // setStart_date();
      // setEnd_date();
      // setVenue();
      // // setVenue_types();
      // setCity();
      // setState()
      // setCountry();
      // setLat();
      // setLng();
      // setGenres();
      // setTypes();
      // setImage();
      // setVideo();
  }, [dispatch]);

  const e_genres = [event?.event_genre?.map(g => g.genre)]
  const e_types = [event?.event_type?.map(t => t.type)]

  console.log("EVENT:", event?.name)

  const [name, setName] = useState(event?.name);
  const [description, setDescription] = useState(event?.description);
  const [start_date, setStart_date] = useState(event?.start_date);
  const [end_date, setEnd_date] = useState(event?.end_date);
  const [venue, setVenue] = useState(event?.Venue?.name);
  // const [venue_types, setVenue_types] = useState([])
  const [address, setAddress] = useState(event?.Venue?.address);
  const [city, setCity] = useState(event?.Venue?.city);
  const [state, setState] = useState(event?.Venue?.state);
  const [zip, setZip] = useState(event?.Venue?.zip);
  const [country, setCountry] = useState(event?.Venue?.country);
  const [lat, setLat] = useState(event?.Venue?.lat);
  const [lng, setLng] = useState(event?.Venue?.lng);
  const [image, setImage] = useState(event?.image_url);
  const [video, setVideo] = useState(event?.video_url);
  const [genres, setGenres] = useState(event?.event_genre);
  const [types, setTypes] = useState(event?.event_type);
  const [errors, setErrors] = useState([]);


  const updateName = (e) => setName(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);
  const updateStart_date = (e) => setStart_date(e.target.value);
  const updateEnd_date = (e) => setEnd_date(e.target.value);
  const updateVenue = (e) => setVenue(e.target.value);
  // const updateVenue_types = (e) => setVenue_types(e.target.value);
  const updateAddress = (e) => setAddress(e.target.value);
  const updateCity = (e) => setCity(e.target.value);
  const updateState = (e) => setState(e.target.value);
  const updateZip = (e) => setZip(e.target.value);
  const updateCountry = (e) => setCountry(e.target.value);
  const updateLat = (e) => setLat(e.target.value);
  const updateLng = (e) => setLng(e.target.value);
  const updateImage = (e) => setImage(e.target.value);
  const updateVideo= (e) => setVideo(e.target.value);
  const updateGenres = (e) => setGenres(e.target.value);
  const updateTypes = (e) => setTypes(e.target.value);


  const handleSubmit = async (e) => {
    console.log("HANDLE SUBMIT")
    e.preventDefault();
    let newErrors = [];
    const new_event = await dispatch(editEvent({
      hostId,
      name,
      description,
      start_date,
      end_date,
      venue,
      // venue_types,
      address,
      city,
      state: state.value,
      zip,
      country: country.value,
      lat,
      lng,
      genres,
      types,
      image,
      video,
    }))
    // .then(() => {
    //   setName("");
    //   setDescription("");
    //   setStart_date(null);
    //   setEnd_date(null);
    //   setVenue("");
    //   // setVenue_types(null);
    //   setCity("");
    //   setState("")
    //   setCountry("");
    //   setLat(null);
    //   setLng(null);
    //   setGenres(null);
    //   setTypes(null);
    //   setImage(null);
    //   setVideo(null);
    // })
    .catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) {
        newErrors = data.errors;
        setErrors(newErrors);
      }
      });
      if(new_event) history.push(`/events/${new_event.id}`)
    }

    const updateImageFile = (e) => {
      const file = e.target.files[0]
      if (file) setImage(file);
    };

    const updateVideoFile = (e) => {
      const file = e.target.files[0];
      if (file) setVideo(file);
    };

    const genre_options = [
      { value: "1", label: 'Acro' },
      { value: "2", label: 'Afro Cuban' },
      { value: "3", label: 'Bachata' },
      { value: "4", label: 'Ballroom' },
      { value: "5", label: 'Blues' },
      { value: "6", label: 'Brazilian Zouk' },
      { value: "7", label: 'Breakdance' },
      { value: "8", label: 'Casino Rueda' },
      { value: "9", label: 'Cha Cha' },
      { value: "10", label: 'East Coast Swing' },
      { value: "11", label: 'Funkstyles / Popping' },
      { value: "12", label: 'Hip Hop' },
      { value: "13", label: 'House' },
      { value: "14", label: 'Kizomba' },
      { value: "15", label: 'Lambada' },
      { value: "16", label: 'Locking' },
      { value: "17", label: 'Salsa' },
      { value: "18", label: 'Semba' },
      { value: "19", label: 'Swing' },
      { value: "20", label: 'Tango' },
      { value: "21", label: 'Tarraxinha' },
      { value: "22", label: 'West Coast Swing' }
    ]

    const type_options = [
      { value: "1", label: 'Class' },
      { value: "2", label: 'Competition' },
      { value: "3", label: 'Congress' },
      { value: "4", label: 'Dance Cruise' },
      { value: "5", label: 'Flash Mob' },
      { value: "6", label: 'Marathon' },
      { value: "7", label: 'Nightclub Event' },
      { value: "8", label: 'Retreat' },
      { value: "9", label: 'Social' },
      { value: "10", label: 'Weekender' }
    ]

    const venue_type_options = [
      { value: "1", label: 'Ballroom' },
      { value: "2", label: 'Conference Center' },
      { value: "3", label: 'Cruise Ship' },
      { value: "4", label: 'Dance Studio' },
      { value: "5", label: 'Hotel' },
      { value: "6", label: 'Night Club' },
      { value: "7", label: 'Park / Beach / Public' },
      { value: "8", label: 'Private Residence' },
      { value: "9", label: 'Resort' },
      { value: "10", label: 'Other' }
    ]

    const state_options = [
    { value: "AL", label: 'Alabama' },
    { value: "AK", label: 'Alaska' },
    { value: "AZ", label: 'Arizona' },
    { value: "AR", label: 'Arkansas' },
    { value: "CA", label: 'California' },
    { value: "CO", label: 'Colorado' },
    { value: "CT", label: 'Connecticut' },
    { value: "DE", label: 'Delaware' },
    { value: "DC", label: 'District Of Columbia' },
    { value: "FL", label: 'Florida' },
    { value: "GA", label: 'Georgia' },
    { value: "HI", label: 'Hawaii' },
    { value: "ID", label: 'Idaho' },
    { value: "IL", label: 'Illinois' },
    { value: "IN", label: 'Indiana' },
    { value: "IA", label: 'Iowa' },
    { value: "KS", label: 'Kansas' },
    { value: "KY", label: 'Kentucky' },
    { value: "LA", label: 'Louisiana' },
    { value: "ME", label: 'Maine' },
    { value: "MD", label: 'Maryland' },
    { value: "MA", label: 'Massachusetts' },
    { value: "MI", label: 'Michigan' },
    { value: "MN", label: 'Minnesota' },
    { value: "MS", label: 'Mississippi' },
    { value: "MO", label: 'Missouri' },
    { value: "MT", label: 'Montana' },
    { value: "NE", label: 'Nebraska' },
    { value: "NV", label: 'Nevada' },
    { value: "NH", label: 'New Hampshire' },
    { value: "NJ", label: 'New Jersey' },
    { value: "NM", label: 'New Mexico' },
    { value: "NY", label: 'New York' },
    { value: "NC", label: 'North Carolina' },
    { value: "ND", label: 'North Dakota' },
    { value: "OH", label: 'Ohio' },
    { value: "OK", label: 'Oklahoma' },
    { value: "OR", label: 'Oregon' },
    { value: "PA", label: 'Pennsylvania' },
    { value: "PR", label: 'Puerto Rico' },
    { value: "RI", label: 'Rhode Island' },
    { value: "SC", label: 'South Carolina' },
    { value: "SD", label: 'South Dakota' },
    { value: "TN", label: 'Tennessee' },
    { value: "TX", label: 'Texas' },
    { value: "UT", label: 'Utah' },
    { value: "VT", label: 'Vermont' },
    { value: "VA", label: 'Virginia' },
    { value: "WA", label: 'Washington' },
    { value: "WV", label: 'West Virginia' },
    { value: "WI", label: 'Wisconsin' },
    { value: "WY", label: 'Wyoming' }
    ]

    const country_options = [
      { value: "Afganistan", label: 'Afghanistan' },
      { value: "Albania", label: 'Albania' },
      { value: "Algeria", label: 'Algeria' },
      { value: "American Samoa", label: 'American Samoa' },
      { value: "Andorra", label: 'Andorra' },
      { value: "Angola", label: 'Angola' },
      { value: "Anguilla", label: 'Anguilla' },
      { value: "Antigua & Barbuda", label: 'Antigua & Barbuda' },
      { value: "Argentina", label: 'Argentina' },
      { value: "Armenia", label: 'Armenia' },
      { value: "Aruba", label: 'Aruba' },
      { value: "Australia", label: 'Australia' },
      { value: "Austria", label: 'Austria' },
      { value: "Azerbaijan", label: 'Azerbaijan' },
      { value: "Bahamas", label: 'Bahamas' },
      { value: "Bahrain", label: 'Bahrain' },
      { value: "Bangladesh", label: 'Bangladesh' },
      { value: "Barbados", label: 'Barbados' },
      { value: "Belarus", label: 'Belarus' },
      { value: "Belgium", label: 'Belgium' },
      { value: "Belize", label: 'Belize' },
      { value: "Benin", label: 'Benin' },
      { value: "Bermuda", label: 'Bermuda' },
      { value: "Bhutan", label: 'Bhutan' },
      { value: "Bolivia", label: 'Bolivia' },
      { value: "Bonaire", label: 'Bonaire' },
      { value: "Bosnia & Herzegovina", label: 'Bosnia & Herzegovina' },
      { value: "Botswana", label: 'Botswana' },
      { value: "Brazil", label: 'Brazil' },
      { value: "British Indian Ocean Ter", label: 'British Indian Ocean Ter' },
      { value: "Brunei", label: 'Brunei' },
      { value: "Bulgaria", label: 'Bulgaria' },
      { value: "Burkina Faso", label: 'Burkina Faso' },
      { value: "Burundi", label: 'Burundi' },
      { value: "Cambodia", label: 'Cambodia' },
      { value: "Cameroon", label: 'Cameroon' },
      { value: "Canada", label: 'Canada' },
      { value: "Canary Islands", label: 'Canary Islands' },
      { value: "Cape Verde", label: 'Cape Verde' },
      { value: "Cayman Islands", label: 'Cayman Islands' },
      { value: "Central African Republic", label: 'Central African Republic' },
      { value: "Chad", label: 'Chad' },
      { value: "Channel Islands", label: 'Channel Islands' },
      { value: "Chile", label: 'Chile' },
      { value: "China", label: 'China' },
      { value: "Christmas Island", label: 'Christmas Island' },
      { value: "Cocos Island", label: 'Cocos Island' },
      { value: "Colombia", label: 'Colombia' },
      { value: "Comoros", label: 'Comoros' },
      { value: "Congo", label: 'Congo' },
      { value: "Cook Islands", label: 'Cook Islands' },
      { value: "Costa Rica", label: 'Costa Rica' },
      { value: "Cote DIvoire", label: 'Cote DIvoire' },
      { value: "Croatia", label: 'Croatia' },
      { value: "Cuba", label: 'Cuba' },
      { value: "Curaco", label: 'Curacao' },
      { value: "Cyprus", label: 'Cyprus' },
      { value: "Czech Republic", label: 'Czech Republic' },
      { value: "Denmark", label: 'Denmark' },
      { value: "Djibouti", label: 'Djibouti' },
      { value: "Dominica", label: 'Dominica' },
      { value: "Dominican Republic", label: 'Dominican Republic' },
      { value: "East Timor", label: 'East Timor' },
      { value: "Ecuador", label: 'Ecuador' },
      { value: "Egypt", label: 'Egypt' },
      { value: "El Salvador", label: 'El Salvador' },
      { value: "Equatorial Guinea", label: 'Equatorial Guinea' },
      { value: "Eritrea", label: 'Eritrea' },
      { value: "Estonia", label: 'Estonia' },
      { value: "Ethiopia", label: 'Ethiopia' },
      { value: "Falkland Islands", label: 'Falkland Islands' },
      { value: "Faroe Islands", label: 'Faroe Islands' },
      { value: "Fiji", label: 'Fiji' },
      { value: "Finland", label: 'Finland' },
      { value: "France", label: 'France' },
      { value: "French Guiana", label: 'French Guiana' },
      { value: "French Polynesia", label: 'French Polynesia' },
      { value: "French Southern Ter", label: 'French Southern Ter' },
      { value: "Gabon", label: 'Gabon' },
      { value: "Gambia", label: 'Gambia' },
      { value: "Georgia", label: 'Georgia' },
      { value: "Germany", label: 'Germany' },
      { value: "Ghana", label: 'Ghana' },
      { value: "Gibraltar", label: 'Gibraltar' },
      { value: "Great Britain", label: 'Great Britain' },
      { value: "Greece", label: 'Greece' },
      { value: "Greenland", label: 'Greenland' },
      { value: "Grenada", label: 'Grenada' },
      { value: "Guadeloupe", label: 'Guadeloupe' },
      { value: "Guam", label: 'Guam' },
      { value: "Guatemala", label: 'Guatemala' },
      { value: "Guinea", label: 'Guinea' },
      { value: "Guyana", label: 'Guyana' },
      { value: "Haiti", label: 'Haiti' },
      { value: "Hawaii", label: 'Hawaii' },
      { value: "Honduras", label: 'Honduras' },
      { value: "Hong Kong", label: 'Hong Kong' },
      { value: "Hungary", label: 'Hungary' },
      { value: "Iceland", label: 'Iceland' },
      { value: "Indonesia", label: 'Indonesia' },
      { value: "India", label: 'India' },
      { value: "Iran", label: 'Iran' },
      { value: "Iraq", label: 'Iraq' },
      { value: "Ireland", label: 'Ireland' },
      { value: "Isle of Man", label: 'Isle of Man' },
      { value: "Israel", label: 'Israel' },
      { value: "Italy", label: 'Italy' },
      { value: "Jamaica", label: 'Jamaica' },
      { value: "Japan", label: 'Japan' },
      { value: "Jordan", label: 'Jordan' },
      { value: "Kazakhstan", label: 'Kazakhstan' },
      { value: "Kenya", label: 'Kenya' },
      { value: "Kiribati", label: 'Kiribati' },
      { value: "Korea North", label: 'Korea North' },
      { value: "Korea Sout", label: 'Korea South' },
      { value: "Kuwait", label: 'Kuwait' },
      { value: "Kyrgyzstan", label: 'Kyrgyzstan' },
      { value: "Laos", label: 'Laos' },
      { value: "Latvia", label: 'Latvia' },
      { value: "Lebanon", label: 'Lebanon' },
      { value: "Lesotho", label: 'Lesotho' },
      { value: "Liberia", label: 'Liberia' },
      { value: "Libya", label: 'Libya' },
      { value: "Liechtenstein", label: 'Liechtenstein' },
      { value: "Lithuania", label: 'Lithuania' },
      { value: "Luxembourg", label: 'Luxembourg' },
      { value: "Macau", label: 'Macau' },
      { value: "Macedonia", label: 'Macedonia' },
      { value: "Madagascar", label: 'Madagascar' },
      { value: "Malaysia", label: 'Malaysia' },
      { value: "Malawi", label: 'Malawi' },
      { value: "Maldives", label: 'Maldives' },
      { value: "Mali", label: 'Mali' },
      { value: "Malta", label: 'Malta' },
      { value: "Marshall Islands", label: 'Marshall Islands' },
      { value: "Martinique", label: 'Martinique' },
      { value: "Mauritania", label: 'Mauritania' },
      { value: "Mauritius", label: 'Mauritius' },
      { value: "Mayotte", label: 'Mayotte' },
      { value: "Mexico", label: 'Mexico' },
      { value: "Midway Islands", label: 'Midway Islands' },
      { value: "Moldova", label: 'Moldova' },
      { value: "Monaco", label: 'Monaco' },
      { value: "Mongolia", label: 'Mongolia' },
      { value: "Montserrat", label: 'Montserrat' },
      { value: "Morocco", label: 'Morocco' },
      { value: "Mozambique", label: 'Mozambique' },
      { value: "Myanmar", label: 'Myanmar' },
      { value: "Nambia", label: 'Nambia' },
      { value: "Nauru", label: 'Nauru' },
      { value: "Nepal", label: 'Nepal' },
      { value: "Netherland Antilles", label: 'Netherland Antilles' },
      { value: "Netherlands", label: 'Netherlands (Holland, Europe)' },
      { value: "Nevis", label: 'Nevis' },
      { value: "New Caledonia", label: 'New Caledonia' },
      { value: "New Zealand", label: 'New Zealand' },
      { value: "Nicaragua", label: 'Nicaragua' },
      { value: "Niger", label: 'Niger' },
      { value: "Nigeria", label: 'Nigeria' },
      { value: "Niue", label: 'Niue' },
      { value: "Norfolk Island", label: 'Norfolk Island' },
      { value: "Norway", label: 'Norway' },
      { value: "Oman", label: 'Oman' },
      { value: "Pakistan", label: 'Pakistan' },
      { value: "Palau Island", label: 'Palau Island' },
      { value: "Palestine", label: 'Palestine' },
      { value: "Panama", label: 'Panama' },
      { value: "Papua New Guinea", label: 'Papua New Guinea' },
      { value: "Paraguay", label: 'Paraguay' },
      { value: "Peru", label: 'Peru' },
      { value: "Phillipines", label: 'Philippines' },
      { value: "Pitcairn Island", label: 'Pitcairn Island' },
      { value: "Poland", label: 'Poland' },
      { value: "Portugal", label: 'Portugal' },
      { value: "Puerto Rico", label: 'Puerto Rico' },
      { value: "Qatar", label: 'Qatar' },
      { value: "Republic of Montenegro", label: 'Republic of Montenegro' },
      { value: "Republic of Serbia", label: 'Republic of Serbia' },
      { value: "Reunion", label: 'Reunion' },
      { value: "Romania", label: 'Romania' },
      { value: "Russia", label: 'Russia' },
      { value: "Rwanda", label: 'Rwanda' },
      { value: "St Barthelemy", label: 'St Barthelemy' },
      { value: "St Eustatius", label: 'St Eustatius' },
      { value: "St Helena", label: 'St Helena' },
      { value: "St Kitts-Nevis", label: 'St Kitts-Nevis' },
      { value: "St Lucia", label: 'St Lucia' },
      { value: "St Maarten", label: 'St Maarten' },
      { value: "St Pierre & Miquelon", label: 'St Pierre & Miquelon' },
      { value: "St Vincent & Grenadines", label: 'St Vincent & Grenadines' },
      { value: "Saipan", label: 'Saipan' },
      { value: "Samoa", label: 'Samoa' },
      { value: "Samoa American", label: 'Samoa American' },
      { value: "San Marino", label: 'San Marino' },
      { value: "Sao Tome & Principe", label: 'Sao Tome & Principe' },
      { value: "Saudi Arabia", label: 'Saudi Arabia' },
      { value: "Senegal", label: 'Senegal' },
      { value: "Seychelles", label: 'Seychelles' },
      { value: "Sierra Leone", label: 'Sierra Leone' },
      { value: "Singapore", label: 'Singapore' },
      { value: "Slovakia", label: 'Slovakia' },
      { value: "Slovenia", label: 'Slovenia' },
      { value: "Solomon Islands", label: 'Solomon Islands' },
      { value: "Somalia", label: 'Somalia' },
      { value: "South Africa", label: 'South Africa' },
      { value: "Spain", label: 'Spain' },
      { value: "Sri Lanka", label: 'Sri Lanka' },
      { value: "Sudan", label: 'Sudan' },
      { value: "Suriname", label: 'Suriname' },
      { value: "Swaziland", label: 'Swaziland' },
      { value: "Sweden", label: 'Sweden' },
      { value: "Switzerland", label: 'Switzerland' },
      { value: "Syria", label: 'Syria' },
      { value: "Tahiti", label: 'Tahiti' },
      { value: "Taiwan", label: 'Taiwan' },
      { value: "Tajikistan", label: 'Tajikistan' },
      { value: "Tanzania", label: 'Tanzania' },
      { value: "Thailand", label: 'Thailand' },
      { value: "Togo", label: 'Togo' },
      { value: "Tokelau", label: 'Tokelau' },
      { value: "Tonga", label: 'Tonga' },
      { value: "Trinidad & Tobago", label: 'Trinidad & Tobago' },
      { value: "Tunisia", label: 'Tunisia' },
      { value: "Turkey", label: 'Turkey' },
      { value: "Turkmenistan", label: 'Turkmenistan' },
      { value: "Turks & Caicos Is", label: 'Turks & Caicos Is' },
      { value: "Tuvalu", label: 'Tuvalu' },
      { value: "Uganda", label: 'Uganda' },
      { value: "United Kingdom", label: 'United Kingdom' },
      { value: "Ukraine", label: 'Ukraine' },
      { value: "United Arab Erimates", label: 'United Arab Emirates' },
      { value: "United States of America", label: 'United States of America' },
      { value: "Uraguay", label: 'Uruguay' },
      { value: "Uzbekistan", label: 'Uzbekistan' },
      { value: "Vanuatu", label: 'Vanuatu' },
      { value: "Vatican City State", label: 'Vatican City State' },
      { value: "Venezuela", label: 'Venezuela' },
      { value: "Vietnam", label: 'Vietnam' },
      { value: "Virgin Islands (Brit)", label: 'Virgin Islands (Brit)' },
      { value: "Virgin Islands (USA)", label: 'Virgin Islands (USA)' },
      { value: "Wake Island", label: 'Wake Island' },
      { value: "Wallis & Futana Is", label: 'Wallis & Futana Is' },
      { value: "Yemen", label: 'Yemen' },
      { value: "Zaire", label: 'Zaire' },
      { value: "Zambia", label: 'Zambia' },
      { value: "Zimbabwe", label: 'Zimbabwe' }
    ]


  return (
    <div className={styles.form_container}>
      <h1>Edit your event</h1>
      <form
      onSubmit={handleSubmit}
      className={styles.form}>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <input
          type="text"
          className="field"
          placeholder="Event Name"
          autocomplete="new-password"
          defaultValue={name}
          onChange={updateName}
        />
        <textarea
          className="field"
          placeholder="Description"
          autocomplete="new-password"
          value={description}
          onChange={updateDescription}
        />
        <input
          type="date"
          className="field"
          placeholder="Start Date"
          autocomplete="new-password"
          value={start_date}
          onChange={updateStart_date}
        />
        <input
          type="date"
          className="field"
          placeholder="End Date"
          autocomplete="new-password"
          value={end_date}
          onChange={updateEnd_date}
        />
        <input
          type="text"
          className="field"
          placeholder="Venue Name"
          autocomplete="new-password"
          value={venue}
          onChange={updateVenue}
        />
       {/* <Select
          isMulti
          defaultValue={venue_types}
          onChange={updateVenue_types}
          options={venue_type_options}
          placeholder="Venue type (Selcect all that apply)"
        /> */}
        <input
          type="text"
          className="field"
          placeholder="Address"
          autocomplete="new-password"
          value={address}
          onChange={updateAddress}
        />
        <input
          type="text"
          className="field"
          placeholder="City"
          autocomplete="new-password"
          value={city}
          onChange={updateCity}
        />
         <Select
          defaultValue={state}
          onChange={updateState}
          options={state_options}
          placeholder="State (US Only)"
        />
        <input
          type="text"
          className="field"
          placeholder="Zip Code"
          autocomplete="new-password"
          value={zip}
          onChange={updateZip}
        />
        <Select
          defaultValue={country}
          onChange={updateCountry}
          options={country_options}
          placeholder="Select Country"
        />
        <input
          type="number"
          className="field"
          placeholder="Lattitude"
          autocomplete="new-password"
          value={lat}
          onChange={updateLat}
        />
        <input
          type="number"
          className="field"
          placeholder="Longitude"
          autocomplete="new-password"
          value={lng}
          onChange={updateLng}
        />
        <Select
          isMulti
          defaultValue={genres}
          onChange={updateGenres}
          options={genre_options}
          placeholder="Genres (Selcect all that apply)"
        />
        <Select
         isMulti
         defaultValue={types}
         onChange={updateTypes}
         options={type_options}
         placeholder="Event Type (Selcect all that apply)"
         />
        <div className={styles.buttons_container}>

          <label className="uploadLabel">
          Image Upload
          <input
          type="file"
          onChange={updateImageFile} />
          </label>

          <label className="uploadLabel">
          Video Upload
          <input
          type="file"
          onChange={updateVideoFile} />
          </label>

          <button type="submit" id="submitButton"
          className="spotSubmitButton"
          >Submit</button>
        </div>
      </form>
    </div>
  )
}

export default EditEventForm
