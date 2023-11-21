<template>
    <div class="grid-row">
      <table class="table" v-if="table && table.data">
        <caption class="title">
          Example Table
        </caption>
        <tbody >
        <tr
            v-for="(row, rowIndex) in table.data.rows"
            :key="rowIndex"
            class="table-row"

        >
          <th
              v-for="(cellValue, columnIndex) in row.cells"
              :rowspan="row.headerCellDetails && row.headerCellDetails[columnIndex]['rowspan']"
              :colspan="row.headerCellDetails && row.headerCellDetails[columnIndex]['colspan']"
              :key="columnIndex"
              :style="{
              textAlign: setAlignment(
                table,
                row,
                Number(columnIndex),
                'horizontal'
              ),
              verticalAlign: setAlignment(
                table,
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
            />
          </th>
        </tr>
        </tbody>
      </table>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import {ITable} from "@/types";
import SingleCell from "@/components/partials/SingleCell.vue";
import {checkIsHeaderLeaf} from "@/helpers/checkIsHeaderLeaf";
import {checkIsHeader} from "@/helpers/checkIsHeader";
import {setAlignment} from "@/helpers/setAlignment";
export default Vue.extend({
  name: 'VGrid',
  methods: {setAlignment, checkIsHeader, checkIsHeaderLeaf},
  components: {SingleCell},
  props: {
    table: Object as () => ITable | null,
  },
});

</script>


<style scoped lang="scss">
table {
  border-collapse: collapse;
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
