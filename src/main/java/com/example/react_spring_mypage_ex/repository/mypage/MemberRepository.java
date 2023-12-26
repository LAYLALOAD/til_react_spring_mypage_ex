package com.example.react_spring_mypage_ex.repository.mypage;


import com.example.react_spring_mypage_ex.entity.mypage.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
@EnableJpaRepositories
public interface MemberRepository extends JpaRepository<Member, Long> {

  // MemberId 기준 회원정보 조회
  Optional<Member> findByMemberId(Long memberId);


}
