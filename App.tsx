import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { defaultZoom } from "./config";
import MapView, { Marker } from "react-native-maps";

const PinMarker = (props) => {


  const [containerStyle, setContainerStyle] = useState({
    width: 100,
    height: 100,
  });

  
  const [coordinates, setCoordinates] = React.useState({
	latitude:0,
	longitude: 0
});
const [isLoading, setIsLoading] = React.useState(false);

  const onRegionChange = (region) => {
	const newLat = region.latitude;
	const newLng = region.longitude;
	setCoordinates({
		latitude: newLat,
		longitude: newLng,
	});
};




const onLayout = (e) => {
  const {width, height} = e.nativeEvent.layout;
  setContainerStyle({
    width: width,
    height: height,
  });
};




  return (
	<>
	{isLoading ? <Text>Loading...</Text> :
  <View style={{height: "100%", width: "100%"}} onLayout={onLayout}>
      <MapView
	  style={containerStyle}
        initialRegion={{
          latitude:  0,
          longitude:  0,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
		onRegionChange={(region) => {
		 onRegionChange(region);
		}}
		onMapReady={() => {
			setIsLoading(false);
		}}
    mapType={props.mapType || "standard"}
	>
	<Marker
		coordinate={{
			latitude: coordinates.latitude,
			longitude: coordinates.longitude,
		}}
	/>
	</MapView>
  </View>
	}
	
	</>
  ); 
};



export default PinMarker;
