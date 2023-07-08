import makeStyles from '@mui/styles/makeStyles';
import '../../App.css'


const PageHeaderStyle = makeStyles({
  root: {
    padding: '16px',
    '@media (min-width:600px)': {
      padding: '32px',
    },
    '@media (min-width:960px)': {
      padding: '48px',
    },
    '@media (min-width:1280px)': {
      padding: '64px',
    },
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '2px solid White',
    borderTop: '2px solid White',
    padding: '0.8rem 2rem',
    marginTop: '2rem',
    marginBottom: '2rem',
    '@media (max-width:780px)': {
      flexDirection: "column"
    }
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
    marginBottom: '0.7rem',
    '@media (max-width:780px)': {
      fontSize: '4rem',
    }
  },
  smallLogoText: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    fontSize: '2.8rem',
    fontFamily: 'PoppinsThin',
    color: 'White',
    '@media (max-width:780px)': {
      fontSize: '1.8rem',
    }
  },
  menu: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    '@media (max-width:780px)': {
      flexDirection: "column",
      gap: '0.8rem'
    }
  },
  linktext: {
    textDecoration: 'none'
  },
  menuItem: {
    fontFamily: 'GabtonMalgora',
    fontSize: '2rem',
    color: '#75C685',
    '@media (max-width:780px)': {
      fontSize: '1.5rem',
    }
  },
});

export default PageHeaderStyle;