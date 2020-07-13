import {shallowMount} from "@vue/test-utils";
import component from '@/components/CustomPagination.vue';

describe('CustomPagination.vue' ,() => {
    let wrapper = shallowMount(component,{
        propsData: {
            totalPages: 10,
            currentPage: 3,
            maxButtonCount: 5
        },
        stubs: ['b-icon']
    });

    it('should not have a pagination button without props', () => {
        let wrapper = shallowMount(component,{
            stubs: ['b-icon']
        });
        let paginationButtons = wrapper.findAll('.page-button');
        expect(paginationButtons.length).toBe(0);
    });

    it('should have as many buttons as maxButtonCount props', () => {
        let paginationButtons = wrapper.findAll('.page-button');
        expect(paginationButtons.length).toBe(5);
    });

    it('should emit an action when previous button clicked',  async () => {
        wrapper.find('#previous-button').trigger('click');
        await wrapper.vm.$nextTick();
        expect(wrapper.emitted('pageChanged')).toBeTruthy();
    });

    it('should emit an action when next button clicked',  async () => {
        wrapper.find('#next-button').trigger('click');
        await wrapper.vm.$nextTick();
        expect(wrapper.emitted('pageChanged')).toBeTruthy();
    });

    it('should emit an action when pagination button numbers clicked',  async () => {
        wrapper.findAll('.page-button').trigger('click');
        await wrapper.vm.$nextTick();
        expect(wrapper.emitted('pageChanged')).toBeTruthy();
    });
});
