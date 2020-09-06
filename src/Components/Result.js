import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const LotsOfGreetings = () => {
  return (
    <View style={[styles.center, {top : 50 , bottom :40}]}>
      
      <View style={{ margin :40 ,padding : 40 , backgroundColor : 'transparent' , width : '80%' , justifyContent :'center', alignItems :'center' , borderRadius : 10, borderWidth : 1, borderColor : 'gray'}}>
      <LinearGradient
        start={{x: 0.5, y: 0.5 }}
        end={{x: 1, y: 1 }}
        locations={[0, 1]}
        colors={['#FF9DB8', '#FAFAFA']} 
        style ={{ 
            paddingHorizontal:20,
            marginLeft: 4,
            position :'absolute',
            top: -15,
            left :5,
            borderRadius: 5 }}>
         <Text style={{
            fontSize: 10,
            textAlign: 'center',
            margin: 5,
            color: '#ffffff',
            backgroundColor: 'transparent',
          }}>Sign in with Facebook</Text>

        
      </LinearGradient>
      <Text style={{ padding : 10 }}>11111</Text>
      <Text style={{ padding : 10 }}>11111</Text>
      <Text style={{ padding : 10 }}>11111</Text>
      <Text style={{ padding : 10 }}>11111</Text>
      <Text style={{ padding : 10 }}>11111</Text>
    </View>
    </View>
  );
};

// Later on in your styles..
var styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default LotsOfGreetings;
