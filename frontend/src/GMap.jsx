
import React , { Component } from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";
 
export default class GMap extends Component {
  renderMarkers(){
    console.log(this.props.locations)
    if(this.props.locations) {
      return this.props.locations.map((marker) => {
        console.log('~~~~~~' + marker.coordinates.latitude)
        return (
          <Marker position={{ lat: marker.coordinates.latitude, lng: marker.coordinates.longitude }} />
        );
      })
    }  
  }

  render(){
    return (
      <section style={{height: "100%"}}>
        <GoogleMapLoader
          containerElement={
            <div
              {...this.props.containerElementProps}
              style={{
                height: "100%",
              }}
            />
          }
          googleMapElement={
            <GoogleMap
              // ref={(map) => console.log(map)}
              defaultZoom={12}
              defaultCenter={{ lat: 40.762951, lng: -73.980833 }}
              onClick={this.props.onMapClick}
            >
          {/*<Marker position={{lat: 40.762951, lng: -73.980833}}/>*/}
            {this.renderMarkers()}
            </GoogleMap>
          }
        />
      </section>
    );
  }
}

