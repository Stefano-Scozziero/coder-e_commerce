import { StyleSheet, Text, View, Button, TextInput} from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../features/counter/counterSlice'

const Counter = () => {

    const count = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch()
    const [number, setNumber] = useState(0)
  return (
    <View>
      <Button title = 'Aumentar' onPress={() => dispatch(increment())}/>
      <Text>{count}</Text>
      <Button title = 'Disminuir' onPress={() => dispatch(decrement())}/>
      <TextInput onChangeText= {(t) => setNumber(parseInt(t))}/>
      <Button title='monto' onPress={() => dispatch(incrementByAmount(number))}/>
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({

})