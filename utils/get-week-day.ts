import dayjs from "dayjs";

export const getWeekDay = (date: string) => dayjs(date).format("dddd");
