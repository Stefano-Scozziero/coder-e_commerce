import { StyleSheet, FlatList, View, Text } from 'react-native'
import OrderItem from '../components/presentational/OrderItem'
import { useSelector } from 'react-redux'
import { useGetOrdersQuery } from '../app/services/orders'
import { OrientationContext } from '../utils/globals/context'
import { useContext, useEffect, useState } from 'react'
import LoadingSpinner from '../components/presentational/LoadingSpinner'
import Error from '../components/presentational/Error'

const Orders = ({navigation}) => {
  const portrait = useContext(OrientationContext)
  const localId = useSelector((state) => state.auth.localId)
  const {data, isError, error, isSuccess} = useGetOrdersQuery(localId)
  const [info, setInfo] = useState(true)
  const [loading, setLoading] = useState(true)
  const [errorMessage, seterrorMessage] = useState("")

 

  useEffect(()=> {
    if(isSuccess && data.length === 0) setInfo(false)
    if(isSuccess && data) setLoading(false)
    if(isError && error) seterrorMessage(error.error)
  }, [data, isSuccess, isError, error])

  if(!info) return <View style={[styles.containerText, !portrait && styles.containerTextLandScape]}><Text style={{fontSize:20}}>No hay órdenes</Text></View>
  if(loading) return <LoadingSpinner/>
  if(errorMessage) return <Error message="¡Ups! Algo salió mal." textButton="Volver" onRetry={()=>navigation.goBack()}/>


  return (
    <View style={[styles.flatList, !portrait && styles.flatListLandscape]}>
      <FlatList
        data={data}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=> <OrderItem order={item} portrait={portrait}/>}
      />
    </View>
      
  )
}

export default Orders

const styles = StyleSheet.create({
  
    flatList: {
        height: '82%',
    },
    flatListLandscape: {
      height: '65%'
    },
    containerText:{
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%'
    },
    containerTextLandScape:{
        justifyContent:'center',
        alignItems: 'center',
    }
})