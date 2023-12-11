package com.example.react_spring_mypage_ex.controller;

import com.example.react_spring_mypage_ex.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("/mypage")
@Slf4j
public class MemberController {
  private final MemberService memberService;

}
