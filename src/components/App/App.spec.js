import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import PixelGrid from '../PixelGrid/PixelGrid';
import Toolbox from '../Toolbox/Toolbox';
//import SavedList from '../SavedList/SavedList';
import COLORS from '../../shared/colors';

describe('App', () => {
    let wrapper;

    beforeEach(
        () => wrapper = shallow(<App />)
    );

    it('should contain a div with id of "app-container"', () => {
        expect(wrapper.find("div#app-container").length).toEqual(1);
    });

    it('should contain a Grid element', () => {
        expect(wrapper.containsMatchingElement(<PixelGrid />)).toEqual(true);
    });

    it('should contain a Toolbox element', () => {
        expect(wrapper.containsMatchingElement(<Toolbox />)).toEqual(true);
    });

    /*it('should contain a SavedList element', () => {
        expect(wrapper.containsMatchingElement(<SavedList />)).toEqual(true);
    });
    */

    it('default color should match COLORS.defaultColor', () => {
        expect(wrapper.instance().getCurrentColor()).toEqual(COLORS.defaultColor);
    });

    it('drawing mode should be deactivated by default', () => {
        expect(wrapper.instance().isDrawingActivated()).toEqual(false);
    });

    it('calling activateDrawing method should turn drawingActivated to true', () => {
        wrapper.instance().activateDrawing();
        expect(wrapper.instance().isDrawingActivated()).toEqual(true);
    });

    it('calling deactivateDrawing method should turn drawingActivated to false', () => {
        wrapper.instance().activateDrawing();
        wrapper.instance().deactivateDrawing();
        expect(wrapper.instance().isDrawingActivated()).toEqual(false);
    });


});