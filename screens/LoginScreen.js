/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';


 class LoginScreen extends Component{
     static navigationOptions = {
         header: null

     };
    render() {
        return (
            <View style={styles.container}>
                <Button title='Go To Home Screen'
                        onPress={() => this.props.navigation.navigate('Home')}/>
            </View>
        );
    }
}
export default LoginScreen;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

});
