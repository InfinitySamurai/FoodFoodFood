interface IProps {
  text: string;
  link: string;
  selected?: boolean;
}

const classCommonComponents = 'text-sm rounded py-2';
const selectedClass =
  ' text-gray-700 dark:text-gray-100 bg-gray-200 dark:bg-gray-800';
const unselectedClass =
  'text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100  hover:bg-gray-200 dark:hover:bg-gray-800';

export const MenuItem = (props: IProps) => {
  const componentClass = props.selected
    ? `${selectedClass} ${classCommonComponents}`
    : `${unselectedClass} ${classCommonComponents}`;
  return (
    <div className={componentClass}>
      <a href={props.link}>{props.text}</a>
    </div>
  );
};
