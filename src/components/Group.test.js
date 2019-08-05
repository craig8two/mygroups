import React from 'react';
import "./../setupTest";
import { shallow,  } from 'enzyme';
import { findByTestAtrr, checkProps } from './../../Utils';
import Group from './Group';

const setUp = (props={}) => {
    const component = shallow(<Group {...props} />);
    return component;
};

describe('Group Component', () => {

    let component;
    beforeEach(() => {
        const props = {
            key: 1,
            name: "Super great group",
            members: [{
                name: "Steve"
            }],
            memberToMemberBalance: [
                {
                    "amount": {
                        "formatted": "R31.64"
                    },
                    "fromMemberId": "5d1f12b23d63860002546cb6",
                    "toMemberId": "5d1f12b53d63860002546cc3"
                },
                {
                    "amount": {
                        "formatted": "R66.63"
                    },
                    "fromMemberId": "5d1f12bd3d63860002546d0d",
                    "toMemberId": "5d1f12b53d63860002546cc3"
                },
                {
                    "amount": {
                        "formatted": "R1.69"
                    },
                    "fromMemberId": "5d1f12bd3d63860002546d0d",
                    "toMemberId": "5d1f12b23d63860002546cb6"
                }
            ],
            currentMember: {
                "id": "5d1f12b53d63860002546cc3"
            },
        }
        component = setUp(props);
    });

    it('Should render without errors', () => {
        const wrapper = findByTestAtrr(component, 'groupComponent');
        expect(wrapper.length).toBe(1);
    });

    it('Calculate the member balance. It Should return 98.27', () => {
        const expectedValue = 98.27;
        expect(component.instance().memberBalance()).toBe(expectedValue);
    });

    it('Check group prop types, Should not return a warning', () => {
        //const expectedProps = {
        //    name: 'Make Pasta from Scratch',
        //    image: "https://admin.dev.kin.business/assets/group.icons/kin_group_im_2@2x.png"
        //}
        const propsErr = checkProps(Group, component.props)
        expect(propsErr).toBeUndefined();
    });
});



