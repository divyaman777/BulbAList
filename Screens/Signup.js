import * as  React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground} from 'react-native';

import * as firebase from 'firebase' ;

export default class App extends React.Component {
  render() {
  return (
    <View style={{flex:1,}}>
      <ImageBackground source={require('./assets/bg.jpg')} style={{flex:1, alignItems:'center', justifyContent:"center" }}>
        <View style={{ flex:1, width:"100%", alignItems:"center", backgroundColor:"rgba(0,0,0,0.4)",  justifyContent:"center" }} >
          <Text style={{ fontSize:44, color:"white", marginTop:"15%", paddingTop:50, textShadowColor: 'black',textShadowOffset: { width: 1, height: 4 },textShadowRadius: 5 }}>BulbAList</Text>
          
          <View style={{ marginTop:"15%", backgroundColor:"#EAFAF1", width:"80%", height: 50, borderRadius:18, alignItems:'center', justifyContent:"center" }} >
            <TextInput style={{width:"90%"}} placeholder="Email..." placeholderTextColor="black" />
          </View>
          <View style={{ marginTop:"7%", backgroundColor:"#EAFAF1", width:"80%", height: 50, borderRadius:18, alignItems:'center', justifyContent:"center" }} > 
          <TextInput style={{width:"90%"}} placeholder="Password..." placeholderTextColor="black" />
          </View>
          <View style={{ marginTop:"7%", backgroundColor:"#EAFAF1", width:"80%", height: 50, borderRadius:18, alignItems:'center', justifyContent:"center" }} > 
          <TextInput style={{width:"90%"}} placeholder="Confirm Password..." placeholderTextColor="black" />
          </View>
          <TouchableOpacity style={{marginTop:"12%", width:"80%"}}>
            <View style={{height:50,width:"100%",backgroundColor:"orange", borderRadius:20, justifyContent:"center", alignItems:"center"}}>
              <Text style={{color:"white", fontSize:20 }}>Signup</Text>
            </View>
          </TouchableOpacity>
          <View style={{flexDirection:"row", marginTop:"7%", marginBottom:"10%", paddingBottom: 50 }}>
            <Text style={{color:"white"}}>Already have an account </Text><TouchableOpacity><Text style={{color:"red"}}> Login..!!</Text></TouchableOpacity>
            </View>
        </View>
      </ImageBackground>
    </View>
  );
  }
}

