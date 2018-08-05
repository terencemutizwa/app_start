import React from 'react';
import moment from 'moment';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from './Footer.component';

configure({adapter: new Adapter()});

let wrapper;
beforeEach(() => {
    wrapper = shallow(<Footer />);
});

describe('<Footer />', () => {
    it('should have latest copyright', () => {
        const year = moment().format('YYYY');
        const copyDate = wrapper.find('.copy_date');
        expect(copyDate.render().text().includes(year)).toEqual(true);
    });

});
