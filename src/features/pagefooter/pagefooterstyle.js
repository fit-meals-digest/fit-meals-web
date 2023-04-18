import { makeStyles } from "@material-ui/core";

const PageFooterStyle = makeStyles((theme) => {
    return {
        root: {
            backgroundColor: theme.palette.background.paper,
            color: 'White'
        },
        footer: {
            
          },
          footerContent:{
            borderTop: '1px solid #ccc',
            borderBottom: '1px solid #ccc',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px',
            marginTop: '1.5rem',
            marginBottom: '1rem',
          },
          copyright: {
            display: 'flex',
            justifyContent: 'right',
            alignItems: 'right',
            fontSize: '0.8rem',
            color: '#fff',
            fontFamily:'GabtonMalgora'
          },
          ownerInfo:{
            fontFamily: 'GabtonMalgora',
            textDecoration:'none',
            color:'#fff'
          },
          img:{
            width:'20%',
            height:'auto'
          },
          footerText:{
            fontFamily: 'GabtonMalgora',
            textDecoration:'none',
            color:'#fff'
          },
          footerTextTitle:{
            fontFamily: 'GabtonMalgora',
            textDecoration:'none',
            color:'#fff',
            fontSize: '1rem',
            marginBottom: "0.5rem",
          },
          storeOption:{
            textAlign:'center'
          }
    };
})

export default PageFooterStyle;