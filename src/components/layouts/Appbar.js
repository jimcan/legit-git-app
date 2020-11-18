import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
} from '@material-ui/core'

export default props => (
    <AppBar position="static">
        <Toolbar variant='dense'>
            <Typography variant='h5'>
                Jimcan's App
            </Typography>
        </Toolbar>
    </AppBar>
)