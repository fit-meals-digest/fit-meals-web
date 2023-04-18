import { makeStyles } from "@material-ui/core";

const PageFooterStyle = makeStyles((theme) => {
    return {
        root: {
            backgroundColor: theme.palette.background.paper,
            color: 'White'
        },
        footer: {
            borderTop: '1px solid #ccc',
            borderBottom: '1px solid #ccc',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px',
          },
          copyright: {
            fontSize: '0.8rem',
            color: 'gray',
          },
    };
})

export default PageFooterStyle;