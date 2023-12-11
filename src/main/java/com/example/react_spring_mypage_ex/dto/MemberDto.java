package com.example.react_spring_mypage_ex.dto;

import com.example.react_spring_mypage_ex.domain.Role;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
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
