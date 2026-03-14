import { JSX } from 'react';

export type Star = {
  svg: JSX.Element;
  position: Partial<{
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  }>;
  size?: number;
  rotate?: number;
};
