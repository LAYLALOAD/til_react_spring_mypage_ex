package com.example.react_spring_mypage_ex.service.member;

import com.example.react_spring_mypage_ex.entity.member.Member;
import com.example.react_spring_mypage_ex.repository.member.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class MemberService {

  private final MemberRepository memberRepository;

  // 회원 생성 메서드
  public void createUser(Member member) {
    memberRepository.save(member);
  }

  // 회원 정보 조회 메서드
  public Member findMemberByMemberId(Long memberId) {
    Optional<Member> optionalMember = memberRepository.findByMemberId(memberId);

    return optionalMember.orElse(null);
  }
}
