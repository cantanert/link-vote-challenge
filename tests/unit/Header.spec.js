import {shallowMount} from "@vue/test-utils";
import component from '@/components/Header.vue'

describe('Header.vue', ()=> {
    it('should be staticly render a header which has an image and a title', () => {
        let wrapper = shallowMount(component);
        let renderedLogo = wrapper.findAll('.logo-wrapper');
        let renderedTitle = wrapper.findAll('.title-wrapper');
        expect(renderedLogo.length > 0).toBeTruthy();
        expect(renderedTitle.length > 0).toBeTruthy();
    });
});