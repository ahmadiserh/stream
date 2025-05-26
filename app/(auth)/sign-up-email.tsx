import { useState, useRef } from 'react';
import { View, TextInput, StyleSheet, useColorScheme, Pressable, Animated, ActivityIndicator } from 'react-native';
import { Text } from '@/components/Text';
import { Stack, router} from 'expo-router';
import { Button } from '@/components/Button';

export default function EmailSignUp() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const errorOpacity = useRef(new Animated.Value(0)).current;

  const isValidEmail = (email: string): boolean => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const isValid = isValidEmail(email);

  const handleSend = () => {
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address');
      Animated.timing(errorOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
      return;
    }

    setError('');
    setLoading(true);

    // Simulate sending email
    setTimeout(() => {
      setLoading(false);
      console.log('Sign-up email sent:', email);
        router.push({
          pathname: '/(auth)/email-otp',
          params: { email: email}, // Assuming email is the next step
        });
    }, 2000);
  };

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
            marginBottom: 10, 
            color: isDark ? '#fff' : '#000' 
        }}>
          Sign Up
        </Text>

        {/* Email Input */}
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
          onChangeText={(text) => {
            setEmail(text);

            if (isValidEmail(text)) {
              setError('');
              Animated.timing(errorOpacity, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
              }).start();
            }
          }}
        />

        {error !== '' && (
          <Animated.View style={{ opacity: errorOpacity }}>
            <Text style={{ color: 'red', marginTop: 5, fontSize: 10 }}>{error}</Text>
          </Animated.View>
        )}

        <Text style={{ textAlign: "center", fontSize: 12, marginTop: 15, color: isDark ? '#aaa' : '#333' }}>
        {/* Terms and Policy */}
          By continuing, you agree to Stream's{" "}
          <Pressable onPress={() => alert("Terms of Service clicked!")}>
            <Text style={styles.linkText}>Terms of Service</Text>
          </Pressable>{" "}
          and confirm that you have read Stream's{" "}
          <Pressable onPress={() => alert("Privacy Policy clicked!")}>
            <Text style={styles.linkText}>Privacy Policy</Text>
          </Pressable>.
        </Text>

        {/* Send Button */}
        <Button
          style={{
            marginTop: 20,
            borderRadius: 7,
            opacity: isValid && !loading ? 1 : 0.5,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 12,
          }}
          disabled={!isValid || loading}
          onPress={handleSend}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#000" />
          ) : (
            <Text style={{ color: 'black', fontWeight: '600' }}>
              Send Code
            </Text>
          )}
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  input: {
    borderWidth: 1,
    padding: 12,
    borderRadius: 6,
    fontSize: 16,
  },
  linkText: {
    textDecorationLine: 'underline',
    color: '#007aff',
    fontWeight: '500',
  },
});
