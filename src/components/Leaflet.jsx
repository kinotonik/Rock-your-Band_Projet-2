import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import { useNavigate } from 'react-router-dom'
import './Leaflet.css'

export const Leaflet = ({
  name,
  image,
  id,
  location,
  experience,
  instrument,
  style,
  latitude,
  longitude
}) => {
  let navigate = useNavigate()
  // const position = [47.389509, 0.693421]

  return (
    <>
      <Marker key={id} position={[latitude, longitude]}>
        <Popup position={[latitude, longitude]}>
          <div className='pop_up-contain'>
            <>
              <img src={image} alt={name} />
              <h2>{`${name}`}</h2>
              <p>ð{`${location}`}</p>
              <p>ð¤ð»{` ${[style]}`}</p>
              <p>ð{`${experience}`}</p>
              <p>ð¶{`${instrument}`}</p>
            </>
            <button
              className='leaflet_btn__card'
              onClick={() => navigate(`/profilesdetails/${id}`)}
            >
              DÃ©tail
            </button>
          </div>
        </Popup>
      </Marker>
    </>
  )
}
