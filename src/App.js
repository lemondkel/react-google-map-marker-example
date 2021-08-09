import './App.css';
import GoogleMapReact from 'google-map-react';
import React from "react";

function App() {
	const AnyReactComponent = ({text}) => <div className={"marker"}>{text}</div>;
	const defaultProps = {
		center: {
			lat: 59.95,
			lng: 30.33
		},
		zoom: 11
	};

	return (
		<div style={{height: '100vh', width: '100%'}}>
			<GoogleMapReact
				bootstrapURLKeys={{key: ""}}
				defaultCenter={defaultProps.center}
				defaultZoom={defaultProps.zoom}
			>
				<AnyReactComponent
					lat={59.955413}
					lng={30.337844}
					text="My Marker"
				/>
				<AnyReactComponent
					lat={59.955413}
					lng={30.437844}
					text="My Marker2"
				/>
			</GoogleMapReact>
		</div>
	);
}

export default App;
