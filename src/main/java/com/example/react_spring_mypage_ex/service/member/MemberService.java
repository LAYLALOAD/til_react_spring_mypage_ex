package com.example.react_spring_mypage_ex.service.member;

import com.example.react_spring_mypage_ex.dto.member.MyinfoUpdateDto;
import com.example.react_spring_mypage_ex.entity.member.Member;
import com.example.react_spring_mypage_ex.repository.member.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class MemberService {

  private final MemberRepository memberRepository;


  // 회원 생성 메서드
  public void createUser(Member member) {
    memberRepository.save(member);
  }

  // 회원 정보 조회 메서드
  public Member findMemberByMemberId(Long memberId) {
    Optional<Member> optionalMember = memberRepository.findById(memberId);
    log.info("memberId: {}",memberId.getClass());
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
  public void updateMember(MyinfoUpdateDto myinfoUpdateDto) {
    Optional<Member> optionalMember = memberRepository.findByMemberId(myinfoUpdateDto.getMemberId());

    if (optionalMember.isPresent()) {
      Member member = optionalMember.get();

      member.setProfile(myinfoUpdateDto.getProfile());
      member.setPhone(myinfoUpdateDto.getPhone());
      member.setPassword(myinfoUpdateDto.getPassword());

      memberRepository.save(member);
    } else {
      log.error("해당 memberId에 대한 회원을 찾을 수 없습니다.");
      throw new RuntimeException("해당 memberId에 대한 회원을 찾을 수 없습니다.");
    }
  }

  // 회원 정보 삭제
  public void deleteMember(Long memberId) {
    memberRepository.deleteById(memberId);
  }


}
