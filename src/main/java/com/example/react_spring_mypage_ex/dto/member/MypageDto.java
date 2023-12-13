package com.example.react_spring_mypage_ex.dto.member;

import com.example.react_spring_mypage_ex.entity.member.Member;
import com.example.react_spring_mypage_ex.entity.member.Point;
import com.example.react_spring_mypage_ex.entity.member.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@RequiredArgsConstructor
public class MypageDto {
  private Long memberId;
  private String id;
  private String password;
  private String name;
  private String email;
  private String address;
  private Role role;
  private String profile;
  private LocalDate createdAt;
  private String phone;
  private Long gradeId;
  private int holding;

  // 생성자 추가
  public MypageDto(Member member, Point point) {
    this.memberId = member.getMemberId();
    this.id = member.getId();
    this.password = member.getPassword();
    this.name = member.getName();
    this.email = member.getEmail();
    this.address = member.getAddress();
    this.role = member.getRole();
    this.profile = member.getProfile();
    this.createdAt = member.getCreatedAt();
    this.phone = member.getPhone();
    this.gradeId = member.getGradeId();
    this.holding = point.getHolding();
  }
}
