import {shallowMount} from "@vue/test-utils";
import component from '@/components/Listing/Item.vue';

describe('Item.vue', () => {
    let wrapper = shallowMount(component,{
        propsData:{
            item: {
                title: 'example',
                url: 'www.example.com',
                point: 10
            }
        },
        stubs: ['b-icon']
    });

    let remover = wrapper.find('.remover');

    it('should show item informations which came with props ', () => {
        let itemTitleElement = wrapper.find('.item-name');
        let itemUrlElement = wrapper.find('.item-address');
        let itemPoinElement = wrapper.find('.point');
        expect(itemPoinElement.text()).toBe('10');
        expect(itemTitleElement.text()).toBe('example');
        expect(itemUrlElement.text()).toBe('www.example.com');
    });

    it('should hide remover button on load', () => {
        expect(remover.attributes().style).toBe('display: none;');
    });

    it('should show remover button on mouseover event', async () => {
        remover.trigger('mouseover');
        await wrapper.vm.$nextTick();
        expect(remover.attributes().style).toBe('');
    });

    it('should open delete confirmation modal', async () => {
        remover.trigger('click');
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.$data.isModalOpen).toBeTruthy();
    });


});