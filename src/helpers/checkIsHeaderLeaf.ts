import { IRow } from "@/types";

export const checkIsHeaderLeaf = (row: IRow, columnIndex: number) => {
  const colSpan = row.headerCellDetails?.[columnIndex]?.colspan;
  const rowSpan = row.headerCellDetails?.[columnIndex]?.rowspan;

  return (!colSpan || colSpan < 1) && (!rowSpan || rowSpan < 1);
};
