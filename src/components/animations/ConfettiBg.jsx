import React from 'react';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';

export const ConfettiBg = () => {
    const { width, height } = useWindowSize()
    return (
        <Confetti
            width={width}
            height={height}
        />
    )
}