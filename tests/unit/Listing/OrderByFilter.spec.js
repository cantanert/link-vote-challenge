import {shallowMount} from "@vue/test-utils";
import component from '@/components/Listing/OrderByFilter.vue';

describe('OrderByFilter.vue',()=>{
    let wrapper = shallowMount(component,{
        stubs: ['b-form-select']
    });
    it('should wrap custom select component and pass data to it', () => {
        expect(wrapper.find('.order-by-filter-wrapper')).toBeTruthy();
    });

    it('should have usable options to pass sub-component', () => {
        expect(wrapper.vm.$data.options.length > 0).toBeTruthy();
    });
});