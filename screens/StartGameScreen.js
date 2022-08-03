import { View, StyleSheet,Text,TextInput,Alert } from 'react-native'
import PrimaryButton from '../componetns/ui/PrimaryButton'
import { useState } from 'react'
import Colors from '../constants/colors'

const StartGameScreen = ({onPickNumber}) => {
    const [enteredNumber,setEnteredNumber]=useState('')

    const numberInputHandler=(enteredtext)=>{
        setEnteredNumber(enteredtext)
    }

    const resetInputHandler=()=>{
        setEnteredNumber('')
    }

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

  return (
    <View style={styles.inputContianer}>
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
    </View>
  )
}

export default StartGameScreen

const styles=StyleSheet.create({
    inputContianer:{
        justifyContent:'center',
        alignItems:'center',
        padding:16,
        marginTop:100,
        marginHorizontal:24,
        borderRadius:12,
        backgroundColor:Colors.primary800,
        elevation:8,
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowRadius:6,
        shadowOpacity:0.25
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