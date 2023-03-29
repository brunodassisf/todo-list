import { ISwitch } from "./Switch.interface";

import "./Switch.style.css";

export default function Switch({ check, labelByTheChecked, toogle }: ISwitch) {
  return (
    <label className="container_switch">
      <input type="checkbox" className="sr-only peer" defaultChecked={check} />
      <div className="switch" onClick={toogle}></div>
      <span className="switch_label">
        {check ? `${labelByTheChecked(true)}` : `${labelByTheChecked(false)}`}
      </span>
    </label>
  );
}
