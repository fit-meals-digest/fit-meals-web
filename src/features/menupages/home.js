import React from "react";
import HomePageStyle from "./menupagestyles/homepagestyle";
import image from "../../images/home_banner.jpg"
import { Link } from "react-router-dom";

function Home() {
    const classes = HomePageStyle();
    return (
        <div className={`${classes.banner} ${classes.root}`}>
            <div className={classes.leftblock}>
                <h1 className={classes.title}>Community</h1>
                <h3 className={classes.subtitle}>sharing fitfam meals across different regions</h3>
                <p className={classes.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
occaecat cupidatat non proident, sunt in culpa qui officia deserunt molli laborum.</p>
                <button className={classes.leadingButton}>
                <Link className={classes.linktext} to="about">
                        <p className={classes.menuItem}>Learn more</p>
                    </Link>
                </button>
            </div>
            <div className={classes.rightblock}>
                <img className={classes.image} src={image} alt="banner"/>
            </div>
        </div>
    )

}

export default Home;