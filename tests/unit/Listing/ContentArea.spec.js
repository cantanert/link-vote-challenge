import {shallowMount} from "@vue/test-utils";
import component from "@/components/Listing/ContentArea";
import ItemSubmitter from "@/components/Listing/ItemSubmitter";
import ItemListerWrapper from "@/components/Listing/ItemListerWrapper";

describe('ContentArea.vue', () => {
    it('should only wrap 2 sub-components', () => {
        let wrapper = shallowMount(component);
        let ItemSubmitterComponent = wrapper.findComponent(ItemSubmitter);
        let ItemListerWrapperComponent = wrapper.findComponent(ItemListerWrapper);
        expect(ItemSubmitterComponent.exists()).toBeTruthy();
        expect(ItemListerWrapperComponent.exists()).toBeTruthy();
    });
});