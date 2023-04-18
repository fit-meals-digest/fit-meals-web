import React from "react";
import PageHeaderStyle from "./pageheaderstyle";
import { Link } from "react-router-dom";

function Header() {
    const classes = PageHeaderStyle();

    return (
        <header className={`${classes.header} ${classes.root}`}>
            <div className={classes.logocontainer}>
                <div className={classes.largeLogoText}>fit+meal</div>
                <div className={classes.smallLogoText}>digest</div>
            </div>
            {/* <div className={classes.logo}>
                fit+meal
            </div> */}
            <nav className={classes.menu}>
                <div>
                    <Link className={classes.linktext} to="/">
                        <span className={classes.menuItem}>Home</span>
                    </Link>
                </div>
                <div>
                    <Link className={classes.linktext} to="about">
                        <span className={classes.menuItem}>About</span>
                    </Link>
                </div>
                <div>
                    <Link className={classes.linktext} to="blog">
                        <span className={classes.menuItem}>Blog</span>
                    </Link>
                </div>
                <div>
                    <Link className={classes.linktext} to="contact">
                        <span className={classes.menuItem}>Contact</span>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;