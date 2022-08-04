import { View, Text,StyleSheet,Image } from 'react-native'
import PrimaryButton from '../componetns/ui/PrimaryButton'
import Title from '../componetns/ui/Title'
import Colors from '../constants/colors'


const GameOverScreen = ({roundsNumber,userNumber,onStartNewGame}) => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER</Title>
      <View style={styles.imageContainer}>
      <Image 
    style={styles.image}
      source={require('../assets/images/joshua-earle--87JyMb9ZfU-unsplash.jpg')}
      />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed
         <Text style={styles.highlight}>
          {" "}{roundsNumber}{" "} 
          </Text> 
          rounds to guess the number  
           <Text style={styles.highlight}>
           {" "}{userNumber}
           </Text>
          .</Text>
          <PrimaryButton onPress={onStartNewGame}>
            Start New Game
          </PrimaryButton>
    </View>
  )
}

const styles=StyleSheet.create({
  rootContainer:{
      flex:1,
      padding:24,
      justifyContent:'center',
      alignItems:'center'
  },  
    imageContainer:{
      borderRadius:150,
      width:300,
      height:300,
      borderWidth:3,
      borderColor:Colors.primary800,
      overflow:'hidden',
      margin:36
    },
    image:{
      width:'100%',
      height:'100%',
      resizeMode:'cover'
    },
    summaryText:{
      fontFamily:'open-sans',
      fontSize:23,
      textAlign:'center',
      marginBottom:24,
    },
    highlight:{
      fontFamily:'open-sans-bold',
      color:Colors.primary500
    }
})

export default GameOverScreen