import { shallowMount } from "@vue/test-utils";
import FancyCheckbox from "@/components/FancyCheckbox.vue";

describe("FancyCheckbox.vue", () => {
  it("emits `change` event when value toggled", async () => {
    const wrapper = shallowMount(FancyCheckbox, {
      props: { checked: true }
    });

    await wrapper.trigger("click");
    expect(wrapper.emitted().change).toEqual([[false]]);

    await wrapper.setProps({ checked: false });
    await wrapper.trigger("click");
    expect(wrapper.emitted().change).toEqual([[false], [true]]);
  });
});
