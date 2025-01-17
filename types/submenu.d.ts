import { CmstopUIComponent } from './component'

/** Submenu Component */
export declare class ElSubmenu extends CmstopUIComponent {
  /** Unique identification */
  index: string | null

  /** Delay time before showing a sub-menu */
  showTimeout: number

  /** Delay time before hiding a sub-menu */
  hideTimeout: number

  /** Custom class name for the popup menu */
  popperClass: string

  /** Whether the sub-menu is disabled */
  disabled: boolean

  /** Whether to append the popper menu to body */
  popperAppendToBody: boolean
}
