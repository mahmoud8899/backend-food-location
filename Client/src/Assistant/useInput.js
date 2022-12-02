import React from 'react';
import {Validate} from './Validation'

export function useInput(initialInput, rules) {

    const [input, changeInput] = React.useState({
        value: initialInput | '',
        isValid: false,
        Touch: false
    });

    const updateInput = inputVal => {
        changeInput({
            value: inputVal,
            isValid: Validate(inputVal, rules),
            Touch: true,
        });
    };

    return [input, updateInput];
}