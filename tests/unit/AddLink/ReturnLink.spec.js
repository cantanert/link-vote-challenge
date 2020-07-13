import {shallowMount} from "@vue/test-utils";
import component from "@/components/AddLink/ReturnLink";


describe('ReturnLink.vue', () => {
    let wrapper = shallowMount(component,{
        propsData:{
            url: '/list',
            text: 'Return to List'
        },
        stubs: ['b-icon']
    });

    it('should render a clickable link with given prop', async () => {
        let link = wrapper.find('.return-link');
        expect(link.text()).toBe('Return to List');
    });

});