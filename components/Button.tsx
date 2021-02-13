interface Props {
  text: string;
}

export const Button = (props: Props) => {
  return (
    <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {props.text}
    </div>
  );
};
