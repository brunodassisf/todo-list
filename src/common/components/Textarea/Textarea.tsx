import { styleBorder } from "../../../util/border";
import { handleBorder } from "../../../util/changeBorder";
import { ITextarea } from "./Textarea.interface";

export default function Textarea({
  name,
  placeholder,
  styleInput,
  ...props
}: ITextarea) {
  return (
    <textarea
      name={name}
      className={`${styleBorder[handleBorder(styleInput)]} input`}
      placeholder={placeholder}
      {...props}
    />
  );
}
