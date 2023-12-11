package com.example.react_spring_mypage_ex.repository;

import com.example.react_spring_mypage_ex.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {
  Member findByMemberId(Long memberId);

}
