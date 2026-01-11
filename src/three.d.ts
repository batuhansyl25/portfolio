import * as THREE from 'three';

declare module '@react-three/fiber' {
    interface ThreeElements {
        // Add any custom three.js elements here if needed
    }
}

// Extend Window to include THREE for Canvas gl properties
declare global {
    interface Window {
        THREE: typeof THREE;
    }
}

export { };
