import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newEvent } from '../../store/events'
import Select from 'react-select'
import styles from './CreateEvent.module.css'

function CreateEventForm () {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session?.user);
  const hostId = sessionUser.id
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [start_date, setStart_date] = useState(null);
  const [end_date, setEnd_date] = useState(null);
  const [venue, setVenue] = useState("");
  const [venue_types, setVenue_types] = useState(null);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [genres, setGenres] = useState(null);
  const [types, setTypes] = useState(null);
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = [];
    const newEvent = dispatch(newEvent({
      hostId,
      name,
      description,
      start_date,
      end_date,
      venue,
      venue_type,
      address,
      city,
      state,
      zip,
      country,
      lat,
      lng,
      genres,
      types,
      image,
      video
    }))
    .then(() => {
      console.log("******FORM DATA*****", newEvent)
      setName("");
      setDescription("");
      setStart_date(null);
      setEnd_date(null);
      setVenue("");
      setVenue_type(null);
      setCity("");
      setState("")
      setCountry("");
      setLat(null);
      setLng(null);
      settGenres(null);
      settTypes(null);
      setImage(null);
      setVideo(null);
    })
    .catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) {
        newErrors = data.errors;
        setErrors(newErrors);
      }
      });
    }

    const updateImageFile = (e) => {
      const file = e.target.file[0];
      if (file) setImage(file);
    };

    const updateVideoFile = (e) => {
      const file = e.target.file[0];
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
      { value: "Ballroom1", label: 'Ballroom' },
      { value: "Conference Center", label: 'Conference Center' },
      { value: "Cruise Ship", label: 'Cruise Ship' },
      { value: "Dance Studio", label: 'Dance Studio' },
      { value: "Hotel", label: 'Hotel' },
      { value: "Night Club", label: 'Night Club' },
      { value: "Park / Beach / Public", label: 'Park / Beach / Public' },
      { value: "Private Residence", label: 'Private Residence' },
      { value: "Resort", label: 'Resort' },
      { value: "Other", label: 'Other' }
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
      { value: "Afganistan">Afghanistan' },
      { value: "Albania">Albania' },
      { value: "Algeria">Algeria' },
      { value: "American Samoa">American Samoa' },
      { value: "Andorra">Andorra' },
      { value: "Angola">Angola' },
      { value: "Anguilla">Anguilla' },
      { value: "Antigua & Barbuda">Antigua & Barbuda' },
      { value: "Argentina">Argentina' },
      { value: "Armenia">Armenia' },
      { value: "Aruba">Aruba' },
      { value: "Australia">Australia' },
      { value: "Austria">Austria' },
      { value: "Azerbaijan">Azerbaijan' },
      { value: "Bahamas">Bahamas' },
      { value: "Bahrain">Bahrain' },
      { value: "Bangladesh">Bangladesh' },
      { value: "Barbados">Barbados' },
      { value: "Belarus">Belarus' },
      { value: "Belgium">Belgium' },
      { value: "Belize">Belize' },
      { value: "Benin">Benin' },
      { value: "Bermuda">Bermuda' },
      { value: "Bhutan">Bhutan' },
      { value: "Bolivia">Bolivia' },
      { value: "Bonaire">Bonaire' },
      { value: "Bosnia & Herzegovina">Bosnia & Herzegovina' },
      { value: "Botswana">Botswana' },
      { value: "Brazil">Brazil' },
      { value: "British Indian Ocean Ter">British Indian Ocean Ter' },
      { value: "Brunei">Brunei' },
      { value: "Bulgaria">Bulgaria' },
      { value: "Burkina Faso">Burkina Faso' },
      { value: "Burundi">Burundi' },
      { value: "Cambodia">Cambodia' },
      { value: "Cameroon">Cameroon' },
      { value: "Canada">Canada' },
      { value: "Canary Islands">Canary Islands' },
      { value: "Cape Verde">Cape Verde' },
      { value: "Cayman Islands">Cayman Islands' },
      { value: "Central African Republic">Central African Republic' },
      { value: "Chad">Chad' },
      { value: "Channel Islands">Channel Islands' },
      { value: "Chile">Chile' },
      { value: "China">China' },
      { value: "Christmas Island">Christmas Island' },
      { value: "Cocos Island">Cocos Island' },
      { value: "Colombia">Colombia' },
      { value: "Comoros">Comoros' },
      { value: "Congo">Congo' },
      { value: "Cook Islands">Cook Islands' },
      { value: "Costa Rica">Costa Rica' },
      { value: "Cote DIvoire">Cote DIvoire' },
      { value: "Croatia">Croatia' },
      { value: "Cuba">Cuba' },
      { value: "Curaco">Curacao' },
      { value: "Cyprus">Cyprus' },
      { value: "Czech Republic">Czech Republic' },
      { value: "Denmark">Denmark' },
      { value: "Djibouti">Djibouti' },
      { value: "Dominica">Dominica' },
      { value: "Dominican Republic">Dominican Republic' },
      { value: "East Timor">East Timor' },
      { value: "Ecuador">Ecuador' },
      { value: "Egypt">Egypt' },
      { value: "El Salvador">El Salvador' },
      { value: "Equatorial Guinea">Equatorial Guinea' },
      { value: "Eritrea">Eritrea' },
      { value: "Estonia">Estonia' },
      { value: "Ethiopia">Ethiopia' },
      { value: "Falkland Islands">Falkland Islands' },
      { value: "Faroe Islands">Faroe Islands' },
      { value: "Fiji">Fiji' },
      { value: "Finland">Finland' },
      { value: "France">France' },
      { value: "French Guiana">French Guiana' },
      { value: "French Polynesia">French Polynesia' },
      { value: "French Southern Ter">French Southern Ter' },
      { value: "Gabon">Gabon' },
      { value: "Gambia">Gambia' },
      { value: "Georgia">Georgia' },
      { value: "Germany">Germany' },
      { value: "Ghana">Ghana' },
      { value: "Gibraltar">Gibraltar' },
      { value: "Great Britain">Great Britain' },
      { value: "Greece">Greece' },
      { value: "Greenland">Greenland' },
      { value: "Grenada">Grenada' },
      { value: "Guadeloupe">Guadeloupe' },
      { value: "Guam">Guam' },
      { value: "Guatemala">Guatemala' },
      { value: "Guinea">Guinea' },
      { value: "Guyana">Guyana' },
      { value: "Haiti">Haiti' },
      { value: "Hawaii">Hawaii' },
      { value: "Honduras">Honduras' },
      { value: "Hong Kong">Hong Kong' },
      { value: "Hungary">Hungary' },
      { value: "Iceland">Iceland' },
      { value: "Indonesia">Indonesia' },
      { value: "India">India' },
      { value: "Iran">Iran' },
      { value: "Iraq">Iraq' },
      { value: "Ireland">Ireland' },
      { value: "Isle of Man">Isle of Man' },
      { value: "Israel">Israel' },
      { value: "Italy">Italy' },
      { value: "Jamaica">Jamaica' },
      { value: "Japan">Japan' },
      { value: "Jordan">Jordan' },
      { value: "Kazakhstan">Kazakhstan' },
      { value: "Kenya">Kenya' },
      { value: "Kiribati">Kiribati' },
      { value: "Korea North">Korea North' },
      { value: "Korea Sout">Korea South' },
      { value: "Kuwait">Kuwait' },
      { value: "Kyrgyzstan">Kyrgyzstan' },
      { value: "Laos">Laos' },
      { value: "Latvia">Latvia' },
      { value: "Lebanon">Lebanon' },
      { value: "Lesotho">Lesotho' },
      { value: "Liberia">Liberia' },
      { value: "Libya">Libya' },
      { value: "Liechtenstein">Liechtenstein' },
      { value: "Lithuania">Lithuania' },
      { value: "Luxembourg">Luxembourg' },
      { value: "Macau">Macau' },
      { value: "Macedonia">Macedonia' },
      { value: "Madagascar">Madagascar' },
      { value: "Malaysia">Malaysia' },
      { value: "Malawi">Malawi' },
      { value: "Maldives">Maldives' },
      { value: "Mali">Mali' },
      { value: "Malta">Malta' },
      { value: "Marshall Islands">Marshall Islands' },
      { value: "Martinique">Martinique' },
      { value: "Mauritania">Mauritania' },
      { value: "Mauritius">Mauritius' },
      { value: "Mayotte">Mayotte' },
      { value: "Mexico">Mexico' },
      { value: "Midway Islands">Midway Islands' },
      { value: "Moldova">Moldova' },
      { value: "Monaco">Monaco' },
      { value: "Mongolia">Mongolia' },
      { value: "Montserrat">Montserrat' },
      { value: "Morocco">Morocco' },
      { value: "Mozambique">Mozambique' },
      { value: "Myanmar">Myanmar' },
      { value: "Nambia">Nambia' },
      { value: "Nauru">Nauru' },
      { value: "Nepal">Nepal' },
      { value: "Netherland Antilles">Netherland Antilles' },
      { value: "Netherlands">Netherlands (Holland, Europe)' },
      { value: "Nevis">Nevis' },
      { value: "New Caledonia">New Caledonia' },
      { value: "New Zealand">New Zealand' },
      { value: "Nicaragua">Nicaragua' },
      { value: "Niger">Niger' },
      { value: "Nigeria">Nigeria' },
      { value: "Niue">Niue' },
      { value: "Norfolk Island">Norfolk Island' },
      { value: "Norway">Norway' },
      { value: "Oman">Oman' },
      { value: "Pakistan">Pakistan' },
      { value: "Palau Island">Palau Island' },
      { value: "Palestine">Palestine' },
      { value: "Panama">Panama' },
      { value: "Papua New Guinea">Papua New Guinea' },
      { value: "Paraguay">Paraguay' },
      { value: "Peru">Peru' },
      { value: "Phillipines">Philippines' },
      { value: "Pitcairn Island">Pitcairn Island' },
      { value: "Poland">Poland' },
      { value: "Portugal">Portugal' },
      { value: "Puerto Rico">Puerto Rico' },
      { value: "Qatar">Qatar' },
      { value: "Republic of Montenegro">Republic of Montenegro' },
      { value: "Republic of Serbia">Republic of Serbia' },
      { value: "Reunion">Reunion' },
      { value: "Romania">Romania' },
      { value: "Russia">Russia' },
      { value: "Rwanda">Rwanda' },
      { value: "St Barthelemy">St Barthelemy' },
      { value: "St Eustatius">St Eustatius' },
      { value: "St Helena">St Helena' },
      { value: "St Kitts-Nevis">St Kitts-Nevis' },
      { value: "St Lucia">St Lucia' },
      { value: "St Maarten">St Maarten' },
      { value: "St Pierre & Miquelon">St Pierre & Miquelon' },
      { value: "St Vincent & Grenadines">St Vincent & Grenadines' },
      { value: "Saipan">Saipan' },
      { value: "Samoa">Samoa' },
      { value: "Samoa American">Samoa American' },
      { value: "San Marino">San Marino' },
      { value: "Sao Tome & Principe">Sao Tome & Principe' },
      { value: "Saudi Arabia">Saudi Arabia' },
      { value: "Senegal">Senegal' },
      { value: "Seychelles">Seychelles' },
      { value: "Sierra Leone">Sierra Leone' },
      { value: "Singapore">Singapore' },
      { value: "Slovakia">Slovakia' },
      { value: "Slovenia">Slovenia' },
      { value: "Solomon Islands">Solomon Islands' },
      { value: "Somalia">Somalia' },
      { value: "South Africa">South Africa' },
      { value: "Spain">Spain' },
      { value: "Sri Lanka">Sri Lanka' },
      { value: "Sudan">Sudan' },
      { value: "Suriname">Suriname' },
      { value: "Swaziland">Swaziland' },
      { value: "Sweden">Sweden' },
      { value: "Switzerland">Switzerland' },
      { value: "Syria">Syria' },
      { value: "Tahiti">Tahiti' },
      { value: "Taiwan">Taiwan' },
      { value: "Tajikistan">Tajikistan' },
      { value: "Tanzania">Tanzania' },
      { value: "Thailand">Thailand' },
      { value: "Togo">Togo' },
      { value: "Tokelau">Tokelau' },
      { value: "Tonga">Tonga' },
      { value: "Trinidad & Tobago">Trinidad & Tobago' },
      { value: "Tunisia">Tunisia' },
      { value: "Turkey">Turkey' },
      { value: "Turkmenistan">Turkmenistan' },
      { value: "Turks & Caicos Is">Turks & Caicos Is' },
      { value: "Tuvalu">Tuvalu' },
      { value: "Uganda">Uganda' },
      { value: "United Kingdom">United Kingdom' },
      { value: "Ukraine">Ukraine' },
      { value: "United Arab Erimates">United Arab Emirates' },
      { value: "United States of America">United States of America' },
      { value: "Uraguay">Uruguay' },
      { value: "Uzbekistan">Uzbekistan' },
      { value: "Vanuatu">Vanuatu' },
      { value: "Vatican City State">Vatican City State' },
      { value: "Venezuela">Venezuela' },
      { value: "Vietnam">Vietnam' },
      { value: "Virgin Islands (Brit)">Virgin Islands (Brit)' },
      { value: "Virgin Islands (USA)">Virgin Islands (USA)' },
      { value: "Wake Island">Wake Island' },
      { value: "Wallis & Futana Is">Wallis & Futana Is' },
      { value: "Yemen">Yemen' },
      { value: "Zaire">Zaire' },
      { value: "Zambia">Zambia' },
      { value: "Zimbabwe">Zimbabwe' }
    ]


  return (
    <div className={styles.form_container}>
      <h1>Let's create your event</h1>
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
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          className="field"
          placeholder="Description"
          autocomplete="new-password"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="date"
          className="field"
          placeholder="Start Date"
          autocomplete="new-password"
          value={start_date}
          onChange={(e) => setStart_date(e.target.value)}
        />
        <input
          type="date"
          className="field"
          placeholder="End Date"
          autocomplete="new-password"
          value={end_date}
          onChange={(e) => setEnd_date(e.target.value)}
        />
        <input
          type="text"
          className="field"
          placeholder="Venue Name"
          autocomplete="new-password"
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
        />
       <Select
          isMulti
          defaultValue={venue_types}
          onChange={setVenue_types}
          options={venue_type_options}
          placeholder="Genres"
        />
        <input
          type="text"
          className="field"
          placeholder="Address"
          autocomplete="new-password"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          className="field"
          placeholder="City"
          autocomplete="new-password"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
         <Select
          isMulti
          defaultValue={state}
          onChange={setState}
          options={state_options}
          placeholder="Genres"
        />
        <input
          type="text"
          className="field"
          placeholder="Zip Code"
          autocomplete="new-password"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
        />
        <select
          className="field"
          placeholder="Country"
          autocomplete="new-password"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          id="country" name="country">
          <option value="" disabled selected>Select Country</option>







        </select>
        <input
          type="number"
          className="field"
          placeholder="Lattitude"
          autocomplete="new-password"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
        />
        <input
          type="number"
          className="field"
          placeholder="Longitude"
          autocomplete="new-password"
          value={lng}
          onChange={(e) => setLng(e.target.value)}
        />
        <Select
          isMulti
          defaultValue={genres}
          onChange={setGenres}
          options={genre_options}
          placeholder="Genres"
        />
        <Select
         isMulti
         defaultValue={types}
         onChange={setTypes}
         options={type_options}
         placeholder="Event Type"
         />
        <div className={styles.buttons_container}>

          <label className="uploadLabel">
          Image Upload
          <input
          type="file"
          multiple
          onChange={updateImageFile} />
          </label>

          <label className="uploadLabel">
          Video Upload
          <input
          type="file"
          multiple
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

export default CreateEventForm