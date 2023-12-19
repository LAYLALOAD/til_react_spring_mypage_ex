import React from "react";
import "./PasswordCheck.css";
import {MypageFooterWrap} from "../components/MypageFooter";
import {MypageSidebarWrap} from "../components/MypageSidebar";
import {MypageMyinfoEdit} from "../components/MypageMyinfoEdit";

const PasswordCheck = () => {
    return (
        <div className="myinfo-edit-index">
            <div className="div-2">
                <MypageMyinfoEdit className="mypage-myinfo-edit-wrap-instance" />
                <MypageSidebarWrap className="mypage-sidebar-wrap-instance" />
                <MypageFooterWrap className="mypage-footer-wrap-instance" />
            </div>
        </div>
    );
};

export default PasswordCheck;