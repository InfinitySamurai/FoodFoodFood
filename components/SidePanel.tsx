interface IProps {
  children?: React.ReactNode;
}

export const SidePanel = (props: IProps) => {
  return (
    <div className="fixed z-30 inset-y-0 left-0 w-60 transition duration-300 transform bg-white dark:bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0">
      <div className="flex items-center justify-center mt-8">
        <div className="flex items-center">
          <span className="text-gray-800 dark:text-white text-2xl font-semibold">
            Dashboard
          </span>
        </div>
      </div>
      <nav className="flex flex-col mt-10 px-4 text-center">
        {props.children}
      </nav>
    </div>
  );
};
