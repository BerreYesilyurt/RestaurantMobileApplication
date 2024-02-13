import { Image, StyleSheet, Text, View,FlatList } from 'react-native'
import React, { useEffect,useState } from 'react'
import yelp from '../api/yelp'
import Icon from "react-native-vector-icons/AntDesign"
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import EntypoIcon from "react-native-vector-icons/Entypo";



export default function ResultsShowScreen({route}) {
    const [result, setResult] = useState(null)
    const id=route.params.id

    const getResult=async(id)=>{
        const response=await yelp.get(`/${id}`) 
        console.log(response.data)
        setResult(response.data)
    }

    useEffect(()=>{
        getResult(id);
    },[])

    if(!result){
        return null
    }


  return (
    <View>
      <Text style={styles.title}>{result.name}</Text>
      <Text style={styles.phone}>{result.phone}</Text>
      

      {result.is_closed ? (
        <AntDesignIcon name="closecircleo" size={25} color={"#000000"} style={styles.icon}/>
      ) : (

        <EntypoIcon name="lock-open" size={25} color={"#000000"} style={styles.icon}/>

      )

      }
     

      <FlatList

      data={result.photos}
      renderItem={({item})=>{

        return <Image style={{height:180,width:380,margin:10,borderRadius:40}} source={{uri:item}}/>

      }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    title:{
        alignSelf:"center",
        fontSize:25,
        marginVertical:7

    },

    phone:{
        alignSelf:"center",
        fontSize:20

    },

    icon:{
        alignItems:"center",
        marginLeft:190,
        marginTop:10
    }
})