export interface IModal {
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
}
