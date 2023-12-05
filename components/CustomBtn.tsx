"use client";
import { CustomBtnProps } from "@/types";
import React from "react";

function CustomBtn({ title, containerStyles, handleClick }: CustomBtnProps) {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}>
      <span className={`flex-1`}>{title}</span>
    </button>
  );
}

export default CustomBtn;
