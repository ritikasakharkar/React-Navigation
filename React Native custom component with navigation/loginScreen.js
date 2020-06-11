import React, { Component } from "react";
import { StyleSheet, Text, View,TextInput,Button, Slider } from "react-native";
import Sliderimg from '../components/Sliderimg';
import MaterialButtonDark2 from '../components/MaterialButtonDark2';
 class loginScreen extends React.Component {
  render() {
    return (
   <View style={styles.container}>
            <View style= {styles.slider}>
                  <Sliderimg></Sliderimg>
            </View>
        <View style ={styles.loginView}>
              <Text style={styles.countryCode}>+91 -</Text>
              <TextInput
              style={styles.input}
              placeholder="Enter your phone number"
              placeholderTextColor="gray"
              keyboardType={'numeric'}
              onChangeText={(text)=>{
                  this.props.dispatch({type:'UPDATE_NO',text:text});
              }}
               ></TextInput>
            <MaterialButtonDark2
                style={styles.button}
                text = "Submit"
                color= '#33334d'
                onPress={() => this.props.navigation.navigate("OTP")}
               
                    // if(auth.mobile_no.toString().length==10){
                    //     this.props.navigation.navigate('Otp');
                    //     console.log({mobile_no: auth.mobile_no});
                        
                    //     axios.post(cred.url+'/api/customer/request_otp',{mobile_no: auth.mobile_no})
                    //     .catch(console.log('sent api request for sms'))
                    // }
                    // else{
                    //     alert("Please enter a valid mobile number");
                    // }
                  
                
            />
        </View>
    
    </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#33334d",
    
  },
  loginView:{
    backgroundColor: '#ffffff',
    width: "100%", 
    height: 80,  
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    borderRadius:1,
    borderColor:"#000000"
  },

countryCode:{
    fontWeight: 'bold',
},

input:{
    marginRight: 45,
    marginLeft:10,
},
slider:{
 flex:1,
 justifyContent: 'center', 
    alignItems: 'center',
   marginBottom:15,
    width:'150%',
    
 
 
},
button:{
  width:150,
  height:100
}
});

export default loginScreen;