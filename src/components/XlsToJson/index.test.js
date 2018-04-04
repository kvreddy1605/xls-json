import React from 'react';
import XlsToJson from './index';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('XlsToJson Component Test', () => {

    it('SnapShot Test', () => {
        const wrapper = shallow(<XlsToJson onJSONOutput={() => null} />)
    
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    it('testing validateFileExtension method', () => {
        const wrapper = shallow(<XlsToJson onJSONOutput={() => null} />)
        
        expect(wrapper.instance().validateFileExtension('test.xls')).toBe(true);
        expect(wrapper.instance().validateFileExtension('test.xls.txt')).toBe(false);
    })
})




