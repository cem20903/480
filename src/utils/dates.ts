
const MILLISECONDS = 1000

function transformDateFromUnixTimestamp(unixTimestamp: number) {
  return new Date(unixTimestamp * MILLISECONDS)
}


function isToday(date: Date) {

  const currentDate = new Date(date)
  currentDate.setHours(0, 0, 0, 0)

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  return currentDate.getTime() === today.getTime()

}

export { transformDateFromUnixTimestamp, isToday }
