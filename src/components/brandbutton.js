import React from "react";
import { Button, withStyles } from "@material-ui/core";
import { amber, deepPurple } from "@material-ui/core/colors";
import clsx from 'clsx'

const styles = () => ({
    default:{
        borderRadius: 0,
        textTransform: 'none'
    },
    primary:{
        '&:hover':{
            backgroundColor: amber[500], //'#007bff',
            color: deepPurple[900] //'#fff'
        }
    }
})
const BrandButton = ({color, children}) =>{
    return(
        <Button variant="contained" color={color} className={clsx(styles.primary, styles.default)} disableElevation>
            {children}
        </Button>
    )
}

export default withStyles(styles) (BrandButton);