"use client";
import React from "react";
import { MatrixRainingLetters } from "react-mdr";

interface OracleResponseProps {
  content: string;
  showContent: boolean;
  fontSize: string;
}

export default function OracleResponse({
  content,
  showContent,
  fontSize,
}: OracleResponseProps) {
  return (
    <>
      <MatrixRainingLetters custom_class='m-0 p-0 fixed top-0 right-0 z-50 ' />
      {showContent && (
        <p
          className={`animate-pulse z-50 text-white ${fontSize} px-6 fixed top-0 left-0 w-full h-full flex items-center justify-center`}>
          {content}
        </p>
      )}
    </>
  );
}
