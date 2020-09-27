import React, {Component} from 'react';
import { Header, View, Button, Icon, Fab } from 'native-base';

export default class AddAssignmentButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }
    render() {
        return(
            <Fab
                active={this.state.active}
                direction="up"
                containerStyle={{}}
                style={{backgroundColor: '#333287'}}
                position="bottomRight"
                onPress={() => this.setState({ active: !this.state.active})}
            >
                <Icon name="add" />
                <Button style={{ backgroundColor: '#34A34F' }}>
                <Icon name="logo-whatsapp" />
                </Button>
                <Button style={{ backgroundColor: '#3B5998' }}>
                <Icon name="logo-facebook" />
                </Button>
                <Button disabled style={{ backgroundColor: '#DD5144' }}>
                <Icon name="mail" />
                </Button>
            </Fab>
        );
    }
}
