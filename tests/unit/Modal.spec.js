import {shallowMount} from "@vue/test-utils";
import component from '@/components/Modal.vue'

describe('Modal.vue ', () => {
    let wrapper = shallowMount(component,{
        propsData:{
            isVisible: true
        },
        stubs: ['b-icon']
    });

    it('should not be visible without props', () => {
        let wrapper = shallowMount(component);
        const divs = wrapper.findAll('div');
        expect(divs.length).toBe(0);
    });

    it('should be visible with props as true',  () => {
        const divs = wrapper.findAll('div');
        expect(divs.length > 0).toBeTruthy();
    });

    it('should be emit a value on click OK button', async () => {
        wrapper.find('#ok').trigger('click');
        await wrapper.vm.$nextTick();
        expect(wrapper.emitted('deleteApproved')).toBeTruthy();
    });

    it('should be emit a value on click CANCEL button', async () => {
        wrapper.find('#cancel').trigger('click');
        await wrapper.vm.$nextTick();
        expect(wrapper.emitted('deleteDeclined')).toBeTruthy();
    });

    it('should be emit a value on click modals closer icon', async () => {
        wrapper.find('.closer-icon').trigger('click');
        await wrapper.vm.$nextTick();
        expect(wrapper.emitted('deleteDeclined')).toBeTruthy();
    });
});