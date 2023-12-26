package com.example.react_spring_mypage_ex.service.mypage;

import com.example.react_spring_mypage_ex.dto.mypage.PasswordDto;

public interface PasswordService {
  boolean verifyPassword(Long memberId, PasswordDto passwordDto);
}