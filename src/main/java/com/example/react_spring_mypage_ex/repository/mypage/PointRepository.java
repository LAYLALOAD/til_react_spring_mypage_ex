package com.example.react_spring_mypage_ex.repository.mypage;

import com.example.react_spring_mypage_ex.entity.mypage.Point;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
@EnableJpaRepositories
public interface PointRepository extends JpaRepository<Point, Long> {

  Optional<Point> findByMember_MemberId(Long memberId);
}
