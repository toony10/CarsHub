"use client";
import { CustomBtnProps } from "@/types";
import React from "react";

function CustomBtn({
  title,
  containerStyles,
  btnType,
  handleClick,
}: CustomBtnProps) {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}>
      <span className={`flex-1`}>{title}</span>
    </button>
  );
}

export default CustomBtn;
