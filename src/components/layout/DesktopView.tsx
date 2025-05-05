// src/components/layout/DesktopView.tsx
import React from 'react';
import AppRoutes from '../../Routes';

export interface DesktopViewProps {
  onSmoothScroll: (sectionId: string) => void;
  isMobileView: boolean;
}

export default function DesktopView({ onSmoothScroll, isMobileView }: DesktopViewProps) {
  return <AppRoutes onSmoothScroll={onSmoothScroll} isMobileView={isMobileView} />;
}