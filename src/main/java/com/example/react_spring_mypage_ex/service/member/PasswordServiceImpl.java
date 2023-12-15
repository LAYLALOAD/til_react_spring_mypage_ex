package com.example.react_spring_mypage_ex.service.member;

import com.example.react_spring_mypage_ex.dto.member.PasswordDto;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class PasswordServiceImpl implements PasswordService {

  private final MemberService memberService;

  public PasswordServiceImpl(MemberService memberService) {
    this.memberService = memberService;
  }

  @Override
  public boolean verifyPassword(Long memberId, PasswordDto passwordDto) {
    // 비밀번호 검증 로직을 구현
    // memberId와 passwordDto를 사용해서 비밀번호를 검증하고 결과를 반환
    // 예: return memberService.verifyPassword(memberId, passwordDto.getPassword());
    return false;
  }
}