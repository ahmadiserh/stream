import { useState, useEffect } from 'react';
import { Button } from "@/components/Button";
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Text } from "@/components/Text";
import { Pressable, StyleSheet, TextInput, View, useColorScheme, Alert } from "react-native";
import { Stack } from "expo-router";

export default function EmailOtp() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const [otp, setOtp] = useState('');
  const { email } = useLocalSearchParams();

  // Validate OTP: must be 4 digits
  const isValidOtp = /^\d{4}$/.test(otp);

  const handleSubmit = () => {
    if (!isValidOtp) {
      Alert.alert('Invalid OTP', 'Please enter a valid 4-digit code.');
      return;
    }
    // Proceed with OTP verification or navigation
    Alert.alert('Success', 'OTP verified!');

    // Example: navigate to next screen
    // router.push('/next-screen');
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

      <View style={styles.container}>
        {/* Top section */}
        <View style={styles.topSection}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}>
            Enter 4 digits code
          </Text>
          <Text style={[styles.subTitleText, { color: isDark ? '#ccc' : '#333' }]}>
            Your code was sent to {email}
          </Text>

          {/* OTP Input */}
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
            keyboardType="number-pad"
            maxLength={4}
            autoCapitalize="none"
            autoCorrect={false}
            value={otp}
            onChangeText={setOtp}
          />

          <Button
            disabled={!isValidOtp}
            style={{
              marginTop: 20,
              opacity: isValidOtp ? 1 : 0.5,
              borderRadius: 8,
            }}
            onPress={handleSubmit}
          >
            Verify OTP
          </Button>
        </View>

        {/* Footer */}
        <View style={{ marginTop: 15, paddingHorizontal: 5 }}>
          <Text style={{
            textAlign: 'center',
            fontSize: 12,
            color: isDark ? '#aaa' : '#333',
            lineHeight: 18,
          }}>
            By continuing, you agree to Stream's{' '}
            <Text onPress={() => alert('Terms of Service clicked!')} style={styles.linkText}>
              Terms of Service
            </Text>{' '}
            and confirm that you have read Stream's{' '}
            <Text onPress={() => alert('Privacy Policy clicked!')} style={styles.linkText}>
              Privacy Policy
            </Text>.
          </Text>
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
  topSection: {
    // marginTop: 40,
  },
  subTitleText: {
    fontSize: 13,
    marginTop: 8,
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    padding: 12,
    borderRadius: 6,
    fontSize: 16,
  },
  linkText: {
    textDecorationLine: "underline",
    color: '#1E90FF',
  },
});
