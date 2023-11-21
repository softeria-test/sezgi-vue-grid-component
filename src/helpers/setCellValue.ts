export const setCellValue = (cellValue: string, isHeader:boolean):string => cellValue ? cellValue : isHeader ? "" : "---"
