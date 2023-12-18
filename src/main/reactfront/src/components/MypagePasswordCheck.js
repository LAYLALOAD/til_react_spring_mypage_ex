import React, {useEffect, useState} from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom"
import PropTypes from "prop-types";

import "./MypagePasswordCheck.css";

export const MypagePasswordCheckWrap = ({ className, buttonCancelClassName }) => {

    const [member, setMember] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        // 1번 user 로그인 되었다는 가정으로 url에 /1 추가함 (로그인 페이지 연결후 변경할 것)
        Axios.get("http://localhost:8080/api/mypage/1").then((response) => {
            if (response.data) {
                //회원 정보 확인용
                setMember(response.data);
            } else {
                alert("사용자의 정보를 가져오지 못했습니다.");
            }
        });
    }, []);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handlePasswordSubmit = () => {
        // 가정: 서버에서 비밀번호 일치 여부를 확인하는 API를 호출하고,
        // 성공하면 '/myinfo-edit' 페이지로 이동, 실패하면 오류 메시지 표시
        Axios.post("http://localhost:8080/api/password/1", {
            email: member.email,
            password: password,
        })
            .then((response) => {
                // 성공적으로 확인되면 '/myinfo-edit' 페이지로 이동
                if (response.data === "success") {
                    navigate("/myinfo-edit");
                } else {
                    setError("비밀번호가 올바르지 않습니다. 다시 입력해 주세요.");
                }
            })
            .catch((error) => {
                // 비밀번호가 틀린 경우 오류 메시지 표시
                setError("비밀번호가 올바르지 않습니다. 다시 입력해 주세요.");
            });
    };

    const handleCancelClick = () => {
        // 취소 버튼을 누르면 마이페이지 메인 페이지로 이동하도록 설정
        navigate("/");
    };

    return (
        <div className={`mypage-password-check ${className}`}>
            <div className="infomation">
                <div className="password-check">
                    <div className="title">비밀번호 확인</div>
                    <p className="description">회원님의 정보를 안전하게 보호하기 위해 비밀번호를 다시 한 번 입력해 주세요.</p>
                </div>
                <div className="password-check-2">
                    {/*<div className="overlap-group-wrapper">*/}
                    {/*    <div className="overlap-group-2">*/}
                    {/*        <div className="input-2">*/}
                    {/*            <div>{member.email}</div>*/}
                    {/*        </div>*/}
                    {/*        <div className="email-2">이메일</div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="overlap-wrapper">
                        <div className="overlap-group-2">
                            <input
                                type="password"
                                value={password}
                                onChange={handlePasswordChange}
                                className="input-2"
                            />
                            <div className="password">비밀번호</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="button-area-wrap">
                <div className="button-area">
                    <div className="button-continue" onClick={handlePasswordSubmit}>
                        <div className="continue">확인</div>
                    </div>
                    <div className={`button-cancel ${buttonCancelClassName}`} onClick={handleCancelClick}>
                        <div className="cancel">취소</div>
                    </div>
                </div>
                {error && <div className="error-message">{error}</div>}
            </div>
        </div>
    );
};

MypagePasswordCheckWrap.propTypes = {
    className: PropTypes.string.isRequired,
    buttonCancelClassName: PropTypes.string.isRequired,
};