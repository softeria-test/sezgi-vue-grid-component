import { factset as stach, google } from "@/stach-sdk";

export type ITable = stach.protobuf.stach.v2.RowOrganizedPackage.ITable;
export type IRow = stach.protobuf.stach.v2.RowOrganizedPackage.IRow;
export type IColumns = stach.protobuf.stach.v2.table.IColumnDefinition[];
export type IValue = google.protobuf.IValue[];
export interface ICustomHeaderCellDetail
    extends stach.protobuf.stach.v2.RowOrganizedPackage.IHeaderCellDetail {
  isOrderedAsc: boolean;
}
