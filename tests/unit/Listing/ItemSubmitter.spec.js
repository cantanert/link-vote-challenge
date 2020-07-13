import {shallowMount} from "@vue/test-utils";
import component from '@/components/Listing/ItemSubmitter.vue';

describe('',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = shallowMount(component,{
            methods: {
                goToAddLink: () => {}
            },
            stubs: ['<b-form-select>']
        });
    });
    it('should run router method on click button ', async () => {
        let itemSubmitter = wrapper.find('.item-submitter-wrapper');
        itemSubmitter.trigger('click');
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.goToAddLink).toHaveBeenCalled;
    });
});