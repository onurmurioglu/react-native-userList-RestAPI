import React from "react-native";
import {Text, View, Image, StyleSheet} from "react-native";

export const Item = ({ item }) => {

    return ( <View style= { style.card}>

        <Image style= {style.avatar} source= {{ uri: item.profile_image}}/>


    <View style= {{marginLeft: 15, justifyContent: 'center'}}>
        <Text style= {{ color: 'darkblue'}}>
 
             { item.display_name }

        </Text>

        <Text>{item.location}</Text>
    </View>
    
 </View>
    
   )
};

const style = StyleSheet.create({

   card: {
    
    flex:1, 
    padding: 10,
    paddingHorizonal: 15, 
    backgroundColor: 'white',
    flexDirection:'row', 
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
    
    },
    
    avatar: {
        width: 60, 
        height: 60, 
        borderRadius: 100,
        borderWidth: 2,
        borderColor: 'green'
    }

})


export default Item;