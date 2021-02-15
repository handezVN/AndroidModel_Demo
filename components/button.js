import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const StyleButton = (props) => {

   

    const {type, onPress,content} = props;
    const background = type === 'primary' ? 'black' : 'white';
    const textcolor = type === 'primary' ?'white' : 'black';
    
    return (
        <View style={styles.container}>
            <Pressable style={[styles.button , {backgroundColor: background}]}
                
                onPress={()=>onPress()}
                >
                <Text style={[styles.text, {color: textcolor}]}>{content}</Text>
            </Pressable>
            
        </View>
    )
};


const styles = StyleSheet.create({
    container:{
        width:"100%",
        padding:10,
    },
    button:{
       
        height:40,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:20,
    },
    text:{
        fontSize:12,
        fontWeight:'500',
        textTransform:'uppercase',
    },
})
export default StyleButton;