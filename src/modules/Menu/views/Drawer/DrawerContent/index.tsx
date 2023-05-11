import {
  Box,
  IconButton,
  List,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  SvgIcon,
  Toolbar,
  Typography,
} from "@mui/material";
import WidgetsIcon from "@mui/icons-material/WidgetsOutlined";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import StyledListItemButton from "components/ListItemButton";

import { ReactComponent as CakeIcon } from "assets/icons/cake.svg";
import { ReactComponent as CupCakeIcon } from "assets/icons/cupcake.svg";
import { ReactComponent as JellyIcon } from "assets/icons/jelly.svg";
import { ReactComponent as PayIcon } from "assets/icons/pay.svg";

type Props = {
  categories: string[];
  handleCategoryActive: (newCategory: string) => void;
  handleDrawer: () => void;
  categoryActive: string;
  open: boolean;
};

export const DrawerContent = ({
  categories,
  handleCategoryActive,
  handleDrawer,
  categoryActive,
  open,
}: Props) => {
  const sideBarIcons: any[] = [
    <WidgetsIcon sx={{ fontSize: "25px" }} />,
    <WidgetsIcon sx={{ fontSize: "25px" }} />,
    <WidgetsIcon sx={{ fontSize: "25px" }} />,
    <WidgetsIcon sx={{ fontSize: "25px" }} />,
    <WidgetsIcon sx={{ fontSize: "25px" }} />,
  ];

  return (
    <>
      <Toolbar
        sx={{
          justifyContent: open ? "space-between" : "center",
          p: { xs: "0px", sm: "0px" },
          mb: 2,
        }}
      >
        {open ? (
          <Box pl={2}>
            <Typography variant="label"> Filtros </Typography>
          </Box>
        ) : (
          <></>
        )}

        <IconButton
          sx={{ minWidth: open ? "25px" : 0, p: 0 }}
          onClick={handleDrawer}
          disableFocusRipple
          disableTouchRipple
          disableRipple
        >
          {open ? (
            <ArrowBackIosNewIcon sx={{ fontSize: "25px" }} />
          ) : (
            <ArrowForwardIosIcon sx={{ fontSize: "25px" }} />
          )}
        </IconButton>
      </Toolbar>
      <List
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            sx={{ transition: "0.2s", opacity: open ? "1" : "0" }}
          >
            Categorias
          </ListSubheader>
        }
      >
        {categories.map((name, index) => (
          <StyledListItemButton
            disableTouchRipple
            origin="drawer"
            key={name}
            sx={{
              p: open ? "auto" : 1,
              justifyContent: "center",
            }}
            isActive={name === categoryActive}
            onClick={() => handleCategoryActive(name)}
          >
            <ListItemIcon sx={{ minWidth: open ? "56px" : 0 }}>
              {sideBarIcons[index]}
            </ListItemIcon>
            {
              <ListItemText
                sx={{
                  display: open ? "block" : "none",
                }}
                primary={name}
              />
            }
          </StyledListItemButton>
        ))}
      </List>
    </>
  );
};
