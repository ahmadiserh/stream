import { Button } from "@/components/Button";
import { useRouter } from 'expo-router';
import { Text } from "@/components/Text";
import { FontAwesome } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";
import { Stack } from "expo-router";
import TermsNotice from '@/components/TermsNotice';


export default function SignUpIndex() {
  const router  = useRouter();

  const handleSignUpWithGoggle = () => {}
  const handleSignUpWithFacebook = () => {}

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.container}>
        {/* Top section */}
        <View style={styles.topSection}>
          <Text style={styles.titleText}>Sign up for Stream</Text>
          <Text style={styles.subTitleText}>
            Create a profile, follow other accounts, connect with friends and more.
          </Text>
      
          {/* Email */}
          <Button
            onPress={() => router.push("./sign-up-email")} 
            style={styles.button}
          >
            <View style={styles.buttonContent}>
              <FontAwesome name="envelope" size={20} color="#FF9800" style={styles.icon} />
              <Text style={styles.buttonText}>Continue with Email</Text>
            </View>
          </Button>

          {/* Phone */}
          <Button 
            onPress={() => router.push("/sign-up-phone")}
            style={styles.button}
          >
            <View style={styles.buttonContent}>
              <FontAwesome name="phone" size={20} color="#4CAF50" style={styles.icon} />
              <Text style={styles.buttonText}>Continue with Phone</Text>
            </View>
          </Button>

          {/* Google */}
          <Button style={[styles.button, { backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#ddd' }]}>
            <View style={styles.buttonContent}>
              <FontAwesome name="google" size={20} color="#DB4437" style={styles.icon} />
              <Text style={[styles.buttonText, { color: '#000' }]}>Continue with Google</Text>
            </View>
          </Button>

          {/* Facebook */}
          <Button style={[styles.button, { backgroundColor: '#1877F2' }]}>
            <View style={styles.buttonContent}>
              <FontAwesome name="facebook" size={20} color="#fff" style={styles.icon} />
              <Text style={[styles.buttonText, { color: '#fff' }]}>Continue with Facebook</Text>
            </View>
          </Button>

          <Text style={styles.subTitleText}>
            Already have an account?{" "}
            <Pressable onPress={() => router.push("./login-index")}>
              <Text style={styles.linkText}>Login</Text>
            </Pressable>
          </Text>

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
    justifyContent: "space-between",
  },
  topSection: {
    alignItems: "center",
    marginTop: 90,
  },
  titleText: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  subTitleText: {
    textAlign: "center",
    fontSize: 14,
    marginTop: 8,
    marginBottom: 30,
    paddingHorizontal: 20,
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
});
