import React from "react"
import PageFooterStyle from "./pagefooterstyle";

function PageFooter(){
    const classes = PageFooterStyle();
    return (
        <div className={classes.footer}>
      <div>Footer content</div>
      <div className={classes.copyright}>
        &copy; {new Date().getFullYear()} Your Company Name
      </div>
    </div>
    )
}

export default PageFooter