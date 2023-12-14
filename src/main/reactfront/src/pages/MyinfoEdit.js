import React from "react";
import "./PasswordCheck.css";
import {MypageFooterWrap} from "../components/MypageFooter";
import {MypageSidebarWrap} from "../components/MypageSidebar";
import {MypageMyinfoEdit} from "../components/MypageMyinfoEdit";

const PasswordCheck = () => {
    return (
        <div className="index">
            <div className="div-2">
                <MypageSidebarWrap className="mypage-sidebar-wrap-instance" />
                <MypageFooterWrap className="mypage-footer-wrap-instance" />
                <MypageMyinfoEdit className="mypage-myinfo-edit-wrap-instance" />
            </div>
        </div>
    );
};

export default PasswordCheck;