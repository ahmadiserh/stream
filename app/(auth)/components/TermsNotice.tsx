import { View, useColorScheme } from 'react-native';
import { Text } from '@/components/Text';
import { StyleSheet } from 'react-native';

export default function TermsNotice() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
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
        </Text>{' '}
        and confirm that you have read Stream's{' '}
        <Text onPress={() => alert('Privacy Policy clicked!')} style={styles.linkText}>
          Privacy Policy
        </Text>.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  linkText: {
    textDecorationLine: 'underline',
    color: '#007aff',
    fontWeight: '500',
  },
});
