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

    inc = () => {
        const number = this.state.number + 1;
        this.setState({number : number});
        localStorage.setItem(counter, number)
    }
    inc5 = () => {
        const number = this.state.number + 5;
        this.setState({number : number});
        localStorage.setItem(counter, number)
    }

    dec = () => {
        const number = this.state.number - 1;
        this.setState({number : number});
        localStorage.setItem(counter, number)
    }
    dec5 = () => {
        const number = this.state.number - 5;
        this.setState({number : number});
        localStorage.setItem(counter, number)
    }

    reset = () => {
        const number = 0;
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
                        onClick={this.inc}
                    >
                        <AddIcon />
                    </Fab>
                    <Fab
                        style={styles.button}
                        color="secondary"
                        onClick={this.dec}
                    >
                        <RemoveIcon />
                    </Fab>
                    <Fab
                        style={styles.button}
                        color="primary"
                        onClick={this.inc5}
                    >
                        +5
                    </Fab>
                    <Fab
                        style={styles.button}
                        color="secondary"
                        onClick={this.dec5}
                    >
                        -5
                    </Fab>
                    <Fab
                        style={styles.button}
                        onClick={this.reset}
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