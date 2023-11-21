import {shallowMount, Wrapper} from "@vue/test-utils";
import VGrid from "@/components/VGrid.vue";
import * as stach from './fixtures/stach-row-organized-package.json'
import Vue from "vue";

type Table = typeof stach.tables.main
describe('VGrid.vue', () => {
  let table: Table;
  let wrapper:Wrapper<Vue>;

  beforeEach(() => {
    table = stach.tables.main
    wrapper = shallowMount(VGrid)
  })

  it('should render caption', async () => {
    await wrapper.setProps({table})
    const captionElementArray = wrapper.findAll('.title')
    expect(captionElementArray.length).toBe(1)
  })

  it("should render correct number of tr elements", async () => {
    await wrapper.setProps({table})
    const trElementArray = wrapper.findAll('tr')
    expect(trElementArray.length).toBe(18)
  });
})
