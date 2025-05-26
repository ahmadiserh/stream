import { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, useColorScheme, Pressable, ActivityIndicator } from 'react-native';
import { Text } from '@/components/Text';
import { Stack, router } from 'expo-router';
import { Button } from '@/components/Button';

export default function PhoneSignUp() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);

  // Format and validate
  const formatPhoneNumber = (input: string): string => {
    const trimmed = input.replace(/\D/g, '');
    if (trimmed.startsWith('0')) return '+234' + trimmed.slice(1);
    if (trimmed.startsWith('234')) return '+' + trimmed;
    if (trimmed.startsWith('+234')) return trimmed;
    return '+234' + trimmed;
  };

  const validatePhoneNumber = (input: string) => /^[789][01]\d{8}$/.test(input);

  useEffect(() => {
    setIsValid(validatePhoneNumber(phone));
  }, [phone]);

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
        <Text style={{
          fontSize: 25,
          fontWeight: '700',
          marginBottom: 5,
          color: isDark ? '#fff' : '#000',
        }}>
          Sign Up
        </Text>

        <Text style={{
          fontSize: 16,
          color: isDark ? '#fff' : '#000',
          marginBottom: 10,
        }}>
          Create a new account
        </Text>

        <View style={[styles.inputContainer, {
          backgroundColor: isDark ? '#1e1e1e' : '#fff',
          borderColor: isDark ? '#333' : '#ccc',
          borderWidth: 1,
        }]}>
          <Text style={[styles.prefix, { color: isDark ? '#fff' : '#000' }]}>+234</Text>

          <TextInput
            style={[styles.input, { color: isDark ? '#fff' : '#000' }]}
            placeholder="Enter phone number"
            placeholderTextColor={isDark ? '#888' : '#999'}
            keyboardType="phone-pad"
            autoCapitalize="none"
            value={phone}
            onChangeText={(text) => {
              setPhone(text.replace(/\D/g, ''));
              if (error) setError('');
            }}
            maxLength={10}
          />
        </View>

        {error && <Text style={{ color: 'red', marginTop: 5 }}>{error}</Text>}

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

        {/* Submit Button */}
        <Button
          disabled={!isValid || loading}
          style={{
            marginTop: 20,
            borderRadius: 7,
            opacity: isValid ? 1 : 0.5,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            if (!validatePhoneNumber(phone)) {
              setError('Please enter a valid Nigerian phone number');
              return;
            }

            setLoading(true); // Start loading

            const fullPhone = `+234${phone}`;

            setTimeout(() => {
              setLoading(false); // Optional: Stop loading right before navigation
              router.push({
                pathname: '/(auth)/phone-otp',
                params: { phone: fullPhone },
              });
            }, 1500); // 1.5 seconds delay
          }}
        >
          {loading ? (
            <ActivityIndicator size="small" color="black" />
          ) : (
            <Text
              style={{
                color: 'black',
                textAlign: 'center',
                fontWeight: '600',
              }}
            >
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
    paddingHorizontal: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 3,
    borderRadius: 6,
    marginTop: 10,
  },
  prefix: {
    fontSize: 16,
    fontWeight: '500',
    marginRight: 6,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  linkText: {
    textDecorationLine: 'underline',
    color: '#007aff',
  },
});
