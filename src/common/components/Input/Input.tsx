import { styleBorder } from "../../../util/border";
import { handleBorder } from "../../../util/changeBorder";
import { IInput } from "./Input.interface";

export default function Input({
  type,
  name,
  placeholder,
  styleInput,
  ...props
}: IInput) {
  return (
    <input
      type={type}
      name={name}
      className={`${styleBorder[handleBorder(styleInput)]}`}
      placeholder={placeholder}
      {...props}
    />
  );
}
