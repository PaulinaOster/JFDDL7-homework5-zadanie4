import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Fab from '@material-ui/core/Fab';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class App extends React.Component {
    state = {
        number: this.props.number
    }

    inc = () => this.setState({ number: this.state.number + 1 })

    dec = () => this.setState({ number: this.state.number - 1 })

    reset = () => this.setState({ number: this.props.number})

    render() {
        return (
            <Paper
                style={{
                    width: '50%',
                    margin: '10px auto',
                    backgroundColor: 'lightblue'
                }}
            >
                <Typography
                    align="center"
                    variant="h4"
                    style={{
                        padding: '20px'
                    }}
                >
                    <p>Counter</p>
                    <p>{this.state.number}</p>
                    <Fab
                        color="primary"
                        onClick={this.inc}
                    >
                        <AddIcon />
                    </Fab>
                    <Fab
                        color="secondary"
                        onClick={this.dec}
                    >
                        <RemoveIcon />
                    </Fab>
                    <Fab
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

App.defaultProps = {
    number: 0
}

export default App;