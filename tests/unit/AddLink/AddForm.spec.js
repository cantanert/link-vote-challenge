import {shallowMount} from "@vue/test-utils";
import component from '@/components/AddLink/AddForm.vue';
import Toast from '@/components/Toast.vue';
import ReturnLink from '@/components/AddLink/ReturnLink.vue';

describe('AddForm.vue', () => {
   let wrapper = shallowMount(component);

    it('should have Toast and Toast components', () => {
        expect(wrapper.contains(Toast)).toBeTruthy();
    });

    it('should have Toast and Return Link components', () => {
        expect(wrapper.contains(ReturnLink)).toBeTruthy();
    });
});