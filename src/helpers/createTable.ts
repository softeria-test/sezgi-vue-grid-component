import {ICustomHeaderCellDetail, IRow, ITable} from "@/types";
import {checkIsHeaderLeaf} from "@/helpers/checkIsHeaderLeaf";

export const createTable = (table: ITable | undefined, isOrderedAsc: boolean) => {
  let createdTable = null

  if (table) {
    createdTable = JSON.parse(JSON.stringify(table))
    createdTable.data?.rows?.forEach((row: IRow) => {
      if (row.headerCellDetails) {
        Object.values(row.headerCellDetails).forEach((headerCellDetailValue, colIndex) => {
          if (checkIsHeaderLeaf(row, colIndex)) {
            (headerCellDetailValue as ICustomHeaderCellDetail).isOrderedAsc = isOrderedAsc
          }
        })
      }
    })
  }

  return createdTable
}

