import React from 'react';
import {View,FlatList}  from 'react-native';
import Animal from './Animal';


export default function AnimalScreen(){
    const animals=[
        {name:"splash ", type:"cat", age:"23 years",location:"Madina",image:require("../assets/cat.png")},
        {name:"Hello ", type:"parrot", age:"23 years",location:"Adenta", image:require("../assets/pngfind.com-macaw-png-6235124.png")},
        {name:"Bully ",type:"dog", age:"23 years",location:"Nima", image:require("../assets/pngfind.com-pets-png-1902005.png")},
        {name:"Scopion ",type:"parrot", age:"23 years",location:"Ashaiman", image:require("../assets/pngfind.com-macaw-png-6235124.png")},
        
    ]
    return(
        <View>
<FlatList 
     data={animals}
       renderItem={({item})=>{
    return <Animal name={item.name} type={item.type} age={item.age} image={item.image} location={item.location} />
}}
keyExtractor={(item)=>item.location}
/>
        </View>
    )
}