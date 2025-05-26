import { useEffect, useState } from 'react';
import { Button } from "@/components/Button";
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Text } from "@/components/Text";
import { Pressable, StyleSheet, TextInput, View, useColorScheme } from "react-native";
import { Stack } from "expo-router";

export default function phoneOtp() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const [otp, setOtp] = useState('');
  const { phone } = useLocalSearchParams();

  const [resendEnabled, setResendEnabled] = useState(false);
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setResendEnabled(true);
    }

    return () => clearInterval(interval);
  }, [timer]);

  const handleVerify = () => {
    if (otp.length !== 4) return;
    alert(`Verifying OTP: ${otp}`);
    // TODO: Verify OTP with backend
  };

  const handleLoginWithPassword = () => {
    router.push('/login');
  };

  const handleResendCode = () => {
    if (!resendEnabled) return;
    alert('Code resent!');
    setResendEnabled(false);
    setTimer(60);
    // TODO: Trigger resend code API
  };

  return (
    <>
      <Stack.Screen 
        options={{ 
          title: '',
          headerBackTitleVisible: true,
          headerStyle: {
            height: 40,
            backgroundColor: isDark ? '#121212' : '#fff',
            elevation: 0,
            shadowOpacity: 0,
          },
        }} 
      />

      <View style={[styles.container, { backgroundColor: isDark ? '#121212' : '#fff' }]}>
        <View>
          <Text style={{ fontSize: 18, fontWeight: "700", color: isDark ? '#fff' : '#000' }}>
            Enter 4 digits code
          </Text>
          <Text style={[styles.subTitleText, { color: isDark ? '#aaa' : '#333' }]}>
            Your code was sent to {phone} via text message or WhatsApp.
          </Text>

          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: isDark ? '#1e1e1e' : '#fff',
                color: isDark ? '#fff' : '#000',
                borderColor: isDark ? '#333' : '#ccc',
              },
            ]}
            placeholder="Enter the 4-digit code"
            placeholderTextColor={isDark ? '#888' : '#999'}
            keyboardType="phone-pad"
            autoCapitalize="none"
            autoCorrect={false}
            maxLength={4}
            value={otp}
            onChangeText={setOtp}
          />
        </View>

        {/* Button Section */}
        <View style={styles.buttonsSection}>
          <Button
            style={styles.button}
            onPress={handleVerify}
            disabled={otp.length !== 4}
          >
            <Text style={styles.buttonText}>Verify OTP</Text>
          </Button>

          {/* Footer Links */}
          <View style={styles.footer}>
            <Pressable onPress={handleLoginWithPassword}>
              <Text style={[styles.linkText, { color: '#007aff' }]}>Login with password</Text>
            </Pressable>

            <Pressable onPress={handleResendCode} disabled={!resendEnabled}>
              <Text style={[
                styles.linkText,
                { color: resendEnabled ? '#007aff' : '#999' }
              ]}>
                {resendEnabled ? 'Resend Code' : `Resend in ${timer}s`}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  subTitleText: {
    fontSize: 13,
    marginTop: 8,
    marginBottom: 15,
  },
  buttonsSection: {
    marginTop: 10,
  },
  button: {
    alignSelf: "center",
    borderRadius: 8,
    marginVertical: 5,
  },
  buttonText: {
    fontSize: 14,
    color: "black",
    fontWeight: "bold",
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    padding: 12,
    borderRadius: 6,
    fontSize: 16,
  },
  footer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  linkText: {
    textDecorationLine: "underline",
    fontSize: 13,
  },
});
