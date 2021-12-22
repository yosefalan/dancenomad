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
      { value="Afganistan">Afghanistan</option>
      { value="Albania">Albania</option>
      { value="Algeria">Algeria</option>
      { value="American Samoa">American Samoa</option>
      { value="Andorra">Andorra</option>
      { value="Angola">Angola</option>
      { value="Anguilla">Anguilla</option>
      { value="Antigua & Barbuda">Antigua & Barbuda</option>
      { value="Argentina">Argentina</option>
      { value="Armenia">Armenia</option>
      { value="Aruba">Aruba</option>
      { value="Australia">Australia</option>
      { value="Austria">Austria</option>
      { value="Azerbaijan">Azerbaijan</option>
      { value="Bahamas">Bahamas</option>
      { value="Bahrain">Bahrain</option>
      { value="Bangladesh">Bangladesh</option>
      { value="Barbados">Barbados</option>
      { value="Belarus">Belarus</option>
      { value="Belgium">Belgium</option>
      { value="Belize">Belize</option>
      { value="Benin">Benin</option>
      { value="Bermuda">Bermuda</option>
      { value="Bhutan">Bhutan</option>
      { value="Bolivia">Bolivia</option>
      { value="Bonaire">Bonaire</option>
      { value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
      { value="Botswana">Botswana</option>
      { value="Brazil">Brazil</option>
      { value="British Indian Ocean Ter">British Indian Ocean Ter</option>
      { value="Brunei">Brunei</option>
      { value="Bulgaria">Bulgaria</option>
      { value="Burkina Faso">Burkina Faso</option>
      { value="Burundi">Burundi</option>
      { value="Cambodia">Cambodia</option>
      { value="Cameroon">Cameroon</option>
      { value="Canada">Canada</option>
      { value="Canary Islands">Canary Islands</option>
      { value="Cape Verde">Cape Verde</option>
      { value="Cayman Islands">Cayman Islands</option>
      { value="Central African Republic">Central African Republic</option>
      { value="Chad">Chad</option>
      { value="Channel Islands">Channel Islands</option>
      { value="Chile">Chile</option>
      { value="China">China</option>
      { value="Christmas Island">Christmas Island</option>
      { value="Cocos Island">Cocos Island</option>
      { value="Colombia">Colombia</option>
      { value="Comoros">Comoros</option>
      { value="Congo">Congo</option>
      { value="Cook Islands">Cook Islands</option>
      { value="Costa Rica">Costa Rica</option>
      { value="Cote DIvoire">Cote DIvoire</option>
      { value="Croatia">Croatia</option>
      { value="Cuba">Cuba</option>
      { value="Curaco">Curacao</option>
      { value="Cyprus">Cyprus</option>
      { value="Czech Republic">Czech Republic</option>
      { value="Denmark">Denmark</option>
      { value="Djibouti">Djibouti</option>
      { value="Dominica">Dominica</option>
      { value="Dominican Republic">Dominican Republic</option>
      { value="East Timor">East Timor</option>
      { value="Ecuador">Ecuador</option>
      { value="Egypt">Egypt</option>
      { value="El Salvador">El Salvador</option>
      { value="Equatorial Guinea">Equatorial Guinea</option>
      { value="Eritrea">Eritrea</option>
      { value="Estonia">Estonia</option>
      { value="Ethiopia">Ethiopia</option>
      { value="Falkland Islands">Falkland Islands</option>
      { value="Faroe Islands">Faroe Islands</option>
      { value="Fiji">Fiji</option>
      { value="Finland">Finland</option>
      { value="France">France</option>
      { value="French Guiana">French Guiana</option>
      { value="French Polynesia">French Polynesia</option>
      { value="French Southern Ter">French Southern Ter</option>
      { value="Gabon">Gabon</option>
      { value="Gambia">Gambia</option>
      { value="Georgia">Georgia</option>
      { value="Germany">Germany</option>
      { value="Ghana">Ghana</option>
      { value="Gibraltar">Gibraltar</option>
      { value="Great Britain">Great Britain</option>
      { value="Greece">Greece</option>
      { value="Greenland">Greenland</option>
      { value="Grenada">Grenada</option>
      { value="Guadeloupe">Guadeloupe</option>
      { value="Guam">Guam</option>
      { value="Guatemala">Guatemala</option>
      { value="Guinea">Guinea</option>
      { value="Guyana">Guyana</option>
      { value="Haiti">Haiti</option>
      { value="Hawaii">Hawaii</option>
      { value="Honduras">Honduras</option>
      { value="Hong Kong">Hong Kong</option>
      { value="Hungary">Hungary</option>
      { value="Iceland">Iceland</option>
      { value="Indonesia">Indonesia</option>
      { value="India">India</option>
      { value="Iran">Iran</option>
      { value="Iraq">Iraq</option>
      { value="Ireland">Ireland</option>
      { value="Isle of Man">Isle of Man</option>
      { value="Israel">Israel</option>
      { value="Italy">Italy</option>
      { value="Jamaica">Jamaica</option>
      { value="Japan">Japan</option>
      { value="Jordan">Jordan</option>
      { value="Kazakhstan">Kazakhstan</option>
      { value="Kenya">Kenya</option>
      { value="Kiribati">Kiribati</option>
      { value="Korea North">Korea North</option>
      { value="Korea Sout">Korea South</option>
      { value="Kuwait">Kuwait</option>
      { value="Kyrgyzstan">Kyrgyzstan</option>
      { value="Laos">Laos</option>
      { value="Latvia">Latvia</option>
      { value="Lebanon">Lebanon</option>
      { value="Lesotho">Lesotho</option>
      { value="Liberia">Liberia</option>
      { value="Libya">Libya</option>
      { value="Liechtenstein">Liechtenstein</option>
      { value="Lithuania">Lithuania</option>
      { value="Luxembourg">Luxembourg</option>
      { value="Macau">Macau</option>
      { value="Macedonia">Macedonia</option>
      { value="Madagascar">Madagascar</option>
      { value="Malaysia">Malaysia</option>
      { value="Malawi">Malawi</option>
      { value="Maldives">Maldives</option>
      { value="Mali">Mali</option>
      { value="Malta">Malta</option>
      { value="Marshall Islands">Marshall Islands</option>
      { value="Martinique">Martinique</option>
      { value="Mauritania">Mauritania</option>
      { value="Mauritius">Mauritius</option>
      { value="Mayotte">Mayotte</option>
      { value="Mexico">Mexico</option>
      { value="Midway Islands">Midway Islands</option>
      { value="Moldova">Moldova</option>
      { value="Monaco">Monaco</option>
      { value="Mongolia">Mongolia</option>
      { value="Montserrat">Montserrat</option>
      { value="Morocco">Morocco</option>
      { value="Mozambique">Mozambique</option>
      { value="Myanmar">Myanmar</option>
      { value="Nambia">Nambia</option>
      { value="Nauru">Nauru</option>
      { value="Nepal">Nepal</option>
      { value="Netherland Antilles">Netherland Antilles</option>
      { value="Netherlands">Netherlands (Holland, Europe)</option>
      { value="Nevis">Nevis</option>
      { value="New Caledonia">New Caledonia</option>
      { value="New Zealand">New Zealand</option>
      { value="Nicaragua">Nicaragua</option>
      { value="Niger">Niger</option>
      { value="Nigeria">Nigeria</option>
      { value="Niue">Niue</option>
      { value="Norfolk Island">Norfolk Island</option>
      { value="Norway">Norway</option>
      { value="Oman">Oman</option>
      { value="Pakistan">Pakistan</option>
      { value="Palau Island">Palau Island</option>
      { value="Palestine">Palestine</option>
      { value="Panama">Panama</option>
      { value="Papua New Guinea">Papua New Guinea</option>
      { value="Paraguay">Paraguay</option>
      { value="Peru">Peru</option>
      { value="Phillipines">Philippines</option>
      { value="Pitcairn Island">Pitcairn Island</option>
      { value="Poland">Poland</option>
      { value="Portugal">Portugal</option>
      { value="Puerto Rico">Puerto Rico</option>
      { value="Qatar">Qatar</option>
      { value="Republic of Montenegro">Republic of Montenegro</option>
      { value="Republic of Serbia">Republic of Serbia</option>
      { value="Reunion">Reunion</option>
      { value="Romania">Romania</option>
      { value="Russia">Russia</option>
      { value="Rwanda">Rwanda</option>
      { value="St Barthelemy">St Barthelemy</option>
      { value="St Eustatius">St Eustatius</option>
      { value="St Helena">St Helena</option>
      { value="St Kitts-Nevis">St Kitts-Nevis</option>
      { value="St Lucia">St Lucia</option>
      { value="St Maarten">St Maarten</option>
      { value="St Pierre & Miquelon">St Pierre & Miquelon</option>
      { value="St Vincent & Grenadines">St Vincent & Grenadines</option>
      { value="Saipan">Saipan</option>
      { value="Samoa">Samoa</option>
      { value="Samoa American">Samoa American</option>
      { value="San Marino">San Marino</option>
      { value="Sao Tome & Principe">Sao Tome & Principe</option>
      { value="Saudi Arabia">Saudi Arabia</option>
      { value="Senegal">Senegal</option>
      { value="Seychelles">Seychelles</option>
      { value="Sierra Leone">Sierra Leone</option>
      { value="Singapore">Singapore</option>
      { value="Slovakia">Slovakia</option>
      { value="Slovenia">Slovenia</option>
      { value="Solomon Islands">Solomon Islands</option>
      { value="Somalia">Somalia</option>
      { value="South Africa">South Africa</option>
      { value="Spain">Spain</option>
      { value="Sri Lanka">Sri Lanka</option>
      { value="Sudan">Sudan</option>
      { value="Suriname">Suriname</option>
      { value="Swaziland">Swaziland</option>
      { value="Sweden">Sweden</option>
      { value="Switzerland">Switzerland</option>
      { value="Syria">Syria</option>
      { value="Tahiti">Tahiti</option>
      { value="Taiwan">Taiwan</option>
      { value="Tajikistan">Tajikistan</option>
      { value="Tanzania">Tanzania</option>
      { value="Thailand">Thailand</option>
      { value="Togo">Togo</option>
      { value="Tokelau">Tokelau</option>
      { value="Tonga">Tonga</option>
      { value="Trinidad & Tobago">Trinidad & Tobago</option>
      { value="Tunisia">Tunisia</option>
      { value="Turkey">Turkey</option>
      { value="Turkmenistan">Turkmenistan</option>
      { value="Turks & Caicos Is">Turks & Caicos Is</option>
      { value="Tuvalu">Tuvalu</option>
      { value="Uganda">Uganda</option>
      { value="United Kingdom">United Kingdom</option>
      { value="Ukraine">Ukraine</option>
      { value="United Arab Erimates">United Arab Emirates</option>
      { value="United States of America">United States of America</option>
      { value="Uraguay">Uruguay</option>
      { value="Uzbekistan">Uzbekistan</option>
      { value="Vanuatu">Vanuatu</option>
      { value="Vatican City State">Vatican City State</option>
      { value="Venezuela">Venezuela</option>
      { value="Vietnam">Vietnam</option>
      { value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
      { value="Virgin Islands (USA)">Virgin Islands (USA)</option>
      { value="Wake Island">Wake Island</option>
      { value="Wallis & Futana Is">Wallis & Futana Is</option>
      { value="Yemen">Yemen</option>
      { value="Zaire">Zaire</option>
      { value="Zambia">Zambia</option>
      { value="Zimbabwe">Zimbabwe</option>
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
