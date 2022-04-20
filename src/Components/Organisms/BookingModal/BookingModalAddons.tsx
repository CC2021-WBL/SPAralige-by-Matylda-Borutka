export const sevenDays = [0, 1, 2, 3, 4, 5];

export function hourFromString(hour: string): number {
  return Number(hour.substr(0, hour.indexOf(':')));
}
