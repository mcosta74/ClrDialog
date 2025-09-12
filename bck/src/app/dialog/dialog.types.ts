export type ConfirmType = 'confirm' | 'info' | 'success' | 'warning' | 'error';
export type AcceptType = 'primary' | 'success' | 'warning' | 'danger';

export interface ConfirmOptions {
  open?: boolean;
  title?: string;
  content?: string;
  iconShape?: string;
  iconClass?: string;
  acceptText?: string;
  acceptType?: AcceptType;
  cancelText?: string;
  confirmType?: ConfirmType;
}
