import {shallowMount} from "@vue/test-utils";
import component from '@/components/Toast.vue'

describe('Toast.vue', () => {
    let wrapper = shallowMount(component,{
        propsData:{
            items: ['Stack Overflow'],
            actionTitle: 'deleted'
        }
    });

    it('should not rendered without props ',() => {
        let wrapper = shallowMount(component);
        let renderedItems = wrapper.findAll('.toast-item');
        expect(renderedItems.length === 0).toBeTruthy();
    });

    it('should render text with given props', () => {
        let renderedItem = wrapper.find('.toast-item');
        expect(renderedItem.text()).toBe('Stack Overflow deleted.');
    });

});