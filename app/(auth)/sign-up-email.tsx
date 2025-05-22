import { useState } from 'react';
import { View, TextInput, StyleSheet, useColorScheme, Pressable } from 'react-native';
import { Text } from '@/components/Text';
import { Stack } from 'expo-router';
import { Button } from '@/components/Button';

export default function EmailSignUp() {
  const [email, setEmail] = useState('');
  const colorScheme = useColorScheme(); // 👈 Detect dark or light mode

  const isDark = colorScheme === 'dark';

  return (
    <>
      <Stack.Screen 
        options={{ 
          title: '',
          headerBackTitleVisible: false,
          headerStyle: {
            height: 40,
            backgroundColor: isDark ? '#121212' : '#fff',
            elevation: 0,
            shadowOpacity: 0,
          },
        }} 
      />

      <View style={[styles.container, { backgroundColor: isDark ? '#121212' : '#fff' }]}>
        <Text style={{ 
            fontSize: 20,
            fontWeight: '700', 
            marginBottom: 20, 
            color: isDark ? '#fff' : '#000' 
            }}>

          Sign Up
        </Text>

        {/* Email Text Input */}
        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: isDark ? '#1e1e1e' : '#fff',
              color: isDark ? '#fff' : '#000',
              borderColor: isDark ? '#333' : '#ccc',
            },
          ]}
          placeholder="Enter your email"
          placeholderTextColor={isDark ? '#888' : '#999'}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />

        {/* Terms, Services and Policy */}
        <Text style={{ 
             textAlign: "center",
             fontSize: 12,
             marginTop: 15,
          }}>
            By continuing, you agree to Stream's{" "}
            <Pressable onPress={() => alert("Terms of Service clicked!")}>
            <Text style={styles.linkText}>Terms of Service</Text>
            </Pressable>{" "}
            and confirm that you have read Stream's{" "}
            <Pressable onPress={() => alert("Privacy Policy clicked!")}>
            <Text style={styles.linkText}>Privacy Policy</Text>
            </Pressable>.
        </Text>

        {/* send button */}
        <Button style={{ 
            marginTop: 20,
            borderRadius: 7
          }}>
            <Text style={{ 
                color: 'black',
                textAlign: 'center',
                fontWeight: 600
             }}>
                Send Code
            </Text>
        </Button>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    padding: 12,
    borderRadius: 6,
    fontSize: 16,
  },
  linkText: {
    textDecorationLine: "underline",
  },
});
