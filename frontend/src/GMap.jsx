
import React from 'react';
import {GoogleMapLoader, GoogleMap, /*Marker*/} from "react-google-maps";
 
export default function SimpleMap (props) {
  return (
    <section style={{height: "100%"}}>
      <GoogleMapLoader
        containerElement={
          <div
            {...props.containerElementProps}
            style={{
              height: "100%",
            }}
          />
        }
        googleMapElement={
          <GoogleMap
            ref={(map) => console.log(map)}
            defaultZoom={12}
            defaultCenter={{ lat: 40.762951, lng: -73.980833 }}
            onClick={props.onMapClick}
          >
            {/*props.markers.map((marker, index) => {
              return (
                <Marker
                  {...marker}
                  onRightclick={() => props.onMarkerRightclick(index)} />
              );
            })*/}
          </GoogleMap>
        }
      />
    </section>
  );
}

