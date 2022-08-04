import { View, Text,StyleSheet,Platform } from 'react-native'



const Title = ({children}) => {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  )
}

export default Title

const styles=StyleSheet.create({
    title:{
      fontFamily:'open-sans-bold',
        fontSize:24,
        fontWeight:'bold',
        color:'white',
        textAlign:'center',
        borderWidth:2,
        borderColor:'white',
        padding:12,
        maxWidth:'80%',
        width:300
    }
})