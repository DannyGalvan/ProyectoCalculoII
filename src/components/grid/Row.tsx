interface RowProps {
  children: React.ReactNode;
  className?: string;
}

export const Row = ({ children, className }: RowProps) => {
  return <div className={`mx-4 flex flex-wrap ${className}`}>{children}</div>;
};
