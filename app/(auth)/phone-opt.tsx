import { Button } from "@/components/Button";
import { useRouter } from 'expo-router';
import { Text } from "@/components/Text";
import { FontAwesome } from "@expo/vector-icons";
import { Pressable, StyleSheet, TextInput, View, useColorScheme } from "react-native";
import { Stack } from "expo-router";
// imort useState from  

export default function SignUpIndex() {
  const router  = useRouter();
  const colorScheme = useColorScheme(); // 👈 Detect dark or light mode
  const isDark = colorScheme === 'dark';
  // const [phone, setPhone] = useState('');
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.container}>
        {/* Top section */}
        <View style={styles.topSection}>
          <Text style={{ 
            fontSize: 18 ,
            fontWeight: 700
           }}>
            Enter 4 digits code
          </Text>
          <Text style={styles.subTitleText}>
            Your code was sent to +234 8066358744 via text message or whatsapp.
          </Text>

           /* Phone Number Text Input */}
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: isDark ? '#1e1e1e' : '#fff',
                color: isDark ? '#fff' : '#000',
                borderColor: isDark ? '#333' : '#ccc',
              },
            ]}
            placeholder="Enter your phone number"
            placeholderTextColor={isDark ? '#888' : '#999'}
            keyboardType="phone-number"
            autoCapitalize="none"
            autoCorrect={otp}
            value={otp}
            onChangeText={setOtp}
          />


        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.subTitleText}>
            By continuing, you agree to Stream's{" "}
            <Pressable onPress={() => alert("Terms of Service clicked!")}>
              <Text style={styles.linkText}>Terms of Service</Text>
            </Pressable>{" "}
            and confirm that you have read Stream's{" "}
            <Pressable onPress={() => alert("Privacy Policy clicked!")}>
              <Text style={styles.linkText}>Privacy Policy</Text>
            </Pressable>.
          </Text>
        </View>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  topSection: {
    marginTop: 40,
  },
  titleText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  subTitleText: {
    fontSize: 14,
    marginTop: 8,
    marginBottom: 30,
  },
  buttonsSection: {
    marginBottom: 32,
  },
  button: {
    alignSelf: "center",
    width: "85%",
    paddingVertical: 12,
    borderRadius: 6,
    marginVertical: 5,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 14,
    color: "black",
    fontWeight: "bold",
  },
  icon: {
    marginRight: 10,
  },
  footer: {
    width: "100%",
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 70, 
  },
  linkText: {
    textDecorationLine: "underline",
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#e0e0e0",
  },
    input: {
    borderWidth: 1,
    padding: 12,
    borderRadius: 6,
    fontSize: 16,
  },
});
