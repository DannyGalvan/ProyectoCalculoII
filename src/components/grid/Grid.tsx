interface GridProps {
  children: React.ReactNode;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  className?: string;
}

export const Grid = ({ children, sm, md, lg, xl, className }: GridProps) => {
  const colClasses = [
    'grid',
    sm ? `gcol-sm-${sm}` : 'grid-flow-col',
    md ? `gcol-md-${md}` : '',
    lg ? `gcol-lg-${lg}` : '',
    xl ? `gcol-xl-${xl}` : '',
    'px-2',
    className,
  ];
  return <div className={colClasses.join(' ')}>{children}</div>;
};
