export const navHeight = '90px'
export const SecondaryTextColor = '#b8b8b8'

export const ITgreen = '#006633';
export const ITred = '#990033';
export const Lblue = '#333366';
export const HeroColor = '#0070B6';

// Viewports. Starting from 375px
export const xsViewport = '520px'
export const sViewport = '768px'
export const xmViewport = '992px'
export const mViewport = '1024px'

// font-sizes
export const title = (viewport = '') => viewport === xsViewport ? '2rem' : viewport === sViewport ? '2.3rem' : viewport === mViewport ? '2.5rem' : '1.5rem'
export const priText = (viewport = '') => viewport === xsViewport ? '1.3rem' : viewport === sViewport ? '1.5rem' : viewport === mViewport ? '1.7rem' : '.7rem'
export const secText = (viewport = '') => viewport === xsViewport ? '1rem' : viewport === sViewport ? '1.3rem' : viewport === mViewport ? '1.5rem' : '.7rem'