import { InputHTMLAttributes } from "react";

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  styleInput?: string | boolean;
}
