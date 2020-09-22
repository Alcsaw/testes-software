export default function monthDiff(dateFrom: Date, dateTo: Date) {
  /**
   * Returns the integer number of how many months apart two dates are
   */
  return dateTo.getMonth() - dateFrom.getMonth() +
    (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
}
