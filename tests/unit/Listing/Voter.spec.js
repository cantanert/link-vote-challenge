import {shallowMount} from "@vue/test-utils";
import component  from '@/components/Listing/Voter.vue';

describe('Voter.js',() => {
    let wrapper = shallowMount(component,{
        stubs: ['b-icon-arrow-up-short','b-icon-arrow-down-short']
    });

    it('should have down voter button', async () => {
        let downVoter = wrapper.find('.down-voter-wrapper button');
        expect(downVoter.text()).toBe('Down vote');
    });

    it('should have up voter button', async () => {
        let upVoter = wrapper.find('.up-votter-wrapper button');
        expect(upVoter.text()).toBe('Up vote');
    });

    it('should emit an event on click up voter button', async () => {
        let button = wrapper.find('.up-votter-wrapper button');
        button.trigger('click');
        await wrapper.vm.$nextTick();
        expect(wrapper.emitted('upVoted')).toBeTruthy();
    });

    it('should emit an event on click down voter button', async () => {
        let button = wrapper.find('.down-voter-wrapper button');
        button.trigger('click');
        await wrapper.vm.$nextTick();
        expect(wrapper.emitted('downVoted')).toBeTruthy();
    });
});