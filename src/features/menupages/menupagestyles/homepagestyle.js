import { makeStyles } from "@material-ui/core";

const HomePageStyle = makeStyles((theme) => {
    return {
        root: {
            padding: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
              padding: theme.spacing(4),
            },
            [theme.breakpoints.up('md')]: {
              padding: theme.spacing(6),
            },
            [theme.breakpoints.up('lg')]: {
              padding: theme.spacing(8),
            },
          },
        banner: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundcolor: '#f5f5f5',
            padding: '20px'
        },
        leftblock:{
            flex: '1',
            marginRight: '20px'
        },
        rightblock:{
            flex: '1'
        },
        title: {
            color: '#75C685',
            fontFamily: 'GabtonMalgora',
            fontSize: '8rem'
        },
        subtitle: {
            color: '#ffffff',
            fontFamily: 'GabtonMalgora',
            fontSize: '2rem'
        },
        image:{
            width: '100%',
            height: 'auto',
            borderRadius:'0.5rem'
        },
        description:{
            fontFamily: 'PoppinsThin',
            fontSize: '1.5rem',
            color: 'white'
        },
        leadingButton: {
            backgroundColor: '#75C685',
            color: '#fff',
            border: 'none',
            borderRadius: '10pt',
            padding: '20px 32px',
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '1.5rem',
            marginTop: '2rem',
            fontFamily: "GabtonMalgora"
          },
          linktext:{
            textDecoration:'none'
          },
          menuItem: {
            fontFamily: 'GabtonMalgora',
            fontSize: '1.5rem',
            color: '#fff'
          },
    }
});
export default HomePageStyle;