import {IRow} from "@/types";
import {checkIsHeader} from "@/helpers/checkIsHeader";
export const sortTable = (rows: IRow[], colIndex: number, isOrderedAsc: boolean) => {
  if (colIndex < 2) {
    colIndex += 1
  } else {
    colIndex += 2
  }

  const myRows = JSON.parse(JSON.stringify(rows))

  myRows.sort((firstRow: IRow, secondRow: IRow) => {
    let returnValue = null

    if (firstRow.rowType && secondRow.rowType && (checkIsHeader(firstRow.rowType.toString()) || checkIsHeader(secondRow.rowType.toString()))) {
      // Don't sort headers
      returnValue = 0
    } else {
      const firstRowCellValue = (firstRow.cells as unknown as [])[colIndex]
      const secondRowCellValue = (secondRow.cells as unknown as [])[colIndex]
      if (firstRowCellValue === null && secondRowCellValue === null) {
        // Don't sort null values
        returnValue = 0
      } else if (firstRowCellValue === null) {
        // null values should be below
        returnValue = 1
      } else if (secondRowCellValue === null) {
        // null values should be below
        returnValue = -1
      } else {
        if (firstRowCellValue > secondRowCellValue) {
          returnValue = 1
        } else if (firstRowCellValue < secondRowCellValue) {
          returnValue = -1
        } else {
          returnValue = 0
        }

        // Get negative of returnValue if sortDirection is dsc
        if (!isOrderedAsc) {
          returnValue = -returnValue
        }
      }
    }

    return returnValue
  })

  return myRows
}
