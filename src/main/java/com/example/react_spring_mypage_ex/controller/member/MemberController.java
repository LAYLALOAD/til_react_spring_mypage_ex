package com.example.react_spring_mypage_ex.controller.member;

import com.example.react_spring_mypage_ex.dto.member.MypageDto;
import com.example.react_spring_mypage_ex.entity.member.Member;
import com.example.react_spring_mypage_ex.entity.member.Point;
import com.example.react_spring_mypage_ex.service.member.MemberService;
import com.example.react_spring_mypage_ex.service.member.PointService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(originPatterns = "http://localhost:3000")
@RestController
@RequestMapping(value="/api")
@RequiredArgsConstructor
@Slf4j
public class MemberController {

  private final MemberService memberService;
  private final PointService pointService;

//  @GetMapping(value="/members")
//  public MemberDto member(){
//    System.out.println("MemberApiController진입");
//    MemberDto memberDto = new MemberDto();
//    memberDto.setId("member");
//    memberDto.setName("member");
//    memberDto.setEmail("member@kosta268.eco_connect");
//    memberDto.setAddress("경기도 성남시 분당구 오리역");
//    memberDto.setProfile("image upload");
//
//    return memberDto;
//  }

  //회원 조회 API
  @GetMapping("/mypage/{memberId}")
  public ResponseEntity<MypageDto> getMember(@PathVariable("memberId") Long memberId) {
    Member member = memberService.findMemberByMemberId(memberId);
    Point point = pointService.findByMemberId(memberId);
    log.info("member = {}, point = {}", member, point);
    if (member != null && point != null) {
      MypageDto mypageDto = new MypageDto(member, point);
      return new ResponseEntity<>(mypageDto, HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  //회원 정보 삭제

}
