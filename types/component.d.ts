import Vue from 'vue'

/** CmstopUI component common definition */
export declare class CmstopUIComponent extends Vue {
  /** Install component into Vue */
  static install (vue: typeof Vue): void
}

/** Component size definition for button, input, etc */
export type CmstopUIComponentSize = 'large' | 'medium' | 'small' | 'mini'

/** Horizontal alignment */
export type CmstopUIHorizontalAlignment = 'left' | 'center' | 'right'
