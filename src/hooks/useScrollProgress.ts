import { useState, useEffect } from 'react';

export function useScrollProgress() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const calculateScrollProgress = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight - windowHeight;
            const scrolled = window.scrollY;
            const progress = Math.min(scrolled / documentHeight, 1);
            setScrollProgress(progress);
        };

        calculateScrollProgress();
        window.addEventListener('scroll', calculateScrollProgress);
        window.addEventListener('resize', calculateScrollProgress);

        return () => {
            window.removeEventListener('scroll', calculateScrollProgress);
            window.removeEventListener('resize', calculateScrollProgress);
        };
    }, []);

    return scrollProgress;
}

export function useScrollSection(sectionId: string) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const calculateProgress = () => {
            const section = document.getElementById(sectionId);
            if (!section) return;

            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top + window.scrollY;
            const sectionHeight = rect.height;
            const windowHeight = window.innerHeight;
            const scrollY = window.scrollY;

            // Calculate when section enters and leaves viewport
            const start = sectionTop - windowHeight;
            const end = sectionTop + sectionHeight;
            const scrollRange = end - start;
            const currentScroll = scrollY - start;

            const sectionProgress = Math.max(0, Math.min(1, currentScroll / scrollRange));
            setProgress(sectionProgress);
        };

        calculateProgress();
        window.addEventListener('scroll', calculateProgress);
        window.addEventListener('resize', calculateProgress);

        return () => {
            window.removeEventListener('scroll', calculateProgress);
            window.removeEventListener('resize', calculateProgress);
        };
    }, [sectionId]);

    return progress;
}
