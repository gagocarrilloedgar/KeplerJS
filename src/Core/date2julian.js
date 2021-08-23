/**
 * @docs // Core // date2julian
 * @desc Function that generates the Julian date from a traditional date time format more info about Juñian dates:
 * @param {Date} date - Calendar date format: year, month, day, hour, minute, second
 * @returns {Number} JD - JD: Julian Day
 */
exports.date2julian = (date) => {
  if (date === undefined) {
    return 0
  } else if (Object.keys(date).length < 6) {
    return Error('Falta uno o más parámetros en el objeto date')
  }

  // eslint-disable-next-line array-callback-return
  Object.keys(date).map((param) => {
    if (date[param] === undefined) return 0
  })

  const a = Math.floor((14 - date.month) / 12)
  const y = date.year + 4800 - a
  const m = date.month + 12 * a - 3

  // Compute Julian Day Number
  const JDN = date.day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - 32083

  // Find Julian Date
  return JDN + (date.hour - 12) / 24 + date.minute / 1440 + date.second / 86400
}
