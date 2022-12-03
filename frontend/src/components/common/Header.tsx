import React from "react";
import style from "./Header.module.scss";

type HeaderType = {
  hasShareButton?: boolean;
  children: React.ReactNode;
};

export const Header = ({ children, hasShareButton }: HeaderType) => {
  return (
    <header className={ style.Header }>
      <h1 className={ style.Title }>{children}</h1>
      { hasShareButton &&  <button className={ style.BtnShare } onClick={ CopyUrlToClipboard }>
        <div className={ style.ShareImg }></div>
        <span className={ style.Label }>공유</span>
      </button> }
      
    </header>
  )
};

Header.defaultProps = {
  hasShareButton: true,
  children: "",
};
  
function CopyUrlToClipboard(){
  navigator.clipboard.writeText(window.location.href);
}
