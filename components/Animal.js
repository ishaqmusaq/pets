import React from 'react';
import {StyleSheet,View,Text,Image} from 'react-native';
import {EvilIcons} from "@expo/vector-icons";

export default function Animal({name,type,age,location,image}) {
    return(
        <View style={styles.container}>
<Image source={image} style={styles.imageContainer}/>
       <View style={styles.infoContainer}>
           <Text style={styles.name} numberOfLines={1}> {name}</Text>
           <Text style={styles.infoDetails}>{type}</Text>
           <Text style={styles.infoDetails}>{age}</Text>
    <Text style={styles.infoDetails}>  <EvilIcons name="location"  style={styles.icon} />{location}</Text>


</View>


</View>

    )
} 

const styles=StyleSheet.create({
    container:{
        flexDirection:"row",
marginTop:50,
alignItem:"center",
marginHorizontal:40,
    },
    imageContainer:{
        width:170,
        height:190,
        borderRadius:10,
    },
    infoContainer:{
        
        marginVertical:20,
        justifyContent:"flex-start",
        borderBottomRightRadius:10,
        borderTopRightRadius:10,
        
    },
    name:{
        fontWeight:"bold",
        fontSize:17,
        color:"pink",

    },
    infoDetails:{
        marginHorizontal:10,
        color:"#BEB8C7",
        fontSize:12,
        marginBottom:3,
    },
    icon:{
       size:15,
       color:'#5100ad' ,
       alignSelf:"flex-start"
    }
    
})