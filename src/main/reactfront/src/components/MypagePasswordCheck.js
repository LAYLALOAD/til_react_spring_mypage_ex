import React, {useEffect, useState} from "react";
import "./MypagePasswordCheck.css";
import PropTypes from "prop-types";
import Axios from "axios";

export const MypagePasswordCheckWrap = ({ className, buttonCancelClassName }) => {

    const [member, setMember] = useState("");

    useEffect(() => {
        // 1번 user 로그인 되었다는 가정으로 url에 /1 추가함 (로그인 페이지 연결후 변경할 것)
        Axios.get("http://localhost:8080/api/mypage/1").then((response) => {
            if (response.data) {
                //회원 정보 확인용
                console.log(response.data);
                setMember(response.data);
            } else {
                alert("failed to ");
            }
        });
    }, []);

    return (
        <div className={`mypage-my-info-edit ${className}`}>
            <div className="my-info-edit-check">
                <div className="title">비밀번호 확인</div>
                <p className="description">회원님의 정보를 안전하게 보호하기 위해 비밀번호를 다시 한 번 입력해 주세요.</p>
            </div>
            <div className="my-info-edit-check-2">
                <div className="overlap-group-wrapper">
                    <div className="overlap-group-2">
                        <div className="input-2">
                            <div>{member.email}</div>
                        </div>
                        <div className="email-2">이메일</div>
                    </div>
                </div>
                <div className="overlap-wrapper">
                    <div className="overlap-group-2">
                        <div className="input-2"/>
                        <div className="password">비밀번호</div>
                    </div>
                </div>
            </div>
            <div className="button-area-wrap">
                <div className="button-area">
                    <div className="button-continue">
                        <div className="continue">확인</div>
                    </div>
                    <div className={`button-cancel ${buttonCancelClassName}`}>
                        <div className="cancel">취소</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

MypagePasswordCheckWrap.propTypes = {
    className: PropTypes.string.isRequired,
    buttonCancelClassName: PropTypes.string.isRequired,
};