import { Link, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import KitchenOutlinedIcon from '@material-ui/icons/KitchenOutlined';

interface IProps {
  text: string;
  link: string;
  selected?: boolean;
}

export const MenuItem = (props: IProps) => {
  return (
    <Link href={props.link} color="inherit">
      <ListItem button selected={props.selected}>
        <ListItemIcon>
          <KitchenOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary={props.text} />
      </ListItem>
    </Link>
  );
};
