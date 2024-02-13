import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultLists from '../components/ResultLists'


export default function SearchScreen() {
    const [searchApi,results]=useResults()

    const [term, setTerm] = useState('')
    console.log(results)

    const filterResultsByPrice=(price)=>{
        return results.filter((result)=>{
            return result.price===price
        })
    }
  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={()=>searchApi(term)}/>
      <ResultLists title="Ucuz Restaurantlar" results={filterResultsByPrice('₺')}/>
      <ResultLists title="Uygun Restaurantlar" results={filterResultsByPrice('₺₺')}/>
      <ResultLists title="Pahalı Restaurantlar" results={filterResultsByPrice('₺₺₺')}/>
    </View>
  )
}

const styles = StyleSheet.create({})