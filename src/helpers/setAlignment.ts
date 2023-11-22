import { IRow, ITable } from "@/types";
import { checkIsHeader } from "@/helpers/checkIsHeader";
export const  setAlignment = (
  table: ITable,
  row: IRow,
  columnIndex: number,
  direction: string
) => {
  const alignmentType = direction === "horizontal" ? "halign" : "valign";
  const cols = table.definition?.columns;
  if (row.rowType && checkIsHeader(row.rowType.toString())) {
    const headerCellColumnIndex =
      row.headerCellDetails?.[columnIndex]?.columnIndex;
    if (headerCellColumnIndex != undefined) {
      return cols?.[headerCellColumnIndex]?.format?.[alignmentType];
    }
  } else {
    return cols?.[columnIndex]?.format?.[alignmentType];
  }
};
