package com.example.react_spring_mypage_ex.entity.member;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Getter
@Setter
public class Member {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "member_id", nullable = false, unique = true)
  private Long memberId;

  @Column(name = "id", length = 20, nullable = false, unique = true)
  private String id;

  @Column(name = "password", length = 20, nullable = false)
  private String password;

  @Column(name = "name", length = 10, nullable = false)
  private String name;

  @Column(name = "email", length = 30, nullable = false)
  private String email;

  @Column(name = "address", length = 200)
  private String address;

  @Enumerated(EnumType.STRING)
  private Role role;

  @Column(name = "profile", length = 255)
  private String profile;

  @Column(name = "created_at")
  private LocalDate createdAt;

  @Column(name = "phone", length = 20)
  private String phone;

  @Column(name = "grade_id")
  private Long gradeId;


  // 일대일 양방향 연관관계 설정
  @OneToOne(mappedBy = "member", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  @JsonIgnore
  private Point point;



}

