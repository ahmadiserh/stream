import { useState, useRef } from 'react';
import { View, TextInput, StyleSheet, useColorScheme, Pressable, Animated, ActivityIndicator } from 'react-native';
import { Text } from '@/components/Text';
import { Stack } from 'expo-router';
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

    // Simulate a request delay
    setTimeout(() => {
      setLoading(false);
      console.log('Email sent:', email);
      // Navigate to next screen here
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
            fontSize: 25,
            fontWeight: '700', 
            marginBottom: 5, 
            color: isDark ? '#fff' : '#000' 
            }}>

           Welcome Back
        </Text>
        <Text
          style={{ 
            fontSize: 16,
            color: isDark ? '#fff' : '#000',
             marginBottom: 15,  
           }}
          >
            Log in to your account
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

        {/* Terms, Services and Policy */}
        <View style={{ marginTop: 10, paddingHorizontal: 5 }}>
          <Text style={{
            textAlign: 'center',
            fontSize: 12,
            color: isDark ? '#aaa' : '#333',
            lineHeight: 18,
          }}>
            By continuing, you agree to Stream's{' '}
            <Text onPress={() => alert("Terms of Service clicked!")} style={styles.linkText}>
              Terms of Service
            </Text>{' '}
            and confirm that you have read Stream's{' '}
            <Text onPress={() => alert("Privacy Policy clicked!")} style={styles.linkText}>
              Privacy Policy
            </Text>.
          </Text>
        </View>

        {/* send button */}
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
    borderColor: '#ccc', // default, will override dynamically
  },
  linkText: {
    textDecorationLine: 'underline',
    color: '#007aff',
    fontWeight: '500',
  },  
});
