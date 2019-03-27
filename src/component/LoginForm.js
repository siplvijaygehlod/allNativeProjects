import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = { email: '' };

    render() {
        return (
            <Card >
                <CardSection>
                    <Input
                        onChangeText={ email => this.setState({ email })}
                        value={this.state.email}
                        label="Email"
                        placeholder="user@mail.com"
                    />
                </CardSection>

                <CardSection>
                    <Input style={{ height: 20, width: 100 }} />
                </CardSection>                    
                
                <CardSection >
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}
export default LoginForm;
