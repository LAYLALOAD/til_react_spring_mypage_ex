package com.example.react_spring_mypage_ex.entity.mypage;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Point {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "Point_id", nullable = false)
  private Long pointId;

  // 일대일 양방향 연관관계 설정
  @OneToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "member_id", nullable = false)
  private Member member;

  @Column(name = "holding")
  private int holding;

  @Column(name = "total")
  private int total;



}
