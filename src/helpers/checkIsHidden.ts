import {IColumns, IRow, ITable} from "@/types";

export const checkIsHidden = (table: ITable, row: IRow, colIndex: number) => {
  const columns:IColumns | null | undefined = table.definition?.columns

  if (row.rowType && row.rowType.toString() === 'Header') {
    const headerCellColumnIndex = row.headerCellDetails?.[colIndex]?.columnIndex
    if (headerCellColumnIndex != null) {
      return columns?.[headerCellColumnIndex].isHidden
    }
  }
  return columns?.[colIndex].isHidden
}
