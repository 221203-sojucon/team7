import React from "react";

import { Button } from "../common/Button";
import style from './Landing.module.scss'

export const LandingPage = () => {
  return (
    <div className={ style.Landing }>
      <img className={ style.Image }></img>
      <img className={ style.ImageText }></img>
      <Button color="light">특별한 크리스마스 만들기</Button>
    </div>
  );
};
