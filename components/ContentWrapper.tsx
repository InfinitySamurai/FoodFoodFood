interface IProps {
  children?: React.ReactNode;
}

export const ContentWrapper = (props: IProps) => {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <header className="flex justify-between items-center p-6">
        <div className="flex items-center space-x-4 lg:space-x-0">
          {props.children}
        </div>
      </header>
    </div>
  );
};
