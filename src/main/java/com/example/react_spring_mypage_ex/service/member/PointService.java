package com.example.react_spring_mypage_ex.service.member;

import com.example.react_spring_mypage_ex.entity.member.Point;
import com.example.react_spring_mypage_ex.repository.member.PointRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class PointService {

  private final PointRepository pointRepository;

  public Point findByMemberId(Long memberId) {
    Optional<Point> optionalPoint = pointRepository.findByMember_MemberId(memberId);

    return optionalPoint.orElse(null);
  }
}
