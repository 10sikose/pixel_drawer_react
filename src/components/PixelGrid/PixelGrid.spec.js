import React from 'react';
import { shallow } from 'enzyme';
import PixelGrid from './PixelGrid';
import PixelItem from '../PixelItem/PixelItem';

describe('Grid', () => {
    let wrapper;

    beforeEach(
        () => wrapper = shallow(<PixelGrid width={70} height={45} />)
    );

    it('should render 45 rows of className "row"', () => {
        expect(wrapper.find('.row').length).toEqual(45);
    });

    it('should render 3150 Pixel components', () => {
        expect(wrapper.find(PixelItem).length).toEqual(3150);
    });


});