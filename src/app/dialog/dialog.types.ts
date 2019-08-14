export type ConfirmType = 'confirm' | 'info' | 'success' | 'warning' | 'error';
export type AcceptType = 'primary' | 'success' | 'warning' | 'danger';

type ClickCallback = () => void | Promise<void>;

export interface ConfirmOptions {
  open?: boolean;
  title?: string;
  content?: string;
  iconShape?: string;
  iconClass?: string;
  acceptText?: string;
  acceptType?: AcceptType;
  onAccept?: ClickCallback;
  cancelText?: string;
  onCancel?: ClickCallback;
}
