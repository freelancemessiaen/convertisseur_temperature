import { useState } from "react";
import { s } from "./ButtonConvert.style";
import { Text, TouchableOpacity } from "react-native";

function handleClick() {
console.log("Appuyez");

}
export function ButtonConvert({onPress, unit}) {
    return (
    <TouchableOpacity style={s.button}>
        <Text style={s.text} onPress={onPress}>Convertir en {unit }</Text>
    </TouchableOpacity>
    )


}