import React from 'react';
import { shallow } from 'enzyme';
import Toolbox from './Toolbox';

descripe('Toolbox', () => {
    let wrapper;

    beforeEach(
        () => wrapper = shallow(<Toolbox />)
    );
});