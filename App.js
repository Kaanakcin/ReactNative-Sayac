import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const[count ,setCount] = useState(0);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Button 
        title='Increase' 
        onPress={()=> {
          setCount((pre) => pre + 1 );
          }}
          touchSoundDisabled={true} 
          color={"red"} 
      />
      
      <Button
        title='Decrease' 
        onPress={()=> {
          setCount((prev) => prev - 1);
          }}
          touchSoundDisabled={true} 
          color={"blue"} 
      />

       <Text style={{ fontSize: 40 }}>{count}</Text>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
