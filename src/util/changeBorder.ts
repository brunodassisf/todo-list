import { TBorder } from "./types";

export function handleBorder(styleInput?: string | boolean): TBorder {
  if (typeof styleInput === "undefined") {
    return "error";
  }
  return "default";
}
