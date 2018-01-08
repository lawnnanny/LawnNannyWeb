import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

export default class Navbar extends Component {
    state = {
        activeItem: 'test'
    }

    handleItemClick = (e, { name }) => {
        this.setState({activeItem: name});
    }

    render() {
        const { activeItem } = this.state;

        return (
            <Menu secondary>
                <Menu.Item
                    header
                >
                    MyRide
                </Menu.Item>

                <Menu.Item
                    name='reviews'
                    onClick={this.handleItemClick}
                >
                    Reviews
                </Menu.Item>

                <Menu.Item
                    name='upcomingEvents'
                    onClick={this.handleItemClick}
                >
                    Upcoming Events
                </Menu.Item>
            </Menu>
        );
    }
}