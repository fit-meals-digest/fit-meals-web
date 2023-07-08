import makeStyles from '@mui/styles/makeStyles';

const HomePageStyle = makeStyles({
        root: {
          padding: '16px',
          '@media (min-width:600px)': {
            padding: 32,
          },
          '@media (min-width:960px)': {
            padding: '48px',
          },
          '@media (min-width:1280px)': {
            padding: '64px',
          },
          },
        banner: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundcolor: '#f5f5f5',
            padding: '20px',
            '@media (max-width:780px)': {
              flexDirection: "column"
            }
        },
        leftblock:{
            flex: '1',
            marginRight: '20px',
        },
        rightblock:{
            flex: '1'
        },
        title: {
            color: '#75C685',
            fontFamily: 'GabtonMalgora',
            fontSize: '8rem',
            '@media (max-width:780px)': {
              fontSize: "3rem"
            }
        },
        subtitle: {
            color: '#ffffff',
            fontFamily: 'GabtonMalgora',
            fontSize: '2rem',
            '@media (max-width:780px)': {
              fontSize: "1.2rem"
            }
        },
        image:{
            width: '100%',
            height: 'auto',
            borderRadius:'0.5rem'
        },
        description:{
            fontFamily: 'PoppinsThin',
            fontSize: '1.5rem',
            color: 'white',
            '@media (max-width:780px)': {
              fontSize: "0.8rem"
            }
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
            fontFamily: "GabtonMalgora",
            '@media (max-width:780px)': {
              marginBottom: '2rem',
              marginTop:'0.5rem',
              padding: '10px 16px',
            }
          },
          linktext:{
            textDecoration:'none'
          },
          learnMoreButton: {
            fontFamily: 'GabtonMalgora',
            fontSize: '1.5rem',
            color: '#fff',
            '@media (max-width:780px)': {
              fontSize: "1.0rem"
            }
          },
    });
export default HomePageStyle;