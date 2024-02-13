import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function ResultDetail({result}) {
  return (
    <View>
    {result.image_url && (
      <View style={{marginLeft:15}}>

      <Image
        style={{ width: 250, height: 120,borderRadius:8,marginBottom:5 }}
        source={{ uri: result.image_url }}
      />
      <Text style={{fontWeight:"bold"}}>{result.name}</Text>
      <Text>{result.rating} Yıldızlı Restaurant, {result.review_count} Değerlendirme</Text>

      </View>
  
      
    )}
    
  </View>
  )
}

const styles = StyleSheet.create({})