import { makeStyles } from "@material-ui/core";
import '../../App.css'


const PageHeaderStyle = makeStyles((theme) => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '2px solid White',
    borderTop: '2px solid White',
    padding: '0.8rem 2rem',
    marginTop: '2rem',
    marginBottom: '2rem',
  },
  logo: {
    fontFamily: 'GabtonMalgora', // replace importedFont with the actual font name
    fontWeight: 'bold',
    fontSize: '6rem',
    color: 'White',
  },
  logocontainer: {
    position: 'relative',
    display: 'inline-block',
  },
  largeLogoText: {
    fontFamily: 'GabtonMalgora', // replace importedFont with the actual font name
    fontWeight: 'bold',
    fontSize: '6rem',
    color: 'White',
    marginBottom: '0.7rem'
  },
  smallLogoText: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    fontSize: '2.8rem',
    fontFamily: 'PoppinsThin',
    color: 'White',
  },
  menu: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
  },
  linktext:{
    textDecoration:'none'
  },
  menuItem: {
    fontFamily: 'GabtonMalgora',
    fontSize: '2rem',
    color: '#75C685'
  },
}));

export default PageHeaderStyle;