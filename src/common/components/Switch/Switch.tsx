import { ISwitch } from "./Switch.interface";

export default function Switch({ check, labelByTheChecked, toogle }: ISwitch) {
  return (
    <label className="relative inline-flex items-center mr-5 cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        defaultChecked={check}
      />
      <div
        className="w-12 h-6 bg-gray-200 rounded-full peer dark:bg-gray-400  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[5px] after:peer-checked:left-2.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-green-600"
        onClick={toogle}
      ></div>
      <span className="ml-3 w-28 text-sm font-medium text-gray-700">
        {check ? `${labelByTheChecked(true)}` : `${labelByTheChecked(false)}`}
      </span>
    </label>
  );
}
