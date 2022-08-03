import { View, Text,StyleSheet,Alert } from 'react-native'
import Title from '../componetns/ui/Title'
import { useState } from 'react'
import NumberContainer from '../componetns/game/NumberContainer'
import PrimaryButton from '../componetns/ui/PrimaryButton'

const generateRandonBetween=(min,max,exclude)=>{
    const rndNum=Math.floor(Math.random()*(max-min))+min
    if(rndNum===exclude){
        return generateRandonBetween(min,max,exclude)
    }else{
        return rndNum
    }
}

let minBoundary=1
let maxBoundary=100


const GameScreen = ({userNumber}) => {

    const initialGues=generateRandonBetween(minBoundary,maxBoundary,userNumber)
    const [currentGuess,SetCurrentGuess]=useState(initialGues)

    const nextGuessHandler=(direction)=>{ 
        if((direction ==="lower" && currentGuess < userNumber) ||(direction ==="greater" && currentGuess > userNumber)){
            Alert.alert("Don't lie!","You know that is wrong",
            [{text:"Sorry!",style:'cancel'}]
            )
            return;
        }
        
            if(direction==='lower'){
            maxBoundary=currentGuess
        }else{
            minBoundary=currentGuess+1;
        }
     
        const newRndNumber=generateRandonBetween(minBoundary,maxBoundary,currentGuess)
        SetCurrentGuess(newRndNumber)
    }


  return (
    <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        <View>
            <PrimaryButton onPress={()=>nextGuessHandler('lower')}>-</PrimaryButton>
            <PrimaryButton onPress={()=>nextGuessHandler('greater')}>+</PrimaryButton>
        </View>
      </View>
      <View>
        {/* <Text>LOG ROUNDS</Text> */}
        </View>
    </View>
  )
}

export default GameScreen

const styles=StyleSheet.create({
    screen:{
        flex:1,
        padding:24, 
    },

})