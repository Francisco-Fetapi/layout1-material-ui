import React from 'react'
import {Backdrop} from '@material-ui/core'
import useStyles from './Styles'

function PanoDeFundo({open,children,onClose}) {
    const classes = useStyles();
    return (
    <Backdrop open={!!open} in={!!open} onClick={onClose} className={classes.backdrop}>
        {children}
      </Backdrop>
    )
}

export default PanoDeFundo
