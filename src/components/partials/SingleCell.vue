<template>
  <div class="cell" :class="isHeaderLeaf && isHeader ? 'clickable' : ''" @click="isHeaderLeaf && isHeader && $emit('sort:table')">
    <span class="cell-value">{{ text }}</span>
    <div v-if="isHeaderLeaf && isHeader">
      <font-awesome-icon :icon="'fa ' + (isAscending ? 'fa-chevron-down' : 'fa-chevron-up')" class="arrow-icon" ></font-awesome-icon>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, {ref, watch} from "vue";
import {setCellValue} from "@/helpers/setCellValue";

export default Vue.extend({
  name: "SingleCell",
  props : {
    cellValue: String,
    isHeaderLeaf: Boolean,
    isHeader: Boolean,
    isAscending: Boolean,
  },
  setup(props) {
    const text = ref("");
    text.value = setCellValue(props.cellValue, props.isHeader);

    watch(() => props.cellValue, () => {
      text.value = setCellValue(props.cellValue, props.isHeader);
    });

    return {
      text,
    };
  },
});

// const props = defineProps({
//   cellValue: {
//     type: String,
//     required: true,
//   },
//   isHeaderLeaf: {
//     type: Boolean,
//     required: true,
//   },
//   isHeader: {
//     type: Boolean,
//     required: true,
//   },
// });
//
// const text = ref("");
// text.value = setCellValue(props.cellValue, props.isHeader);

</script>

<style scoped lang="scss">
.cell {
  display: inline-flex;
  padding: 0 1rem;

  &.clickable {
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: #eeeeee;
    }
  }

  .arrow-icon {
    font-size: 10px;
    align-self: center;
    margin-left: 4px;
  }
}
</style>
