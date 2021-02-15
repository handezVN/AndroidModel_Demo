import React from 'react'
import {ImageBackground, StyleSheet, Text, View } from 'react-native'
import StyleButton from '../components/button.js'
const CarItem = (props) => {
    const {name, tagline, taglineCTA,image} = props;

    return (
       
      <View style={styles.carContainer}>

        <ImageBackground source={image} style={styles.image}/>
        <View style={styles.titels}>
          <Text style={styles.titel}>{name}</Text>
          <Text style={styles.subtitel}>{tagline}{' '}<Text style={styles.subtitelCTA}>{taglineCTA}</Text></Text>
        </View>
        <View style={styles.ButtonContainer}>
          <StyleButton 
            type="primary" 
            content={"Customer Order"}
            onPress={()=>{
              console.warn("Custom Order was Pressed!");
            }}
          />
          <StyleButton 
            type="secondary" 
            content={"Existing Inventory"}
            onPress={()=>{
              console.warn("Existing Inventory was Pressed!");
            }}
          />
        </View>
        
      </View>
      
   
    )
}

export default CarItem;
const styles = StyleSheet.create({
    
      carContainer:{
        width:"100%",
        height:"100%",
      },
      titels:{
        marginTop:"30%",
        alignItems: "center",
      },
      titel:{
        fontSize: 40,
        fontWeight: '500',
      },
      subtitel:{
        fontSize:16,
        color: '#5c5e62',
      },
      image:{
        height:"100%",
        width:"100%",
        resizeMode:'cover',
        position:"absolute",
      },
      ButtonContainer:{
        position:'absolute',
        bottom:50,
        width:"100%",
      },
      subtitelCTA:{
        textDecorationLine:"underline",
      }
})
