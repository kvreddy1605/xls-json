import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DragDropFile from './index';

describe('DragDropFile Component Test', () => {
    it('SnapShot Test', () => {
        const wrapper = shallow(<DragDropFile />)
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    it('drop Event trigger, handleFile is called', () => {
        const handleFile = jest.fn();
        const wrapper = shallow(<DragDropFile handleFile={handleFile}/>)
        wrapper.find('div').simulate('drop', {dataTransfer: {files: [1,2,3]}, stopPropagation(){}, preventDefault(){} });
        expect(handleFile).toHaveBeenCalledWith(1);
    })
})
