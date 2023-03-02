import React, { Component } from 'react';
import Banner from './componentes/banner.jsx';
import Contador from './componentes/Contador.jsx';

import { Box } from "./styles.js";

class app extends Component {
    render() {
        return (
            <Box>
                <Banner/>
                <Contador/>
            </Box>
        )
    }

}

export default app;

