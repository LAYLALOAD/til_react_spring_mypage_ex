package com.example.react_spring_mypage_ex.dto.member;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class MyinfoUpdateDto {

  @NotNull
  @NotBlank
  private Long memberId;

  @NotNull
  @NotBlank
  private String profile;

  @NotNull
  @NotBlank
  private String phone;

  @NotNull
  @NotBlank
  private String password;


}
