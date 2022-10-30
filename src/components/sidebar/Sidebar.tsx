import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TableChartIcon from '@mui/icons-material/TableChart';
import { Link } from 'react-router-dom';

export const Sidebar = (
    <React.Fragment>
        <ListSubheader component="div" inset>
            Главное
        </ListSubheader>
        <ListItemButton component={Link} to="/">
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Главная" />
        </ListItemButton>
        <ListItemButton component={Link} to="/about">
            <ListItemIcon>
                <TableChartIcon />
            </ListItemIcon>
            <ListItemText primary="О себе" />
        </ListItemButton>
    </React.Fragment>
);

export const SecondSidebar = (
    <React.Fragment>
        <ListSubheader component="div" inset>
            Задания
        </ListSubheader>
        <ListItemButton component={Link} to="/slideshow">
            <ListItemIcon>
                <TableChartIcon />
            </ListItemIcon>
            <ListItemText primary="Слайд-шоу" />
        </ListItemButton>
        <ListItemButton component={Link} to="/calculator">
            <ListItemIcon>
                <TableChartIcon />
            </ListItemIcon>
            <ListItemText primary="Калькулятор" />
        </ListItemButton>
        <ListItemButton component={Link} to="/market">
            <ListItemIcon>
                <TableChartIcon />
            </ListItemIcon>
            <ListItemText primary="Магазин" />
        </ListItemButton>
        <ListItemButton component={Link} to="/test">
            <ListItemIcon>
                <TableChartIcon />
            </ListItemIcon>
            <ListItemText primary="Тест" />
        </ListItemButton>
        <ListItemButton component={Link} to="/change">
            <ListItemIcon>
                <TableChartIcon />
            </ListItemIcon>
            <ListItemText primary="Обмен рисунков" />
        </ListItemButton>
        <ListItemButton component={Link} to="/city">
            <ListItemIcon>
                <TableChartIcon />
            </ListItemIcon>
            <ListItemText primary="Города и памятники" />
        </ListItemButton>
    </React.Fragment>
);

