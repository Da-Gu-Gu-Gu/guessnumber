import { View, FlatList,StyleSheet,Alert,useWindowDimensions } from 'react-native'
import Title from '../componetns/ui/Title'
import { useState,useEffect } from 'react'
import {Ionicons} from '@expo/vector-icons'
import NumberContainer from '../componetns/game/NumberContainer'
import PrimaryButton from '../componetns/ui/PrimaryButton'
import Card from '../componetns/ui/Card'
import InstructionText from '../componetns/ui/InstructionText'
import GuessLogItem from '../componetns/game/GuessLogItem'

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


const GameScreen = ({userNumber,onGameOver}) => {

    const initialGues=generateRandonBetween(
        1,
        100,
        userNumber)
    const [currentGuess,SetCurrentGuess]=useState(initialGues)

    const [guessRounds,setGuessRounds]=useState([initialGues])
    const {width,height}=useWindowDimensions()



    useEffect(()=>{
        if(currentGuess === userNumber){
            onGameOver(guessRounds.length)
        }
    },[currentGuess,userNumber,onGameOver])

    useEffect(()=>{
        minBoundary=1
        maxBoundary=100

    },[])

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
        setGuessRounds((x)=>[newRndNumber,...x])
    }

    const guessRoundsListLength=guessRounds.length

    let content=(
        <>
              
      <Card>
        <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
        <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
            <PrimaryButton onPress={()=>nextGuessHandler('lower')}>
                <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
            <PrimaryButton onPress={()=>nextGuessHandler('greater')}>
            <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
            </View>
        </View>
      </Card>
        </>
    )

    if(width>500){
        content=(
        <>
        <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
        <View style={styles.buttonsContainerWide}>
        <View style={styles.buttonContainer}>
            <PrimaryButton onPress={()=>nextGuessHandler('lower')}>
                <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
            </View>
            
        <NumberContainer>{currentGuess}</NumberContainer>
        <View style={styles.buttonContainer}>
            <PrimaryButton onPress={()=>nextGuessHandler('greater')}>
            <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
            </View>
        </View>
        </>
        )
    }

  return (
    <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        {content}
      <View style={styles.listContainer}>
            <FlatList 
            data={guessRounds}
            keyExtractor={(item)=>item}
            renderItem={(itemData)=><GuessLogItem 
            roundNumber={guessRoundsListLength-itemData.index}
            guess={itemData.item}
            />} 
            />
        </View>
    </View>
  )
}

export default GameScreen

const styles=StyleSheet.create({
    screen:{
        flex:1,
        padding:24, 
        alignItems:'center'
    },
    instructionText:{
        marginBottom:12
    },
    buttonsContainer:{
        flexDirection:'row'
    },
    buttonContainer:{
        flex:1
    },
    listContainer:{
        flex:1,
        padding:16
    },
    buttonsContainerWide:{
        flexDirection:'row',
        alignItems:'center'
    }

})