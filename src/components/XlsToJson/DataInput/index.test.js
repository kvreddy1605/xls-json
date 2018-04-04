import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DataInput from './index';

describe('DataInput Component Test', () => {
    it('SnapShot Test', () => {
        const wrapper = shallow(<DataInput />)
    
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    it('change Event trigger, handleFile is called', () => {
        const handleFile = jest.fn();
        const wrapper = shallow(<DataInput handleFile={handleFile}/>)
        wrapper.find('input').simulate('change', { target: {files: [1,2,3]} });
        expect(handleFile).toHaveBeenCalledWith(1);
    })
})
