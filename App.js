import * as  React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class App extends React.Component {

  state = {
    imageUrl : 'http://clipart-library.com/images_k/male-silhouette-profile/male-silhouette-profile-12.png',
  }


  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({

          imageUrl: source

        });
      }
    });
  }


  render() {
  return (
    <View style={{flex:1,}}>
      <ImageBackground source={require('./Screens/assets/bg.jpg')} style={{flex:1, alignItems:'center', justifyContent:"center" }}>
        <View style={{ flex:1, width:"100%", alignItems:"center", backgroundColor:"rgba(0,0,0,0.4)", }} >

          <Text style={{ fontSize:44, color:"white", marginTop:"10%", paddingTop:5, textShadowColor: 'black',textShadowOffset: { width: 1, height: 4 },textShadowRadius: 5 }}>User Profile</Text>
          <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
          <View style={{ height:120, width:120, marginTop:"5%", backgroundColor:"white", borderRadius: 100, borderWidth:2, justifyContent:"center", alignItems:'center' }}>
            <Image 
              source={{uri: this.state.imageUrl}} 
              style={{ height: "80%", width: "80%"}} 
            />
          </View>
          </TouchableOpacity>
          <View style={{ marginTop:"9%", backgroundColor:"#EAFAF1", width:"80%", height: 50, borderRadius:18, alignItems:'center', justifyContent:"center" }} >
            <TextInput style={{width:"90%"}} placeholder="Username..." placeholderTextColor="black" />
          </View>
          <View style={{ marginTop:"6%", backgroundColor:"#EAFAF1", width:"80%", height: 50, borderRadius:18, alignItems:'center', justifyContent:"center" }} > 
          <TextInput style={{width:"90%"}} placeholder="Phone Number..." placeholderTextColor="black" />
          </View>
          <TouchableOpacity style={{marginTop:"9%", width:"80%"}}>
            <View style={{height:50,width:"100%",backgroundColor:"orange", borderRadius:20, justifyContent:"center", alignItems:"center"}}>
              <Text style={{color:"white", fontSize:20 }}>Done</Text>
            </View>
          </TouchableOpacity>
          
        </View>
      </ImageBackground>
    </View>
  );
  }
}

