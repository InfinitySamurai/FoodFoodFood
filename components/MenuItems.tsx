interface IProps {
  text: string;
  link: string;
}

export const MenuItem = (props: IProps) => {
  return (
    <div className="mt-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100  hover:bg-gray-200 dark:hover:bg-gray-800 rounded">
      <a href={props.link}>{props.text}</a>
    </div>
  );
};
