import Vue from "vue";
import { shallowMount, Wrapper} from "@vue/test-utils";
import SingleCell from "@/components/partials/SingleCell.vue";

describe('SingleCell.vue', () => {
  let wrapper: Wrapper<Vue>;
  beforeEach(() => {
    wrapper = shallowMount(SingleCell, {
      stubs: ['font-awesome-icon'],
    })
  })


  it("should render correct cell value", async () => {
    const testValue = "test value"
    await wrapper.setProps({cellValue: testValue})
    const cellValueArray = wrapper.findAll('.cell-value')
    expect(cellValueArray.length).toBe(1)
    expect(cellValueArray.at(0).text()).toBe(testValue)
  });
})
