import React from "react";
import { Button } from "../common/Button";
import { RoomView } from "./view";

export const RoomPage = () => {
  return (
    <>
      <div>소주톤 님의 특별한 크리스마스!</div>
      <div>
        <div>소주톤 님에게</div>
        <RoomView />
        <Button>특별한 크리스마스 추천하기</Button>
      </div>
    </>
  );
};
