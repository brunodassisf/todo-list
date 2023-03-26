import { TextareaHTMLAttributes } from "react";

export type TSyle = "default" | "error";

export interface ITextarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  styleInput?: string | boolean;
}
