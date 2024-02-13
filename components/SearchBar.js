import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/EvilIcons"


export default function SearchBar({term,onTermChange,onTermSubmit}) {
  return (
    <View style={styles.background}>
      <Icon name="search" size={50} color={"#000000"} style={styles.search}/>
      <TextInput style={styles.input} placeholder='Ara' autoCapitalize="none"
      value={term}
      onChangeText={onTermChange}
      onEndEditing={onTermSubmit}/>
    </View>
  )
}

const styles = StyleSheet.create({
    background:{
        backgroundColor:"lightgray",
        height:50,
        flexDirection:"row",
        borderRadius:30,
        marginBottom:35,
        marginTop:3
    },

    search:{
        position:"absolute",
        right:10
    },
    input:{
        padding:15,
    }
})