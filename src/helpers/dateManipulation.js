export const utcStringToFullMonthDate = (dateString, locales = "default") =>
  new Date(dateString).toLocaleString(locales, {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
