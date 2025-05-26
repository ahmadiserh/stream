import { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, useColorScheme, Pressable } from 'react-native';
import { Text } from '@/components/Text';
import { Stack, router } from 'expo-router';
import { Button } from '@/components/Button';

export default function PhoneSignUp() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false);

  // ✅ Format the phone number to international format
  const formatPhoneNumber = (input: string): string => {
    const trimmed = input.replace(/\D/g, ''); // Remove non-digits
    if (trimmed.startsWith('0')) {
      return '+234' + trimmed.slice(1);
    } else if (trimmed.startsWith('234')) {
      return '+' + trimmed;
    } else if (trimmed.startsWith('+234')) {
      return trimmed;
    } else {
      return '+234' + trimmed;
    }
  };

  const validatePhoneNumber = (input: string) => {
    const pattern = /^[789][01]\d{8}$/; // Only accept valid Nigerian mobile numbers (e.g., 8012345678)
    return pattern.test(input);
  };  

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
          color: isDark ? '#fff' : '#000'
        }}>
          Welcome Back
        </Text>

        <Text style={{
          fontSize: 16,
          color: isDark ? '#fff' : '#000',
          marginBottom: 10,
        }}>
          Log in to your account
        </Text>

        <View
          style={[
            styles.inputContainer,
            {
              backgroundColor: isDark ? '#1e1e1e' : '#fff',
            },
          ]}
        >
          <Text
            style={[
              styles.prefix,
              {
                color: isDark ? '#fff' : '#000',
              },
            ]}
          >
            +234
          </Text>

          {/* Phone Number Input */}
          <TextInput
            style={[
              styles.input,
              {
                color: isDark ? '#fff' : '#000',
              },
            ]}
            placeholder="Enter phone number"
            placeholderTextColor={isDark ? '#888' : '#999'}
            keyboardType="phone-pad"
            autoCapitalize="none"
            value={phone}
            onChangeText={(text) => {
              setPhone(text.replace(/\D/g, '')); // remove non-digits
              if (error) setError('');
            }}
            maxLength={10}
          />
        </View>

        {error !== '' && (
          <Text style={{ color: 'red', marginTop: 5 }}>{error}</Text>
        )}

        <View style={{ marginTop: 15, paddingHorizontal: 5 }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              color: isDark ? '#aaa' : '#333',
              lineHeight: 18,
            }}
          >
            By continuing, you agree to Stream's{' '}
            <Text onPress={() => alert('Terms of Service clicked!')} style={styles.linkText}>
              Terms of Service
            </Text>
            {' '}and confirm that you have read Stream's{' '}
            <Text onPress={() => alert('Privacy Policy clicked!')} style={styles.linkText}>
              Privacy Policy
            </Text>
            .
          </Text>
        </View>

        {/* Send Code Button */}
        <Button
          disabled={!isValid}
          style={{
            marginTop: 20,
            borderRadius: 7,
            opacity: isValid ? 1 : 0.5,
          }}
          onPress={() => {
            if (!validatePhoneNumber(phone)) {
              setError('Please enter a valid Nigerian phone number');
              return;
            }

            const fullPhone = `+234${phone}`;
            router.push({
              pathname: '/(auth)/phone-otp',
              params: { phone: fullPhone },
            });
          }}
        >
        
          <Text style={{
            color: 'black',
            textAlign: 'center',
            fontWeight: '600',
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
    paddingHorizontal: 15,
  },
  input: {
    borderWidth: 1,
    padding: 12,
    borderRadius: 6,
    fontSize: 16,
  },
  linkText: {
    textDecorationLine: "underline",
    color: '#007aff',
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
     
});
