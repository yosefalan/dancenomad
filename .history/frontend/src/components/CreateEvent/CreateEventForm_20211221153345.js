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
      { value: label"Afganistan">Afghanistan</option>
      { value: label"Albania">Albania</option>
      { value: label"Algeria">Algeria</option>
      { value: label"American Samoa">American Samoa</option>
      { value: label"Andorra">Andorra</option>
      { value: label"Angola">Angola</option>
      { value: label"Anguilla">Anguilla</option>
      { value: label"Antigua & Barbuda">Antigua & Barbuda</option>
      { value: label"Argentina">Argentina</option>
      { value: label"Armenia">Armenia</option>
      { value: label"Aruba">Aruba</option>
      { value: label"Australia">Australia</option>
      { value: label"Austria">Austria</option>
      { value: label"Azerbaijan">Azerbaijan</option>
      { value: label"Bahamas">Bahamas</option>
      { value: label"Bahrain">Bahrain</option>
      { value: label"Bangladesh">Bangladesh</option>
      { value: label"Barbados">Barbados</option>
      { value: label"Belarus">Belarus</option>
      { value: label"Belgium">Belgium</option>
      { value: label"Belize">Belize</option>
      { value: label"Benin">Benin</option>
      { value: label"Bermuda">Bermuda</option>
      { value: label"Bhutan">Bhutan</option>
      { value: label"Bolivia">Bolivia</option>
      { value: label"Bonaire">Bonaire</option>
      { value: label"Bosnia & Herzegovina">Bosnia & Herzegovina</option>
      { value: label"Botswana">Botswana</option>
      { value: label"Brazil">Brazil</option>
      { value: label"British Indian Ocean Ter">British Indian Ocean Ter</option>
      { value: label"Brunei">Brunei</option>
      { value: label"Bulgaria">Bulgaria</option>
      { value: label"Burkina Faso">Burkina Faso</option>
      { value: label"Burundi">Burundi</option>
      { value: label"Cambodia">Cambodia</option>
      { value: label"Cameroon">Cameroon</option>
      { value: label"Canada">Canada</option>
      { value: label"Canary Islands">Canary Islands</option>
      { value: label"Cape Verde">Cape Verde</option>
      { value: label"Cayman Islands">Cayman Islands</option>
      { value: label"Central African Republic">Central African Republic</option>
      { value: label"Chad">Chad</option>
      { value: label"Channel Islands">Channel Islands</option>
      { value: label"Chile">Chile</option>
      { value: label"China">China</option>
      { value: label"Christmas Island">Christmas Island</option>
      { value: label"Cocos Island">Cocos Island</option>
      { value: label"Colombia">Colombia</option>
      { value: label"Comoros">Comoros</option>
      { value: label"Congo">Congo</option>
      { value: label"Cook Islands">Cook Islands</option>
      { value: label"Costa Rica">Costa Rica</option>
      { value: label"Cote DIvoire">Cote DIvoire</option>
      { value: label"Croatia">Croatia</option>
      { value: label"Cuba">Cuba</option>
      { value: label"Curaco">Curacao</option>
      { value: label"Cyprus">Cyprus</option>
      { value: label"Czech Republic">Czech Republic</option>
      { value: label"Denmark">Denmark</option>
      { value: label"Djibouti">Djibouti</option>
      { value: label"Dominica">Dominica</option>
      { value: label"Dominican Republic">Dominican Republic</option>
      { value: label"East Timor">East Timor</option>
      { value: label"Ecuador">Ecuador</option>
      { value: label"Egypt">Egypt</option>
      { value: label"El Salvador">El Salvador</option>
      { value: label"Equatorial Guinea">Equatorial Guinea</option>
      { value: label"Eritrea">Eritrea</option>
      { value: label"Estonia">Estonia</option>
      { value: label"Ethiopia">Ethiopia</option>
      { value: label"Falkland Islands">Falkland Islands</option>
      { value: label"Faroe Islands">Faroe Islands</option>
      { value: label"Fiji">Fiji</option>
      { value: label"Finland">Finland</option>
      { value: label"France">France</option>
      { value: label"French Guiana">French Guiana</option>
      { value: label"French Polynesia">French Polynesia</option>
      { value: label"French Southern Ter">French Southern Ter</option>
      { value: label"Gabon">Gabon</option>
      { value: label"Gambia">Gambia</option>
      { value: label"Georgia">Georgia</option>
      { value: label"Germany">Germany</option>
      { value: label"Ghana">Ghana</option>
      { value: label"Gibraltar">Gibraltar</option>
      { value: label"Great Britain">Great Britain</option>
      { value: label"Greece">Greece</option>
      { value: label"Greenland">Greenland</option>
      { value: label"Grenada">Grenada</option>
      { value: label"Guadeloupe">Guadeloupe</option>
      { value: label"Guam">Guam</option>
      { value: label"Guatemala">Guatemala</option>
      { value: label"Guinea">Guinea</option>
      { value: label"Guyana">Guyana</option>
      { value: label"Haiti">Haiti</option>
      { value: label"Hawaii">Hawaii</option>
      { value: label"Honduras">Honduras</option>
      { value: label"Hong Kong">Hong Kong</option>
      { value: label"Hungary">Hungary</option>
      { value: label"Iceland">Iceland</option>
      { value: label"Indonesia">Indonesia</option>
      { value: label"India">India</option>
      { value: label"Iran">Iran</option>
      { value: label"Iraq">Iraq</option>
      { value: label"Ireland">Ireland</option>
      { value: label"Isle of Man">Isle of Man</option>
      { value: label"Israel">Israel</option>
      { value: label"Italy">Italy</option>
      { value: label"Jamaica">Jamaica</option>
      { value: label"Japan">Japan</option>
      { value: label"Jordan">Jordan</option>
      { value: label"Kazakhstan">Kazakhstan</option>
      { value: label"Kenya">Kenya</option>
      { value: label"Kiribati">Kiribati</option>
      { value: label"Korea North">Korea North</option>
      { value: label"Korea Sout">Korea South</option>
      { value: label"Kuwait">Kuwait</option>
      { value: label"Kyrgyzstan">Kyrgyzstan</option>
      { value: label"Laos">Laos</option>
      { value: label"Latvia">Latvia</option>
      { value: label"Lebanon">Lebanon</option>
      { value: label"Lesotho">Lesotho</option>
      { value: label"Liberia">Liberia</option>
      { value: label"Libya">Libya</option>
      { value: label"Liechtenstein">Liechtenstein</option>
      { value: label"Lithuania">Lithuania</option>
      { value: label"Luxembourg">Luxembourg</option>
      { value: label"Macau">Macau</option>
      { value: label"Macedonia">Macedonia</option>
      { value: label"Madagascar">Madagascar</option>
      { value: label"Malaysia">Malaysia</option>
      { value: label"Malawi">Malawi</option>
      { value: label"Maldives">Maldives</option>
      { value: label"Mali">Mali</option>
      { value: label"Malta">Malta</option>
      { value: label"Marshall Islands">Marshall Islands</option>
      { value: label"Martinique">Martinique</option>
      { value: label"Mauritania">Mauritania</option>
      { value: label"Mauritius">Mauritius</option>
      { value: label"Mayotte">Mayotte</option>
      { value: label"Mexico">Mexico</option>
      { value: label"Midway Islands">Midway Islands</option>
      { value: label"Moldova">Moldova</option>
      { value: label"Monaco">Monaco</option>
      { value: label"Mongolia">Mongolia</option>
      { value: label"Montserrat">Montserrat</option>
      { value: label"Morocco">Morocco</option>
      { value: label"Mozambique">Mozambique</option>
      { value: label"Myanmar">Myanmar</option>
      { value: label"Nambia">Nambia</option>
      { value: label"Nauru">Nauru</option>
      { value: label"Nepal">Nepal</option>
      { value: label"Netherland Antilles">Netherland Antilles</option>
      { value: label"Netherlands">Netherlands (Holland, Europe)</option>
      { value: label"Nevis">Nevis</option>
      { value: label"New Caledonia">New Caledonia</option>
      { value: label"New Zealand">New Zealand</option>
      { value: label"Nicaragua">Nicaragua</option>
      { value: label"Niger">Niger</option>
      { value: label"Nigeria">Nigeria</option>
      { value: label"Niue">Niue</option>
      { value: label"Norfolk Island">Norfolk Island</option>
      { value: label"Norway">Norway</option>
      { value: label"Oman">Oman</option>
      { value: label"Pakistan">Pakistan</option>
      { value: label"Palau Island">Palau Island</option>
      { value: label"Palestine">Palestine</option>
      { value: label"Panama">Panama</option>
      { value: label"Papua New Guinea">Papua New Guinea</option>
      { value: label"Paraguay">Paraguay</option>
      { value: label"Peru">Peru</option>
      { value: label"Phillipines">Philippines</option>
      { value: label"Pitcairn Island">Pitcairn Island</option>
      { value: label"Poland">Poland</option>
      { value: label"Portugal">Portugal</option>
      { value: label"Puerto Rico">Puerto Rico</option>
      { value: label"Qatar">Qatar</option>
      { value: label"Republic of Montenegro">Republic of Montenegro</option>
      { value: label"Republic of Serbia">Republic of Serbia</option>
      { value: label"Reunion">Reunion</option>
      { value: label"Romania">Romania</option>
      { value: label"Russia">Russia</option>
      { value: label"Rwanda">Rwanda</option>
      { value: label"St Barthelemy">St Barthelemy</option>
      { value: label"St Eustatius">St Eustatius</option>
      { value: label"St Helena">St Helena</option>
      { value: label"St Kitts-Nevis">St Kitts-Nevis</option>
      { value: label"St Lucia">St Lucia</option>
      { value: label"St Maarten">St Maarten</option>
      { value: label"St Pierre & Miquelon">St Pierre & Miquelon</option>
      { value: label"St Vincent & Grenadines">St Vincent & Grenadines</option>
      { value: label"Saipan">Saipan</option>
      { value: label"Samoa">Samoa</option>
      { value: label"Samoa American">Samoa American</option>
      { value: label"San Marino">San Marino</option>
      { value: label"Sao Tome & Principe">Sao Tome & Principe</option>
      { value: label"Saudi Arabia">Saudi Arabia</option>
      { value: label"Senegal">Senegal</option>
      { value: label"Seychelles">Seychelles</option>
      { value: label"Sierra Leone">Sierra Leone</option>
      { value: label"Singapore">Singapore</option>
      { value: label"Slovakia">Slovakia</option>
      { value: label"Slovenia">Slovenia</option>
      { value: label"Solomon Islands">Solomon Islands</option>
      { value: label"Somalia">Somalia</option>
      { value: label"South Africa">South Africa</option>
      { value: label"Spain">Spain</option>
      { value: label"Sri Lanka">Sri Lanka</option>
      { value: label"Sudan">Sudan</option>
      { value: label"Suriname">Suriname</option>
      { value: label"Swaziland">Swaziland</option>
      { value: label"Sweden">Sweden</option>
      { value: label"Switzerland">Switzerland</option>
      { value: label"Syria">Syria</option>
      { value: label"Tahiti">Tahiti</option>
      { value: label"Taiwan">Taiwan</option>
      { value: label"Tajikistan">Tajikistan</option>
      { value: label"Tanzania">Tanzania</option>
      { value: label"Thailand">Thailand</option>
      { value: label"Togo">Togo</option>
      { value: label"Tokelau">Tokelau</option>
      { value: label"Tonga">Tonga</option>
      { value: label"Trinidad & Tobago">Trinidad & Tobago</option>
      { value: label"Tunisia">Tunisia</option>
      { value: label"Turkey">Turkey</option>
      { value: label"Turkmenistan">Turkmenistan</option>
      { value: label"Turks & Caicos Is">Turks & Caicos Is</option>
      { value: label"Tuvalu">Tuvalu</option>
      { value: label"Uganda">Uganda</option>
      { value: label"United Kingdom">United Kingdom</option>
      { value: label"Ukraine">Ukraine</option>
      { value: label"United Arab Erimates">United Arab Emirates</option>
      { value: label"United States of America">United States of America</option>
      { value: label"Uraguay">Uruguay</option>
      { value: label"Uzbekistan">Uzbekistan</option>
      { value: label"Vanuatu">Vanuatu</option>
      { value: label"Vatican City State">Vatican City State</option>
      { value: label"Venezuela">Venezuela</option>
      { value: label"Vietnam">Vietnam</option>
      { value: label"Virgin Islands (Brit)">Virgin Islands (Brit)</option>
      { value: label"Virgin Islands (USA)">Virgin Islands (USA)</option>
      { value: label"Wake Island">Wake Island</option>
      { value: label"Wallis & Futana Is">Wallis & Futana Is</option>
      { value: label"Yemen">Yemen</option>
      { value: label"Zaire">Zaire</option>
      { value: label"Zambia">Zambia</option>
      { value: label"Zimbabwe">Zimbabwe</option>
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
