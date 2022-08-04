import { StyleSheet,ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen'
import Colors from './constants/colors';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [userNumber,setUserNumber]=useState()
  const [gameIsOver,setGameIsOver]=useState(true)
  const [guessRounds,setGuessRounds]=useState(0)

 const [fontsLoaded]= useFonts({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  })

  if(!fontsLoaded){
    return <AppLoading />
  }

  const pickedNumberHandler=(pickedNumber)=>{
    setUserNumber(pickedNumber)
    setGameIsOver(false)
  }

  const gameOverHandler=(numberOfRounds)=>{
    setGameIsOver(true)
    setGuessRounds(numberOfRounds)
  }

  const startNewGame=()=>{
      setUserNumber(null)
      setGuessRounds(0)
  }

  let screen=<StartGameScreen onPickNumber={pickedNumberHandler}/>

  if(userNumber){
    screen=<GameScreen
    userNumber={userNumber} 
    onGameOver={gameOverHandler}
    />
  }

  if(gameIsOver && userNumber){
    screen=<GameOverScreen 
      userNumber={userNumber}
      roundsNumber={guessRounds}
      onStartNewGame={startNewGame}
    />
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
