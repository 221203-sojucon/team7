import React from 'react'
import { CommentTextarea } from './CommentTextarea';
import { Input } from "../../common/Input";
import { Header } from "../../common/Header";

export const CommentPage = () => {
  return (
    <div>
      <Header>소주톤 님의<br/><span>얼레벌레 크리스마스</span>를<br/> 추천해주세요!</Header>
      <Input label='추천하는 사람'/>
      <CommentTextarea />
      {/* 공통 컴포넌트 사용하기 */}
      이 행동 추천하기
    </div>
  )
}


// return (
//     <MWContainer tablet>
//       {spellingList && renderMainInfo(spellingList, "철자", "/spelling")}
//       {spacingList && renderMainInfo(spacingList, "띄어쓰기", "/spacing")}
//     </MWContainer>
//   );