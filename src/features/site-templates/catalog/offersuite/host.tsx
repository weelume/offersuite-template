'use client';
import { createContext, useContext, type ReactNode } from 'react';
import type { TemplateLocale } from '../../types';
export interface OfferSuiteHostOptions {
    brandName?: Record<TemplateLocale, string>;
    logo?: string;
    lightLogo?: string;
    marketplaceHref?: string;
    marketplaceLabel?: Record<TemplateLocale, string>;
    marketplaceAriaLabel?: Record<TemplateLocale, string>;
    filing?: ReactNode;
}
const Context = createContext<OfferSuiteHostOptions>({});
/** 宿主仅注入品牌和市场入口，通用页面不依赖宿主实现。 */
export function OfferSuiteHostProvider({ children, ...options }: OfferSuiteHostOptions & {
    children: ReactNode;
}) { return <Context.Provider value={options}>{children}</Context.Provider>; }
export function useOfferSuiteHost() { return useContext(Context); }
