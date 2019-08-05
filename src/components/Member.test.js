import React from 'react';
import "./../setupTest";
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from './../../Utils';
import Member from './Member';

const setUp = (props={}) => {
    const component = shallow(<Member {...props} />);
    return component;
};

describe('Member Component', () => {

    let component;
    beforeEach(() => {
        const props = {
            id: 1,
            name: 'Steve',
            image: "http://assets.dev.kin.business.s3.amazonaws.com/users/5be2c37464c9ff4dc985eaa6/5be2c37464c9ff4dc985eaa6-primary.jpg?uid=6dad4c30-09a2-447f-ba6f-5523c712da0a"
        }
        component = setUp(props);
    });

    it('Should render without errors', () => {
        const wrapper = findByTestAtrr(component, 'memberComponent');
        expect(wrapper.length).toBe(1);
    });

    it('Check member prop types, Should not return a warning', () => {
        const propsErr = checkProps(Member, component.props)
        expect(propsErr).toBeUndefined();
    });

});

