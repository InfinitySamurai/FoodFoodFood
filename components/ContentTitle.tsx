interface IProps {
  title: string;
}

export const ContentTitle = (props: IProps) => {
  return (
    <div>
      <h1 className="text-2xl font-medium text-gray-800 dark:text-white">
        {props.title}
      </h1>
    </div>
  );
};
