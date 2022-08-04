import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

const Card = ({children}) => {
  return (
    <View style={styles.card}>
    {children}
    </View>
  )
}

const styles=StyleSheet.create({
    card:{
        justifyContent:'center',
        alignItems:'center',
        padding:16,
        marginTop:56,
        marginHorizontal:24,
        borderRadius:12,
        backgroundColor:Colors.primary800,
        elevation:8,
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowRadius:6,
        shadowOpacity:0.25
    },
})

export default Card