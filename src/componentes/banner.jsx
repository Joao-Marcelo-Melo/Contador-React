import React, { Component } from "react";
import { LeftBox } from "../styles.js";
import banner from "../assents/Time management.gif"

class Banner extends Component {

    state = {
        img: banner
    }

    render() {
        return (
            <LeftBox>
                <img src={this.state.img} alt="" />
            </LeftBox>
        )
    }
}

export default Banner;