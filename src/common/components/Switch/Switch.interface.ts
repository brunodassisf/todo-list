export interface ISwitch {
  check: boolean;
  toogle: () => void;
  labelByTheChecked: (st: boolean) => string;
}
