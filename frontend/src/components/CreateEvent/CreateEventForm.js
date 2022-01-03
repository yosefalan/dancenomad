import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { newEvent } from '../../store/events'
import Select from 'react-select'
import { useDropzone } from 'react-dropzone'
import moment from 'moment'
import styles from './CreateEvent.module.css'



export default function CreateEvent({ hideForm }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session?.user);
  const hostId = sessionUser?.id
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [start_date, setStart_date] = useState(null);
  const [end_date, setEnd_date] = useState(null);
  const [venue, setVenue] = useState("");
  const [venue_types, setVenue_types] = useState([]);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  // const [lat, setLat] = useState(null);
  // const [lng, setLng] = useState(null);
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState([]);
  const [genres, setGenres] = useState([]);
  const [types, setTypes] = useState([]);
  const [page, setPage] = useState(1);
  const [errors, setErrors] = useState([]);


    const {
      acceptedFiles,
      fileRejections,
      getRootProps,
      getInputProps
    } = useDropzone({
      accept: 'image/jpg, image/jpeg, image/png',
      maxFiles: 1,
      maxSize: 10000000,
      onDrop: acceptedFiles => {
        setImage(acceptedFiles.map(file => Object.assign(file, {
          preview: URL.createObjectURL(file)
        })))
      }
    });

    const acceptedFileItems = acceptedFiles.map(file => (
      <li key={file.path}>
        {file.path} - {(file.size / 1024 / 1024).toFixed(2)} MB
      </li>
    ));

    const fileRejectionItems = fileRejections.map(({ file, errors }) => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
        <ul>
          {errors.map(e => (
            <li key={e.code}>{e.message}</li>
          ))}
        </ul>
      </li>
    ));

    const thumb = image?.map(file => (
          <img src={file.preview}
          className={styles.thumb}
          />
    ));

  function nextPage() {
     const errors = [];
    // if (page === 1){
    //   let today = new Date()
    //   if (!name.length) errors.push("Event name is required")
    //   if (name.length < 6) errors.push("Event name must be at least 6 characters")
    //   if (name.length > 255) errors.push("Event name must be 255 characters or less")
    //   if (!description.length) errors.push("Event description is required")
    //   if (description.length < 6) errors.push("Event description must be at least 6 characters")
    //   if (description > 2200) errors.push("Event name must be at least 6 characters")
    //   if (!genres.length) errors.push("Please select at least one genre")
    //   if (!types.length) errors.push("Please select at least one event type")
    //   if (start_date > end_date) errors.push("Start date must be before end date")
    // }
    // if (page === 2){
    //   if (!venue.length) errors.push("Venue name is required")
    //   if (venue.length < 6) errors.push("Event name must be at least 6 characters")
    //   if (venue.length > 255) errors.push("Venue name must be 255 characters or less")
    //   if (!venue_types.length) errors.push("Please select at least one venue type")
    //   if (!address.length) errors.push("Event description is required")
    //   if (address.length < 6) errors.push("Address must be at least 6 characters")
    //   if (name.length > 255) errors.push("Event name must be 255 characters or less")
    //   if (!country.value) errors.push("Please select a country")
    // }
    setErrors(errors)
    if(fileRejectionItems.length) setImage([])
    if(!errors.length) setPage((page) => page +1);
  }


  function prevPage() {
    if(fileRejectionItems.length) setImage([])
    if(!errors.length) setPage((page) => page -1);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = [];

    const data = {
      hostId,
      name,
      description,
      start_date,
      end_date,
      venue,
      venue_types,
      address,
      city,
      state: state.value,
      zip,
      country: country.value,
      // lat,
      // lng,
      genres,
      types,
      image: image[0],
      video,
    }

      let new_event = await dispatch(newEvent(data))
      const id = new_event?.event?.id
      if(new_event) {
      history.push(`/events/${id}`)
      hideForm()
      }
    }

    const sd = moment(start_date).format('ddd MMMM Do')
    const ed = moment(end_date).format('ddd MMMM Do yyyy')

    // console.log("DATA", 'hostId', hostId,
    // 'name', name,
    // 'description',description,
    // 'start_date',start_date,
    // 'end_date', end_date,
    // 'venue', venue,
    // 'venue_types',  venue_types,
    // 'address', address,
    // 'city', city,
    // 'state', state,
    // 'zip', zip,
    // 'country', country,
    // 'genres',  genres,
    // 'types', types,
    // 'image', image )


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
      { value: "USA", label: 'USA' },
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

    /******************************************* */



  return (
    <div className={styles.event_create_main}>

      <div className={styles.form_container}>
        <h1>Let's create your event...</h1>
        <form
          onSubmit={handleSubmit}
          className={styles.form}>
          {page !== 4 ? (
          <div className={styles.errors_container}>
            {/* <img src={'/images/logo.png'}
            className={styles.errors_img}></img> */}
            <ul className={styles.errors_ul}>
              {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
          </div>
            ) : null}
            {page === 4 ? (
              <div className={styles.img_preview_summary}>{thumb}</div>
            ) : null}

         {/**************************************************/}
            {page === 1 ? (
              <div className={styles.page_container}>
                <h2>General Event Info</h2>
                <input
                  type="text"
                  className={styles.create_event_form_field}
                  placeholder="Event Name"
                  autocomplete="new-password"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  />
                <textarea
                  className={styles.create_event_form_field_d}
                  placeholder="Description"
                  autocomplete="new-password"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  />
                <input
                  type="text"
                  className={styles.create_event_form_field}
                  placeholder="Start Date"
                  onFocus={(e) => e.target.type = 'date'}
                  autocomplete="new-password"
                  value={start_date}
                  onChange={(e) => setStart_date(e.target.value)}
                  />
                <input
                  type="text"
                  className={styles.create_event_form_field}
                  placeholder="End Date"
                  onFocus={(e) => e.target.type = 'date'}
                  autocomplete="new-password"
                  value={end_date}
                  onChange={(e) => setEnd_date(e.target.value)}
                  />
                <div className={styles.select_fields}>
                  <Select
                  className={styles.create_event_select_field}
                  isMulti
                  defaultValue={genres}
                  onChange={setGenres}
                  options={genre_options}
                  placeholder="Genres"
                  />

                  <Select
                  className={styles.create_event_select_field}
                  isMulti
                  defaultValue={types}
                  onChange={setTypes}
                  options={type_options}
                  placeholder="Event Types"
                  />
                  </div>
              </div>
            ) : null}
              {/**************************************************/}
            {page === 2 ? (
              <div className={styles.page_container}>

              <h2>Location Info</h2>
              <input
              type="text"
              className={styles.create_event_form_field}
              placeholder="Venue Name"
              autocomplete="new-password"
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
              />
              <Select
              className={styles.create_event_form_field_s}
              isMulti
              defaultValue={venue_types}
              onChange={setVenue_types}
              options={venue_type_options}
              placeholder="Venue type (Selcect all that apply)"
              />
              <input
              type="text"
              className={styles.create_event_form_field_a}
              placeholder="Address"
              autocomplete="new-password"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              />
              <input
              type="text"
              className={styles.create_event_form_field}
              placeholder="City"
              autocomplete="new-password"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              />
              <div className={styles.select_fields}>
                <Select
                  className={styles.create_event_select_field}
                  defaultValue={state}
                  onChange={setState}
                  options={state_options}
                  placeholder="State (US Only)"
                  />
                <input
                  type="text"
                  className={styles.create_event_select_field_z}
                  placeholder="Zip Code (US Only)"
                  autocomplete="new-password"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  />
            </div>
            <Select
              className={styles.create_event_form_field_s}
              defaultValue={country}
              onChange={setCountry}
              options={country_options}
              placeholder="Select Country"
              />
            {/* <div className={styles.select_fields}>
              <input
                type="number"
                className={styles.create_event_form_field_l}
                placeholder="Lattitude"
                autocomplete="new-password"
                value={lat}
                onChange={(e) => setLat(e.target.value)}
                />
              <input
                type="number"
                className={styles.create_event_form_field_l}
                placeholder="Longitude"
                autocomplete="new-password"
                value={lng}
                onChange={(e) => setLng(e.target.value)}
                />
              </div> */}
            </div>
            ) : null}
  {/**************************************************/}
            {page === 3 ? (
              <div className={styles.dnd_container}>
                <h3>Upload a photo for your event...</h3>
                {image && !fileRejectionItems.length ? (
                <div className={styles.img_preview}>
                  {thumb}
                  </div>
                ) : null}
                {image && fileRejectionItems.length ? (
                <div>
                  <h4>File Rejected:</h4>
                  <ul>{fileRejectionItems}</ul>
                </div>
                ) : null}

                <div {...getRootProps({ className: 'dropzone' })}>
                  <input {...getInputProps()} />
                  <p>Drag and drop an image file here, or click to select file</p>
                  <p>(Only .jpg .jpeg and .png images are allowed)</p>
                </div>
              </div>
             ) : null}

  {/**************************************************/}

  {page === 4 ? (
              <div className={styles.summary_page_container}>

                <div className={styles.summary_page_container_left}>
                  <h3>General Info:</h3>
                  <p>{name}</p>
                  <div className={styles.description_scroll}><p>{description}</p></div>
                  <p>{sd} - {ed}</p>
                  <div className={styles.genres_types}>
                    <ul>
                    {genres?.map((g) => <li>{g.label}</li>)}
                    </ul>
                    <ul>
                    {types?.map((t) => <li>{t.label}</li>)}
                    </ul>
                  </div>
                </div>

                <div className={styles.summary_page_container_right}>
                <h3>Location Info:</h3>
                  <p>{venue}</p>
                  <ul>
                    {venue_types?.map((v) => <li>{v.label}</li>)}
                  </ul>
                  <p>{address}</p>
                  <p>{city}</p>
                  {state ? <p>{state.value}</p> : null}
                  <p>{country.value}</p>
                  {zip ? <p>{zip}</p> : null}


                </div>


            </div>
            ) : null}
  {/**************************************************/}
            <div className={styles.form_nav_buttons}>

              {page !== 1 &&<button
              onClick={() => prevPage()}
              className={styles.form_nav_button}
              id="prev"
              type="button">
              Prev</button>}

              {page !== 4 &&<button
              onClick={() => nextPage()}
              className={styles.form_nav_button}
              id='next'
              type="button">
              Next</button>}

              {page === 4 && <button
              className={styles.form_nav_button}
              type="submit">Create Event</button>}

            </div>
        </form>
      </div>
    </div>
  );
}
