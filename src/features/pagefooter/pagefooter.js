import React from "react"
import PageFooterStyle from "./pagefooterstyle";

function PageFooter(){
    const classes = PageFooterStyle();
    return (
        <div className="page-footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer-copyright text-center py-3">Copyright &copy; 2023</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageFooter