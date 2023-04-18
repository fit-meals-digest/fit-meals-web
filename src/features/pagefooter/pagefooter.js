import React from "react"
import PageFooterStyle from "./pagefooterstyle";
import playstoreimage from "../../images/playstore.png";
import applestoreimage from "../../images/applestore.png";

function PageFooter() {
    const classes = PageFooterStyle();
    return (
        <div className={classes.footer}>
            <div className={classes.footerContent}>
                <div className={classes.footerText}>Footer content</div>

                <div className={classes.storeOption}>
                    <div className={classes.footerTextTitle}>Join the community</div>
                    <img className={classes.img} src={playstoreimage} alt="playstore" href="https://google.com"></img>
                    <span></span>
                    <img className={classes.img} src={applestoreimage} alt="applestore" href="https://apple.com"></img>
                </div>
            </div>
            <div className={classes.copyright}>
                Chisom Nwike / &copy; {new Date().getFullYear()} braindieu / <a className={classes.ownerInfo} href="https://www.braindieu.com">www.braindieu.com</a>
            </div>
        </div>
    )
}

export default PageFooter