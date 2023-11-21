import {checkIsHeader} from "@/helpers/checkIsHeader";
import {setCellValue} from "@/helpers/setCellValue";
import * as stach from "./fixtures/stach-row-organized-package.json";

type Table = typeof stach.tables.main
describe('helpers/', () => {
    let table: Table;

    beforeEach(() => {
        table = stach.tables.main
    })

    // * checkIsHeader
    describe('checkIsHeader.ts', () => {
        it("should check rowType is header", () => {
          const isHeader = table.data.rows[0].rowType && checkIsHeader(table.data.rows[0].rowType.toString());
          expect(isHeader).toBeTruthy()
        });
    })

    // * checkIsHeaderLeaf
    describe('checkIsHeaderLeaf.ts', () => {
        it("should check rowType is header", () => {
          // const isHeaderLeaf = checkIsHeaderLeaf(table.data.rows[0], 0);
          // expect(isHeaderLeaf).toBeTruthy()
        });
    })

    // * setAlignment
    describe('setAlignment.ts', () => {})

    // * setCellValue
    describe('setCellValue.ts', () => {
        it("should render correct cellValue", () => {
            const testValue = "test value";
            const cellValue = setCellValue(testValue, false);
            expect(cellValue).toBe(testValue);
        });

        it("should set cell value '---' if cellValue is null", () => {
            const cellValue = setCellValue("", false);
            expect(cellValue).toBe("---");
        });

        it("should set cell value '' if cellValue is null and isHeader is true", () => {
            const cellValue = setCellValue("", true);
            expect(cellValue).toBe("");
        });
    })

    // * setPadding
    describe('setPadding.ts', () => {})
})
