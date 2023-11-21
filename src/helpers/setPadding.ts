import { IRow } from "@/types";

export const setPadding = (row: IRow, columnIndex: number) => {
  return row.cellDetails?.[columnIndex]?.groupLevel + "rem";
};
