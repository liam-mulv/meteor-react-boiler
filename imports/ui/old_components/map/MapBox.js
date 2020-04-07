import React from 'react';
import ReactMapGL from 'react-map-gl';


// Styled Components
import {MapBoxWrapper} from './MapBox.sc'

export default class Map extends React.Component {
 
  state = {
    viewport: {
    	  height: 400,
    	  width: '100%',
      	latitude: -37.8019,
      	longitude: 144.9882,
      	zoom: 8
    }
  };
 
  render() {
    return (
    	<MapBoxWrapper>
    		<h1>{this.props.title}</h1>
		    <ReactMapGL
            scrollZoom={false}
		      	mapboxApiAccessToken="pk.eyJ1IjoibGlhbXNtIiwiYSI6ImNrNjV6eXN5MDFmNTUzbW1tMG5qMmw3eHUifQ.GwzhLhdoJXipzfhcrv25DA"
		        {...this.state.viewport}
		        onViewportChange={(viewport) => this.setState({viewport})}
		    />
	    </MapBoxWrapper>
    );
  }
}