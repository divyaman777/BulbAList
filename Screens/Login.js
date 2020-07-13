import * as  React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground} from 'react-native';

import * as firebase from 'firebase' ;

export default class App extends React.Component {
  render() {
  return (
    <View style={{flex:1,}}>
      <ImageBackground source={require('./assets/bg.jpg')} style={{flex:1, alignItems:'center', justifyContent:"center" }}>
        <View style={{ flex: 1, alignItems:"center", backgroundColor:"rgba(0,0,0,0.4)" , width:'100%', justifyContent:"center" }} >
          <Text style={{ fontSize:44, color:"white", marginTop:"15%", paddingTop:25, textShadowColor: 'black',textShadowOffset: { width: 1, height: 4 },textShadowRadius: 5 }}>BulbAList</Text>
          
          <View style={{ marginTop:"18%", backgroundColor:"#EAFAF1", width:"80%", height: 50, borderRadius:18, alignItems:'center', justifyContent:"center" }} >
            <TextInput style={{width:"90%"}} placeholder="Email..." placeholderTextColor="black" />
          </View>
          <View style={{ marginTop:"10%", backgroundColor:"#EAFAF1", width:"80%", height: 50, borderRadius:18, alignItems:'center', justifyContent:"center" }} > 
          <TextInput style={{width:"90%"}} placeholder="Password..." placeholderTextColor="black" />
          </View>
          <TouchableOpacity style={{marginTop:"5%"}}><Text style={{color:"white"}}>Forgot Password</Text></TouchableOpacity>
          <TouchableOpacity style={{marginTop:"12%", width:"80%"}}>
            <View style={{height:50, backgroundColor:"orange", borderRadius:20, justifyContent:"center", alignItems:"center"}}>
              <Text style={{color:"white", fontSize:20 }}>Login</Text>
            </View>
          </TouchableOpacity>
          <View style={{flexDirection:"row", marginTop:"7%", marginBottom:"10%", paddingBottom: 25 }}>
            <Text style={{color:"white"}}>New User </Text><TouchableOpacity><Text style={{color:"red"}}> Signup..!!</Text></TouchableOpacity>
            </View>
        </View>
      </ImageBackground>
    </View>
  );
  }
}

