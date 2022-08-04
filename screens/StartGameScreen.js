import { View, StyleSheet,TextInput,Alert,
    KeyboardAvoidingView,
    ScrollView,
    useWindowDimensions
} from 'react-native'
import PrimaryButton from '../componetns/ui/PrimaryButton'
import { useState } from 'react'
import Colors from '../constants/colors'
import Title from '../componetns/ui/Title'
import Card from '../componetns/ui/Card'
import InstructionText from '../componetns/ui/InstructionText'

const StartGameScreen = ({onPickNumber}) => {
    const [enteredNumber,setEnteredNumber]=useState('')

    const numberInputHandler=(enteredtext)=>{
        setEnteredNumber(enteredtext)
    }

    const resetInputHandler=()=>{
        setEnteredNumber('')
    }

    const {width,height}=useWindowDimensions()

    const confirmInputHandler=()=>{
        const chosenNumber=parseInt(enteredNumber)
        if(isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber>=99){
            Alert.alert('Invalid Number!',"Number has to be a number between 1 and 99.",
            [{text:'Okay',style:'destructive',onPress:resetInputHandler}]
            )
            return
        }

        onPickNumber(chosenNumber)
   
    }

    const marginTopDistance=height<380?30:100

  return (
    <ScrollView style={styles.screen}>
    <KeyboardAvoidingView style={styles.screen}
       behavior="padding"
    >
    <View style={[styles.rootContainer,{marginTop:marginTopDistance}]}>
        <Title >Guess My Number</Title>
   <Card>
        <InstructionText >Enter a Number</InstructionText>
        <TextInput 
        keyboardType='number-pad'
        autoCorrect={false} 
        autoCapitalize='none' 
        style={styles.numberInput} 
        maxLength={2}
        value={enteredNumber}
        onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
        <PrimaryButton 
        onPress={resetInputHandler}
        >Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
        </View>
        </Card>
    </View>
    </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default StartGameScreen



const styles=StyleSheet.create({
    screen:{
        flex:1,
    },
    rootContainer:{
        flex:1,
        // marginTop:marginTopDistance,
        alignItems:'center'
    },
   
 
    numberInput:{
        height:50,
        width:50,
        fontSize:32,
        borderBottomColor:Colors.accent500,
        borderBottomWidth:2,
        color:Colors.accent500,
        marginVertical:8,
        fontWeight:'bold',
    },
    buttonsContainer:{
        flexDirection:'row'
    },
    buttonContainer:{
        flex:1
    }
})