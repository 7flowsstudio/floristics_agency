import { JSX } from 'react';

type Props = {
  svg: JSX.Element;
  size?: number;
};

export default function Star({ svg, size }: Props) {
  return <div style={{ width: size, height: size }}>{svg}</div>;
}
