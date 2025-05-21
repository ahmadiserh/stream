import {  View, StyleSheet } from "react-native";
import { Text } from "@/components/Text";

export default function SignUpIndex() {

  return (
      <View 
        style={{ 
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text style={[styles.titleText]}>Stream Chat</Text>
      </View>
  );
  
}

const styles = StyleSheet.create({
    titleText: {
      textAlign: "center",
      fontSize: 32,
      fontWeight: "bold",
    },
})