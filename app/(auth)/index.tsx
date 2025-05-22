import { View, StyleSheet, Pressable } from "react-native";
import { Text } from "@/components/Text";
import { Button } from "@/components/Button";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";

export default function SignUpIndex() {
  return (
    <View style={styles.container}>

      <View style={{ 
        flex: 1,
        justifyContent: 'center',
        padding: 10
       }} >

        <View style={{ flex: 0.1 }} />

        {/* Top section */}
        <View style={styles.topSection}>
          <Text style={styles.titleText}>Stream Chat</Text>
          <Text style={styles.subTitleText}>
            Simple, secure, and smart messaging
          </Text>
        </View>

        <View style={{ flex: 0.1 }} />

        {/* Continue with buttons */}
        <View style={styles.buttonsSection}>
          {/* Email */}
          <Button 
            style={styles.button}
            // onPress={router.push('/')}
            >
            <View style={styles.buttonContent}>
              <FontAwesome name="envelope" size={20} style={styles.icon} />
              <Text style={styles.buttonText}>Continue with Email</Text>
            </View>
          </Button>

          {/* Phone */}
          <Button style={styles.button}>
            <View style={styles.buttonContent}>
              <FontAwesome name="phone" size={20} style={styles.icon} />
              <Text style={styles.buttonText}>Continue with Phone</Text>
            </View>
          </Button>

          {/* Google */}
          <Button style={styles.button}>
            <View style={styles.buttonContent}>
              <FontAwesome name="google" size={20} style={styles.icon} />
              <Text style={styles.buttonText}>Continue with Google</Text>
            </View>
          </Button>

          {/* Facebook */}
          <Button style={styles.button}>
            <View style={styles.buttonContent}>
              <FontAwesome name="facebook" size={20} style={styles.icon} />
              <Text style={styles.buttonText}>Continue with Facebook</Text>
            </View>
          </Button>
        </View>

        <View style={{ flex: 0.1 }} />

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.subTitleText}> By continuing, you agree to Stream's{" "}
            
            <Pressable onPress={() => alert("Terms of Service clicked!")}>
              <Text style={styles.linkText}>Terms of Service</Text>
            </Pressable>{" "}and confirm that you have read Stream's{" "}

            <Pressable onPress={() => alert("Privacy Policy clicked!")}>
              <Text style={styles.linkText}>Privacy Policy</Text>
            </Pressable>.
          </Text>

          <View style={styles.divider} />

          <Text style={styles.subTitleText}>
            Already have an account?{" "}
            <Pressable onPress={() => alert("Login clicked!")}>
              <Text style={styles.linkText}>Login</Text>
            </Pressable>
          </Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    marginBottom: 52,
  },
  titleText: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
  },
  subTitleText: {
    textAlign: "center",
    fontSize: 14,
    marginTop: 8,
  },
  buttonsSection: {
    marginBottom: 50,
  },
  button: {
    alignSelf: "center",
    width: "90%",
    paddingVertical: 12,
    borderRadius: 8,
    marginVertical: 4,
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
    paddingVertical: 5,
    paddingHorizontal: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  linkText: {
    textDecorationLine: "underline",
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 8,
  },
});
