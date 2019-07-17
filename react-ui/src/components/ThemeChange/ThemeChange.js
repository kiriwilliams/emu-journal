import React, { Component } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import '../MainEntry/MainEntry.css';

class ThemeChange extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }


    themeWheat() {
        document.getElementById("theme").style.backgroundImage = "url('../../images/wheat.png')"
    }

    themeMemphis() {
        document.getElementById("theme").style.backgroundImage = "url('../../images/memphis-colorful.png')"
    }

    themeWeather(){
        document.getElementById ("theme").style.backgroundImage="url('../../images/weather.png')"
    }
    
    themeSakura(){
        document.getElementById ("theme").style.backgroundImage="url('../../images/sakura.png')"
    }

    render() {
        return (

            <Dropdown direction="right" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle variant="success" id="dropdown-basic">
                    Theme Change
            </DropdownToggle>

                <DropdownMenu className="bg-light">
                    <DropdownItem onClick={this.themeWheat}>Wheat theme</DropdownItem>
                    <DropdownItem onClick={this.themeMemphis}>Memphis theme</DropdownItem>
                    <DropdownItem onClick={this.themeWeather}>Weather theme</DropdownItem>
                    <DropdownItem onClick={this.themeSakura}>Sakura theme</DropdownItem>

                </DropdownMenu>
            </Dropdown>
        )
    }

}

export default ThemeChange;