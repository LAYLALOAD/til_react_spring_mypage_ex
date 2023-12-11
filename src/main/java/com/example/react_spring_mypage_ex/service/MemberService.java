package com.example.react_spring_mypage_ex.service;

import com.example.react_spring_mypage_ex.domain.Member;
import com.example.react_spring_mypage_ex.repository.MemberRepository;
import org.springframework.stereotype.Service;

@Service
public class MemberService {

  private final MemberRepository memberRepository;

  public MemberService(MemberRepository memberRepository) {
    this.memberRepository = memberRepository;
  }

  public Member getMemberById(Long memberId) {
    return memberRepository.findByMemberId(memberId);
  }
}
