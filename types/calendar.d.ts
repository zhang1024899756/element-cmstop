import { CmstopUIComponent } from './component'

export type DateType = Date | String | Number

/** Calendar Component */
export declare class ElCalendar extends CmstopUIComponent {
  /** Binding value */
  value: DateType

  /** Specify the display range of the calendar */
  range: DateType[]

  /** First day of week */
  firstDayOfWeek: number
}
