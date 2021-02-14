import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import KitchenOutlinedIcon from '@material-ui/icons/KitchenOutlined';

interface IProps {
  text: string;
  link: string;
  selected?: boolean;
}

export const MenuItem = (props: IProps) => {
  return (
    <div>
      <ListItem button>
        <ListItemText>{props.text}</ListItemText>
        <ListItemIcon>
          <KitchenOutlinedIcon>
            {/* <a href={`/${props.link}`}></a> */}
          </KitchenOutlinedIcon>
        </ListItemIcon>
      </ListItem>
    </div>
  );
};
