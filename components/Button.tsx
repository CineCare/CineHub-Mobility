import { Pressable, StyleSheet, Text, View } from 'react-native';

export function Button({ label }:  Readonly<{label:string}>) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} >
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 'auto',
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    
  },
  button: {
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#000',
    fontSize: 16,
  },
});
