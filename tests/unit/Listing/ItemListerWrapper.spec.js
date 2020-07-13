import {shallowMount} from "@vue/test-utils";
import component from '@/components/Listing/ItemListerWrapper.vue';
import OrderByFilter from "../../../src/components/Listing/OrderByFilter";
import ItemLister from "../../../src/components/Listing/ItemLister";

describe('ItemListerWrapper.vue', ()=> {
    let wrapper = shallowMount(component,{
        stubs: ['ItemLister','OrderByFilter']
    });
    it('should have OrderByFilter component ', () => {
        expect(wrapper.contains(OrderByFilter)).toBeTruthy();
    });

    it('should have ItemLister component', () => {
        expect(wrapper.contains(ItemLister)).toBeTruthy();
    });
});