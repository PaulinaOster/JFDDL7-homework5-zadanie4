import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Fab from '@material-ui/core/Fab';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import styles from './styles';

const counter = 'counter';

class App extends React.Component {
    state = {
        number : Number(localStorage.getItem(counter)) || 0
    }

    modifyNumber = (change) => {
        let number;
        (change !== 0) ? number = (this.state.number + change) : number = 0;
        this.setState({number : number});
        localStorage.setItem(counter, number)
    }

    render() {
        return (
            <Paper
                style={styles.paper}
            >
                <Typography
                    align="center"
                    variant="h4"
                    style={styles.typography}
                >
                    <p>Counter</p>
                    <p>{this.state.number}</p>
                    <Fab
                        style={styles.button}
                        color="primary"
                        onClick={() => this.modifyNumber(1)}
                    >
                        <AddIcon />
                    </Fab>
                    <Fab
                        style={styles.button}
                        color="secondary"
                        onClick={() => this.modifyNumber(-1)}
                    >
                        <RemoveIcon />
                    </Fab>
                    <Fab
                        style={styles.button}
                        color="primary"
                        onClick={() => this.modifyNumber(5)}
                    >
                        +5
                    </Fab>
                    <Fab
                        style={styles.button}
                        color="secondary"
                        onClick={() => this.modifyNumber(-5)}
                    >
                        -5
                    </Fab>
                    <Fab
                        style={styles.button}
                        onClick={() => this.modifyNumber(0)}
                        variant="extended"
                    >
                        Reset
                    </Fab>
                </Typography>
            </Paper>
        )
    }
}

export default App;