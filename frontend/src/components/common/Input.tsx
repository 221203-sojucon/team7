import React from 'react'
import style from './Input.module.scss';

type buttonType = {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Input = ({ label }: buttonType) => {
  return (
    <div>
      <p className={ style.Label }>{ label }</p>
      <input className={ style.Input } />
    </div>
  )
}

Input.defaultProps = {
  label: "라벨",
};

