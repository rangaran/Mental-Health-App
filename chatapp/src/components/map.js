
import React from 'react';
import Signout from './Signout';
import { useState } from "react";
import { InfoWindow, Marker,GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { geolocated } from "react-geolocated";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import final from './final.json'
import {keys} from './key'
import './map.css'

const containerStyle = {
  width: '2000px',
  height: '700px',
  
};



function MyComponent() {
  // const markers = final
  //console.log(final[0]["city"])
  
  function parser(cityname){
    //console.log(cityname.toLowerCase().replace(' ', ''))
    
    var data = [];
    for (var i=0; i < 7033; i++) 
    {
      //console.log(final[i]["city"])
      if((final[i]["city"]).includes(cityname.replace(' ', ''))||(final[i]["city"]).includes(cityname.toLowerCase().replace(' ', ''))){
        var feed = {id : i, latitude: Number(final[i]["latitude"]), longitude: Number(final[i]["longitude"]), facility_name: final[i]["facility_name"]};
        
        data.push(feed);
        
        console.log(data);
        console.log(final[i]["latitude"]);
        
      console.log(final[i]["city"]);
      console.log(final[i]["facility_name"]);
      }
       
      
  }
  setM(data) 
  //  alert(m[0]['latitude'])
  }

  
  const [m, setM] = useState(null)
 const marker2 = [
    {"index":"1","facility_name":"Advanced Facial & Nasal Surgery Centre","source_facility_type":"other","odhf_facility_type":"Ambulatory health care services","provider":"Canadian Institute for Health Information","unit":"","street_no":"","street_name":"","postal_code":"T5M 4G5","city":"edmonton","province":"ab","source_format_str_address":"","CSDname":"Edmonton","CSDuid":"","Pruid":"48","latitude":"","longitude":""}]
  const markers = [
    {
      id: 1,
      name: "Chicago, Illinois",
      position: { lat: 41.881832, lng: -87.623177 },
    },
    {
      id: 2,
      name: "Denver, Colorado",
      position: { lat: 39.739235, lng: -104.99025 },
    },
    {
      id: 3,
      name: "Los Angeles, California",
      position: { lat: 34.052235, lng: -118.243683 },
    },
    {
      id: 4,
      name: "New York, New York",
      position: { lat: 40.712776, lng: -74.005974 },
    },
  ];
    const center = {
        lat: -3.745,
        lng: -38.523,
      


      };
    const [lat, setLat] = useState(null);
const [lng, setLng] = useState(null);
const [status, setStatus] = useState(null);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: keys
  })
   let city
   let geocoder
   
  function codeLatLng(lat, lng) {
    geocoder = new window.google.maps.Geocoder();
    var latlng = new window.google.maps.LatLng(lat, lng);
    geocoder.geocode({'latLng': latlng}, function(results, status) {
      if (status == window.google.maps.GeocoderStatus.OK) {
      // console.log(results)
        if (results[1]) {
         //formatted address
         
         var x = results[0].formatted_address
         var y = x.split(',')
        alert("Services near " + x)
         parser(y[1])
         
        //find country name
             
      


        } else {
          alert("No results found");
        }
      } else {
        alert("Geocoder failed due to: " + status);
      }
    });
  }
  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        center.lat = position.coords.latitude
        center.lng = position.coords.longitude
        
        console.log(center)
        codeLatLng(center.lat,center.lng)

      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }
  
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);
    
    setMap(map)
  }, [])
  const [infoWindowID, setInfoWindowID] = useState("");
  const onUnmount = React.useCallback(function callback(map) {
    
    setMap(null)
  }, [])

  return isLoaded ? (
    <div  >
    <Signout/>
    {}
    
    <button onClick={getLocation}>Press me to get nearby services</button>
    
  {/* <h1>Coordinates</h1>
  <p>{status}</p>
   {/* {m && <p>{m[0]['latitude']}</p>}   */}
  {/* markers[0]["name"]} */}
  {/* {lat && <p>Latitude: {lat}</p>}
  {lng && <p>Longitude: {lng}</p> } */} 
  <h1></h1>
  {/* {m[0]['latitude']} */}
  {/* <GooglePlacesAutocomplete
                            placeholder='search'
                            minLength={2}
                            autoFocus={true}
                            returnKeyType={'default'}
                            fetchDetails={true}
                            query={{
                                
                                language: 'en', // language of the results
                                location: '20.8840744, -100.7607736',
                                radius: '15000', //15 km
                                components:'country:mx',
                                strictbounds: true,
                            }}
    /> */}
    
      <GoogleMap
        mapContainerStyle={containerStyle}
        
        center={{lat:lat,lng:lng}}
        zoom={14}
        onLoad={onLoad}
        onUnmount={onUnmount}
        
      > 
      <Marker position={{lat:lat,lng:lng}} icon={{
              // path: google.maps.SymbolPath.CIRCLE,
              url: (require('./map.png')),
              fillColor: '#EB00FF',
              scale: 7,
          }}>
      
        </Marker>
       {m &&
          m.map(({ id,latitude,longitude,facility_name }, index) => (
            
            <Marker  position={{lat:latitude,lng:longitude}} key={index}  onClick={() => {
              setInfoWindowID(index);
            }}>
              {infoWindowID === index && (
                <InfoWindow>
                  <div style={{'color':'black'}}>
                               {facility_name}
                            </div>
                </InfoWindow>
              )}
             
            </Marker>
          ))} 
          
{/* {markers &&
          markers.map(({"index","facility_name","source_facility_type","odhf_facility_type","provider","unit","street_no","street_name","postal_code","city","province","source_format_str_address","CSDname","CSDuid,"Pruid","latitude","longitude"}, index) => (
            <Marker position={position} key={index} />
          ))} */}

          
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
      </div>
  ) : <></>
}
export default MyComponent

// import React, { useEffect, useState } from "react";
// import {
//   GoogleMap,
//   Marker,
//   InfoWindow,
//   useJsApiLoader,
// } from "@react-google-maps/api";
// const MyComponent = () => {
//   const markers = [
//     {
//       id: 1,
//       name: "Chicago, Illinois",
//       position: { lat: 41.881832, lng: -87.623177 },
//     },
//     {
//       id: 2,
//       name: "Denver, Colorado",
//       position: { lat: 39.739235, lng: -104.99025 },
//     },
//     {
//       id: 3,
//       name: "Los Angeles, California",
//       position: { lat: 34.052235, lng: -118.243683 },
//     },
//     {
//       id: 4,
//       name: "New York, New York",
//       position: { lat: 40.712776, lng: -74.005974 },
//     },
//   ];
//   const mapStyles = {
//     height: "100vh",
//     width: "100%",
//   };

//   const defaultCenter = {
//     lat: 40.712776,
//     lng: -74.005974,
//   };
//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: 
//   });
//   if (!isLoaded) {
//     return <div>Google Maps is not loaded</div>;
//   }
//   return (
//     <>
//       <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
//         {markers &&
//           markers.map(({ id, name, position }, index) => (
//             <Marker position={position} key={index} />
//           ))}
//       </GoogleMap>
//     </>
//   );
// };

// export default MyComponent;