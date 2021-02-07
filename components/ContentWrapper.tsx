interface IProps {
  children?: React.ReactNode;
}

export const ContentWrapper = (props: IProps) => {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">{props.children}</div>
  );
};
