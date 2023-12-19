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

  // 비밀번호 확인 메서드
  public boolean checkPassword(Long memberId, String password) {
    Optional<Member> optionalMember = memberRepository.findByMemberId(memberId);

    return optionalMember
        .map(member -> member.getPassword().equals(password))
        .orElse(false);
  }

  // 회원 정보 업데이트 메서드
  public void updateMember(Member updatedMember) {
    Member existingMember = memberRepository.findById(updatedMember.getMemberId())
        .orElseThrow(() -> new IllegalArgumentException("해당 회원이 존재하지 않습니다."));

    // Update fields based on your requirements
    existingMember.setName(updatedMember.getName());
    existingMember.setEmail(updatedMember.getEmail());
    existingMember.setAddress(updatedMember.getAddress());
    existingMember.setPhone(updatedMember.getPhone());
    existingMember.setProfile(updatedMember.getProfile());

    // 수정된 회원정보 저장
    memberRepository.save(existingMember);
  }

}
