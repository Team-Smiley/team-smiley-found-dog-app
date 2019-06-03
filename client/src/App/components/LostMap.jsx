import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react'
import { Typography, Paper } from '@material-ui/core'
// const GOOGLE_API = 


const MarkersList = props => {
  const { locations, markerProps } = props;
  return (
    <span>
      {locations.map((location, i) => {
        return (
          <Marker
            key={i}
            {...markerProps}
            position={{ lat: location.lat(), lng: location.lng() }}
            onClick={props.clickFunction}
            title={'TylerHouse'}
            position={{ lat: 29.933092, lng: -90.1325993 }}
            name={'TylerHouse'}
          />
        );
      })}
    </span>
  );
};



class LostMap extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      locations: [],
    }
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    // this.onMapClick = this.onMapClick.bind(this);
    // this.generateMarker = this.generateMarker.bind(this);
    this.handleMapClick = this.handleMapClick.bind(this);

  }

  // generateMarker(

  // )
  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }


  // onMapClick(google) {
  //   console.log(google.map, 'google');
  //   if (this.state.showingInfoWindow) {
  //     this.setState({
  //       showingInfoWindow: false,
  //       activeMarker: null
  //     });
  //   }
  //   console.log(this.generateMarker);
  // }
  handleMapClick(ref, map, ev) {
    const location = ev.latLng;
    this.setState(prevState => ({
      locations: [...prevState.locations, location]
    }));
    map.panTo(location);
  };
  generateMarker(){
    return (
    <Marker
        onClick={this.onMarkerClick}
        title={'TylerHouse'}
        position={{ lat: 29.933092, lng: -90.1325993 }}
        name={'TylerHouse'}
      />
    )
  }

  render() {
    const style = {
      width: '500px',
      height: '500px',
    }
    return (
      <Map
        item
        xs={15}
        style={style}
        google={this.props.google}
        onClick={this.handleMapClick}
        zoom={14}
        initialCenter={{ lat: 29.951065, lng: -90.071533 }}
      >
        <MarkersList
          locations={this.state.locations}
          clickFunction={this.onMarkerClick}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <Paper>
            <Typography
              variant='h6'
              component='h4'
            >
              Tyler's House
            </Typography>
            <Typography
              component='p'
            >
              7403 Prytania St, New Orleans, LA 70118 <br />
              225-245
            </Typography>
          </Paper>
        </InfoWindow>
        
        {/* 2nd marker  */}
        <Marker
          onClick={this.onMarkerClick}
          title={'SamBitchHouse'}
          position={{ lat: 29.923932, lng: -90.1258465 }}
          name={'SamBitchHouse'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <Paper>
            <Typography
              variant='h6'
              component='h4'
            >
              Sam's Bitch Ass 
            </Typography>
            <Typography
              component='p'
            >
              6317 Magazine St, New Orleans, lA 70118 <br />
              302-293-8627
            </Typography>
          </Paper>
        </InfoWindow>

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (GOOGLE_API)
})(LostMap)