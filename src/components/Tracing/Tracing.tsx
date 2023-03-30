// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import medicarePrescriptionDrugDesktop from './medicare-prescription-drug-desktop.png';
import medicarePrescriptionDrugMobile from './medicare-prescription-drug-mobile-2.png';

const initialScroll = 90 + 1000;

/**
 * Component used to display a foreground image with some degree of opacity. Useful to trace the original design.
 * @constructor
 */
export const Tracing = () => {
    const isLargeScreen = false;
    const bgImage = isLargeScreen ? medicarePrescriptionDrugDesktop : medicarePrescriptionDrugMobile;

    const [show, setShow] = useState(true);
    const showRef = useRef(show);
    const [opacity, setOpacity] = useState(0.5);
    const prevX = useRef(null);
    const smooth = 0.01;
    const THROTTLE_DURATION = 10;

    const throttle = (() => {
        let timeout;
        return (callback) => {
            if (timeout === undefined) {
                callback();
                timeout = setTimeout(() => (timeout = undefined), THROTTLE_DURATION);
            }
        };
    })();

    const throttlify =
        (callback) =>
            (...args) =>
                throttle(() => callback.apply(null, args));

    useEffect(() => {
        const saveMousePosition = throttlify((event) => {
            handleMouseMove({ ctrlKey: event.ctrlKey, clientX: event.clientX });
        });

        document.addEventListener('mousemove', saveMousePosition);
        return () => {
            document.removeEventListener('mousemove', saveMousePosition);
        };
    }, [setOpacity]);

    const handleMouseMove = ({ clientX, ctrlKey }) => {
        if (!showRef.current) return;
        if (!ctrlKey) {
            prevX.current = null;
            return;
        }

        if (prevX.current === null) prevX.current = clientX;
        const delta = clientX - prevX.current;
        prevX.current = clientX;

        setOpacity((currentOpacity) => Math.max(0, Math.min(1, currentOpacity + delta * smooth)));
    };

    useEffect(() => {
        setTimeout(() => document.body.parentElement.scrollTop = initialScroll, 100);
        setTimeout(() => document.body.parentElement.scrollTop = initialScroll, 1000);
    }, []);

    const handleKey = ({ altKey, code, ctrlKey, shiftKey }) => {
        document.body.parentElement.scrollTop = initialScroll;
        if (altKey && ctrlKey && shiftKey && code === 'KeyA') {
            setShow((value) => {
                showRef.current = !value;
                return !value;
            });
        }
    };

    useEffect(() => {
        if (typeof document === 'undefined') return;

        document.addEventListener('keypress', handleKey);

        return () => {
            if (typeof document === 'undefined') return;
            document.removeEventListener('keypress', handleKey);
        };
    });

    if (!show) return null;

    return (
        <div
            style={{
                pointerEvents: 'none',
                backgroundImage: `url('${bgImage}')`,
                position: 'fixed',
                /*
                top: 0,
                top: '-38px',
                 */
                top: '-1038px',
                bottom: 0,
                left: 0,
                width: '100%',
                border: 'none',
                boxSizing: 'border-box',
                backgroundSize: '100%',
                opacity,
                zIndex: 5050,
            }}
        />
    );
};
