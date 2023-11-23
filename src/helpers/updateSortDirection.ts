import {ICustomHeaderCellDetail, IRow} from "@/types";

export const toggleSortDirection = (row: IRow, colIndex: number) => {
  const headerCellDetail = row.headerCellDetails?.[colIndex] as ICustomHeaderCellDetail
  headerCellDetail.isOrderedAsc = !headerCellDetail.isOrderedAsc
}

export const updateSortDirectionRef = (row: IRow, colIndex: number):boolean => {
  const headerCellDetail = row.headerCellDetails?.[colIndex] as ICustomHeaderCellDetail
  return headerCellDetail.isOrderedAsc
}
