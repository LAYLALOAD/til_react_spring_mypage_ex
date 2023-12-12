package com.example.react_spring_mypage_ex.controller.member;

import com.example.react_spring_mypage_ex.dto.member.MemberDto;
import com.example.react_spring_mypage_ex.service.member.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(originPatterns = "http://localhost:3000")
@RestController
@RequestMapping(value="/api")
@RequiredArgsConstructor
@Slf4j
public class MemberController {

  private final MemberService memberService;

  @GetMapping(value="/members")
  public MemberDto member(){
    System.out.println("MemberApiController진입");
    MemberDto memberDto = new MemberDto();
    memberDto.setId("member");
    memberDto.setName("member");
    memberDto.setEmail("member@kosta268.eco_connect");
    memberDto.setAddress("경기도 성남시 분당구 오리역");
    memberDto.setProfile("image upload");

    return memberDto;
  }

  @GetMapping("/mypage")
  public String myProfile(Model model) {



    return "mypage";

  }

}
