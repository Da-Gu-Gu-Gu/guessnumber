import { StyleSheet,ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';

export default function App() {
  const [userNumber,setUserNumber]=useState()

  const pickedNumberHandler=(pickedNumber)=>{
    setUserNumber(pickedNumber)
  }

  let screen=<StartGameScreen onPickNumber={pickedNumberHandler}/>

  if(userNumber){
    screen=<GameScreen userNumber={userNumber}/>
  }

  return (
    <LinearGradient 
    colors={[Colors.primary700,Colors.accent500]}
    style={styles.rootScreen}>
        <ImageBackground 
        style={styles.rootScreen}
        resizeMode='cover'
        imageStyle={styles.backgroundImage}
        source={require('./assets/images/riho-kroll-m4sGYaHYN5o-unsplash.jpg')}>
          {screen}
        </ImageBackground>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen:{
    flex:1,
  },
  backgroundImage:{
    opacity:0.15,
  }
});
