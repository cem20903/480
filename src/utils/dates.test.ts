import { isToday, transformDateFromUnixTimestamp } from "./dates";

const MILLISECONDS = 1000;

describe("transformDateFromUnixTimestamp", () => {
  it("should return the correct date when is passed a unix time stamp", async () => {
    const date = new Date("1991-12-18").getTime() / MILLISECONDS;
    const result = transformDateFromUnixTimestamp(date);
    expect(result).toEqual(new Date("1991-12-18T00:00:00.000Z"));
  });
});

describe("isToday", () => {
  it("should return true when the date we pass is today", async () => {
    const result = isToday(new Date());
    expect(result).toBe(true);
  });

  it("should return false when the date we pass is not today", async () => {
    const result = isToday(new Date("1991-12-18"));
    expect(result).toBe(false);
  });
});
