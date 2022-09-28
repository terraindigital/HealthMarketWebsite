import React, { FC, useState, useEffect } from "react";
import axios from "axios";

// Styles
import {
  InputGroup,
  Input,
  Options
} from "./styles"

// Components

// Images
import MapPin from "../../../static/images/location.png"

interface Props {
  api_key: String
}

const Autocomplete: FC<Props> = ({ api_key }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let locations = Array();
  let coordinates = Array();
  let zipCodes = Array();

  const query = 'https://api.geocode.earth/v1/autocomplete?' +
                `api_key=${api_key}&` +
                `boundary.country=US&` +
                `text=`;

  const getOptions = (e) => {
    const value = e.target.value;

    if (value && value != '') {
      axios(query + value)
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.error("Error fetching data: ", error);
          setError(error);
          setData(null);
        })
        .finally(() => {
          setLoading(false);
        });
    }

    const options = document.querySelector('.location-options')
    
    if (data) {
      Object.keys(data['features']).map((i) => {
        const place = data['features'][i]['properties'];
        
        coordinates.push(data['features'][i]['geometry']['coordinates']);
        console.log(place);
        zipCodes.push(place['postalcode']);

        if (place['locality'] !== undefined && place['region_a'] !== undefined) {
          const localityString = place['locality'] + ', ' + place['region_a'];

          if (!locations.includes(localityString)) {
            locations.push(localityString);
          }
        }
      });

      if (locations.length > 0 && options) {
        const num = (locations.length > 4) ? 4 : locations.length;
        options.innerHTML = '';

        for (let i=0; i < num; i++) {
          const coords = coordinates[i];
          const location = locations[i];
          const zipCode = zipCodes[i];

          console.log(zipCode);
          
          if (coords !== undefined && zipCode !== undefined) {
            options.innerHTML += `
              <div class="location-option"` +
              `data-longitude="` + coords[0] + `"` +
              `data-latitude="` + coords[1] + `"` +
              `data-zip="` + zipCode + `"` +
              `>` + location + `</div>
            `;
          }
        }
      }
    }

    if (value === '' && options) {
      options.innerHTML = '';
    }
  }

  useEffect(() => {
    const options = document.querySelectorAll('.location-option');
    const input = document.querySelector('#geocodeAutocomplete');

    if (options && input) {
      Object.keys(options).map((i) => {
        options[i].addEventListener("click", (e) => {
          const location = e.target.innerText;
          const zipCode = e.target.dataset.zip;
          const latitude = e.target.dataset.latitude;
          const longitude = e.target.dataset.longitude;
          const parent = document.querySelector('.location-options');
          const coordField = document.querySelector('#coordinates');
          const zipField = document.querySelector('#zipCode');
          
          if (coordField) {
            coordField.value = encodeURI(latitude + ", " + longitude);
          } else if (zipField) {
            zipField.value = zipCode;
          }

          input.value = location;
          parent.innerHTML = '';
        })
      })
    }
  })

  return (
    <InputGroup id="zipCodeField">
        <img src={MapPin} alt="map location pin image" />
        <Input id="geocodeAutocomplete" type="text" placeholder="Enter Zip Code/City" onChange={getOptions} autocomplete="off" />
        <Options className="location-options" />
        <input type="hidden" name="healthShortTermEnrollOnline" value="yes" />
        <input type="hidden" name="medicareMAenrollonline" value="yes" />
        <input type="hidden" name="medicarePDPenrollonline" value="yes" />
        <input type="hidden" name="medicareSuppenrollonline" value="yes" />
        <input type="hidden" name="visionenrollonline" value="yes" />
        <input type="hidden" name="dentalenrollonline" value="yes" />
        <input type="hidden" id="zipCode" name="zip" value="" />
    </InputGroup>
  )
}

export default Autocomplete

export const Head = () => (
  <script type="module" src="https://cdn.jsdelivr.net/npm/@geocodeearth/autocomplete-element/dist/bundle.js"></script>
)