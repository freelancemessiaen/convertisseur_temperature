import { ImageBackground, Text, View } from "react-native";
import { s } from "./App.style";
import { InputTemperature } from "./components/InputTemperature/InputTemperature";
import { TemperatureDisplay } from "./components/TemperatureDisplay/TemperatureDisplay";
import { useEffect, useState } from "react";
import { DEFAULT_TEMPERATURE, UNITS, DEFAULT_UNIT } from "./constant";
import { ButtonConvert } from "./components/ButtonConvert/ButtonConvert";
import coldBackground from "./assets/cold.png";
import hotdBackground from "./assets/hot.png";
import {
  getOppositUnit,
  convertTemperatureTo,
  isIcetemperature,
} from "./services/temperature-service";
export default function App() {
  const hot = require("./assets/hot.png");
  const cold = require("./assets/cold.png");
  const [inpuValue, setInputValue] = useState(DEFAULT_TEMPERATURE);
  const [currentUnit, setcurrentUnit] = useState(DEFAULT_UNIT);
  const oppossiteUnit = getOppositUnit(currentUnit);
  const [currentBackground, setCurrentBackground] = useState();

  useEffect(() => {
    const temperatureAsFloat = Number.parseFloat(inpuValue);
    if (!isNaN(temperatureAsFloat)) {
      const isColdBackground = isIcetemperature(inpuValue, currentUnit);
      setCurrentBackground(isColdBackground ? coldBackground : hotdBackground);
    }
  }, [inpuValue]);

  function getConvertedtemperature() {
    const valueAsFloat = Number.parseFloat(inpuValue);
    return isNaN(valueAsFloat)
      ? ""
      : convertTemperatureTo(oppossiteUnit, valueAsFloat).toFixed(1);
  }

  return (
    <ImageBackground source={currentBackground} style={s.container}>
      <View style={s.workspace}>
        <View>
          <TemperatureDisplay
            value={getConvertedtemperature()}
            unit={oppossiteUnit}
          />
        </View>
        <InputTemperature
          onChangeText={setInputValue}
          defaultValue={DEFAULT_TEMPERATURE}
          unit={currentUnit}
        />
        <View>
          <ButtonConvert
            onPress={() => {
              setcurrentUnit(oppossiteUnit);
            }}
            unit={currentUnit}
          />
        </View>
      </View>
    </ImageBackground>
  );
}
