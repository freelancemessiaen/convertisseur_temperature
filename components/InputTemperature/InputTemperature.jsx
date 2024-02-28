import { s } from "./InputTemperature.style"
import {  TextInput, Text,View } from "react-native"
export function InputTemperature({defaultValue, onChangeText, unit}) {
    return (
        <View style={s.container}>
        <TextInput style={s.input} placeholder="Tapez une température" 
        keyboardType="numeric"
        maxLength={4}
        defaultValue={defaultValue}
        onChangeText={onChangeText}
        />
        <Text style={s.unit}>{unit}</Text>
        </View>
    
    )
}