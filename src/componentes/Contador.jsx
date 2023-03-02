import React, { Component } from "react";

import { ContainerContador } from "../styles";
import { Tittle } from "../styles";

class Contador extends Component {

    state = {
        numero: 0
    }


    add = () => {
        this.setState({
            numero : this.state.numero < 10 ? this.state.numero + 1 : this.state.numero
        })
    }

    remove = () => {
        this.setState({
            numero : this.state.numero > 0 ? this.state.numero - 1 : this.state.numero
        })
    }

    render() {
        return (
            <ContainerContador>

                <Tittle>Seu Contador</Tittle>

                <div>
                    <h1>{this.state.numero}</h1>

                    <section>
                        <button onClick={this.add}>+</button>
                        <button onClick={this.remove}>-</button>
                    </section>
                </div>
            </ContainerContador>
        )
    }
}

export default Contador;