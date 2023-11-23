<template>
    <div class="grid-row">
      <table class="table" v-if="clonedTable && clonedTable.data">
        <caption class="title">
          Example Table
        </caption>
        <tbody>
        <tr
            v-for="(row, rowIndex) in clonedTable.data.rows"
            :key="rowIndex"
            class="table-row"
        >
          <template v-for="(cellValue, columnIndex) in row.cells">
          <th
              v-if="!checkIsHidden(clonedTable, row, Number(columnIndex))"
              :rowspan="row.headerCellDetails && row.headerCellDetails[columnIndex]['rowspan']"
              :colspan="row.headerCellDetails && row.headerCellDetails[columnIndex]['colspan']"
              :key="columnIndex"
              :style="{
              textAlign: setAlignment(
                clonedTable,
                row,
                Number(columnIndex),
                'horizontal'
              ),
              verticalAlign: setAlignment(
                clonedTable,
                row,
                Number(columnIndex),
                'vertical'
              ),
            }"
          >
            <single-cell
                :cell-value="cellValue ? cellValue.toString() : ''"
                :is-header="row.rowType ? checkIsHeader(row.rowType.toString()) : false"
                :is-header-leaf="checkIsHeaderLeaf(row, Number(columnIndex))"
                :is-ascending="row.headerCellDetails && row.headerCellDetails[columnIndex]['isOrderedAsc']"
                @sort:table="onSortArrowClicked(row, Number(columnIndex))"
            />
          </th>
          </template>
        </tr>
        </tbody>
      </table>
    </div>
</template>

<script lang="ts">
import Vue, {ref, watch} from "vue";
import {IRow, ITable} from "@/types";
import SingleCell from "@/components/partials/SingleCell.vue";
import {checkIsHeaderLeaf} from "@/helpers/checkIsHeaderLeaf";
import {checkIsHeader} from "@/helpers/checkIsHeader";
import {setAlignment} from "@/helpers/setAlignment";
import {createTable} from "@/helpers/createTable";
import {sortTable} from "@/helpers/sortTable";
import {toggleSortDirection, updateSortDirectionRef} from "@/helpers/updateSortDirection";
import {checkIsHidden} from "@/helpers/checkIsHidden";
export default Vue.extend({
  name: 'VGrid',
  methods: {checkIsHidden, setAlignment, checkIsHeader, checkIsHeaderLeaf},
  components: {SingleCell},
  props: {
    table: Object as () => ITable | null,
  },
  setup(props) {
    const clonedTable = ref<ITable | null>(null);
    const isOrderedAscending = ref<boolean>(true);

    const onSortArrowClicked = (row: IRow, colIndex: number) => {
      toggleSortDirection(row, colIndex)
      isOrderedAscending.value = updateSortDirectionRef(row, colIndex)
      if (clonedTable.value?.data?.rows) {
        clonedTable.value.data.rows = sortTable(clonedTable.value.data.rows, colIndex, isOrderedAscending.value)
      }
    }

    watch(
        () => props.table,
        (newVal: ITable | undefined) => {
          clonedTable.value = createTable(newVal, isOrderedAscending.value);
        }
    );

    return {
      clonedTable,
      isOrderedAscending,
      onSortArrowClicked
    };
  },
});

</script>


<style scoped lang="scss">
table {
  border-collapse: collapse;
  user-select: none;
}

tr,
th {
  border: 1px solid black;
}

.grid-row {
  margin: auto auto;

  .title {
    margin-bottom: 2rem;
  }
}
</style>
