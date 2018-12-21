/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';


class HomeScreen extends Component{
    render() {
        return (
            <View style={styles.container}>
                <Button title='Go Back To Login Screen'
                        onPress={() => this.props.navigation.goBack()}/>
                <Button title='Pop To Top'
                        onPress={() => this.props.navigation.popToTop()}/>
            </View>
        );
    }
}
export default HomeScreen;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

});
