/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @formats
 */

import React, { PropsWithChildren, useState } from 'react';
import {
  Image,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

// optional
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};


type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;
const Dice = ({ imageUrl }: DiceProps): JSX.Element => {
  return (
    <View>
      <Image source={imageUrl} style={styles.diceImage} />
    </View>
  );
};

function App(): JSX.Element {
  const [imageUrl, setImageUrl] = useState<ImageSourcePropType>(DiceOne)
  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
      case 1: {
        setImageUrl(DiceOne);
        break;
      }
      case 2: {
        setImageUrl(DiceTwo);
        break;
      }
      case 3: {
        setImageUrl(DiceThree);
        break;
      }
      case 4: {
        setImageUrl(DiceFour);
        break;
      }
      case 5: {
        setImageUrl(DiceFive);
        break;
      }
      case 6: {
        setImageUrl(DiceSix);
        break;
      }
      default: {
        setImageUrl(DiceOne);
        break;
      }
    }
    ReactNativeHapticFeedback.trigger("impactLight", options);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headingText}>App from feed</Text>
      <Dice imageUrl={imageUrl} />
      <TouchableOpacity onPress={rollDice} style={styles.btn}>
        <Text style={styles.btnText}>Roll the dice</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  headingText: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: "600",
  },
  btn: {
    backgroundColor: "#688eff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  btnText: {
    fontSize: 16,
    fontWeight: "500",
  },
  diceImage: {
    height: 200,
    width: 200
  }
});

export default App;
