import { StyleSheet, Text, View,FlatList,TouchableOpacity} from 'react-native'
import React from 'react'
import ResultDetail from './ResultDetail'
import { useNavigation } from '@react-navigation/native'


export default function ResultLists({title,results}) {
  const navigation=useNavigation()
    console.log(results)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={results}
      renderItem={({item})=>{
        return(
            <TouchableOpacity onPress={()=>
              navigation.navigate("ResultsShow",{id:item.id})

            }>
                <ResultDetail result={item}/>

            </TouchableOpacity>
        )
      }}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginBottom:20,
    

  },
  title:{
    fontWeight:"bold",
    fontSize:20,
    marginBottom:10,
    marginLeft:15
  }
})