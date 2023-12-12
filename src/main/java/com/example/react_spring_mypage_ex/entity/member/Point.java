package com.example.react_spring_mypage_ex.entity.member;

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

  @Column(name = "user_id", nullable = false)
  private Long userId;

  @Column(name = "holding")
  private int holding;

  @Column(name = "total")
  private int total;
}
