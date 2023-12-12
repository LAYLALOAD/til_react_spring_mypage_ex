package com.example.react_spring_mypage_ex.dto.member;

import com.example.react_spring_mypage_ex.entity.member.Role;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.time.LocalDate;

@Data
@RequiredArgsConstructor
public class MemberDto {
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


}
