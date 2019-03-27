import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = { email: '', password: '', error: '' };

    onButtonPress() {
        const { email, password } = this.state;
        /* console.log(email);
        console.log(password);
        console.log(firebase.auth); */
                  
        firebase.auth.signInWithEmailAndPassword(email, password)
            .catch(() => {
                firebase.auth.createUserWithEmailAndPassword(email, password)
                    .catch(() => {
                        this.setState({ error: 'Authentication Failed' });
                    });
            }); 
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        onChangeText={ email => this.setState({ email })}
                        value={this.state.email}
                        label="Email"
                        placeholder="user@mail.com"
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder="password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        label="Password"
                    />
                </CardSection> 

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>                 
                
                <CardSection >
                    <Button onPress={this.onButtonPress.bind(this)} >
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};
export default LoginForm;
