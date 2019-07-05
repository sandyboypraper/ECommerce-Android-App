import React from 'react';
import {Icon} from 'react-native-elements';

import HeaderBtn from './Headerbtn';
import {theme} from '../constraints/theme';

const CloseBtn = ({color , size , ...rest}) => (
                <HeaderBtn {...rest}>
                             <Icon
                                name='x'
                                size = {size}
                                type='feather'
                                color={color}
                            />
                </HeaderBtn>
)

CloseBtn.defaultProps = {
    color: theme.color.black,
    size: 18,
}

export default CloseBtn;