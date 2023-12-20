package com.example.react_spring_mypage_ex.controller.member;

import com.example.react_spring_mypage_ex.dto.member.MyinfoUpdateDto;
import com.example.react_spring_mypage_ex.dto.member.MypageDto;
import com.example.react_spring_mypage_ex.dto.member.PasswordDto;
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
  public ResponseEntity<MypageDto> getMember(@PathVariable Long memberId) {
    log.info("memberId: {}",memberId.getClass());
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

  // 비밀번호 확인 API
  @PostMapping("/passwordcheck/{memberId}")
  public ResponseEntity<String> checkPassword(@PathVariable("memberId") Long memberId, @RequestBody PasswordDto passwordDto) {
//    log.info("password: {}",passwordDto.getPassword());
    boolean passwordMatch = memberService.checkPassword(memberId, passwordDto.getPassword());
    if (passwordMatch) {
      return new ResponseEntity<>("{\"success\": true}", HttpStatus.OK);
    } else {
      return new ResponseEntity<>("{\"success\": false}", HttpStatus.OK);
    }
  }

  // 회원 정보 수정 API
  @PostMapping("/update/{memberId}")
  public ResponseEntity<String> updateMember(@RequestBody MyinfoUpdateDto myinfoUpdateDto) {
    try {
      memberService.updateMember(myinfoUpdateDto);
      return new ResponseEntity<>("회원 정보가 성공적으로 업데이트되었습니다.", HttpStatus.OK);
    } catch (Exception e) {
      log.error("회원 정보 업데이트에 실패했습니다.", e);
      return new ResponseEntity<>("회원 정보 업데이트에 실패했습니다.", HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  //회원 정보 삭제 API
  @DeleteMapping("/unregister/{memberId}")
  public ResponseEntity<String> deleteMember(@PathVariable("memberId") Long memberId) {
    try {
      // Change the argument to memberId
      memberService.deleteMember(memberId);
      return new ResponseEntity<>("회원 정보가 성공적으로 삭제되었습니다.", HttpStatus.OK);
    } catch (Exception e) {
      log.error("회원 정보 삭제에 실패했습니다.", e);
      return new ResponseEntity<>("회원 정보 삭제에 실패했습니다.", HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }




}
