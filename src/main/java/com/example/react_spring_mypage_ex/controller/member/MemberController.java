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

  // 회원 정보 수정 API
  @PutMapping("/mypage/update")
  public ResponseEntity<String> updateMember(@RequestBody Member updatedMember) {
    try {
      memberService.updateMember(updatedMember);
      return new ResponseEntity<>("회원 정보가 성공적으로 업데이트되었습니다.", HttpStatus.OK);
    } catch (Exception e) {
      log.error("회원 정보 업데이트에 실패했습니다.", e);
      return new ResponseEntity<>("회원 정보 업데이트에 실패했습니다.", HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }





}
