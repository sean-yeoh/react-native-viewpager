/// <reference types="react" />
import type { default as ViewPager, ViewPagerOnPageSelectedEvent, ViewPagerOnPageScrollEvent, PageScrollStateChangedNativeEvent } from '@react-native-community/viewpager';
import { CreatePage } from '../utils';
export declare type UseNavigationPanelProps = ReturnType<typeof useNavigationPanel>;
export interface EventLog {
    event: 'scroll' | 'select' | 'statusChanged';
    text: string;
    timestamp: Date;
}
export declare function useNavigationPanel(pagesAmount?: number): {
    ref: import("react").RefObject<ViewPager>;
    activePage: number;
    isAnimated: boolean;
    pages: CreatePage[];
    scrollState: string;
    scrollEnabled: boolean;
    dotsEnabled: boolean;
    progress: {
        position: number;
        offset: number;
    };
    setPage: (page: number) => void;
    addPage: () => void;
    removePage: () => void;
    toggleScroll: () => void;
    toggleDots: () => void;
    toggleAnimation: () => void;
    setProgress: import("react").Dispatch<import("react").SetStateAction<{
        position: number;
        offset: number;
    }>>;
    onPageScroll: (e: ViewPagerOnPageScrollEvent) => void;
    onPageSelected: (e: ViewPagerOnPageSelectedEvent) => void;
    onPageScrollStateChanged: (e: PageScrollStateChangedNativeEvent) => void;
    logs: EventLog[];
};
