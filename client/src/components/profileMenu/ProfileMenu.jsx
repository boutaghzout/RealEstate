import React from "react";
import { Avatar, Menu, MenuItem } from "@mantine/core";
const ProfileMenu = ({ user, logout }) => {
  return (
    <Menu>
      <Menu.Target>
        <Avatar src={user?.picture} alt="user image " radius={"xl"} />
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>Favorites</Menu.Item>
        <MenuItem>Bookings</MenuItem>
        <Menu.Item
          onClick={() => {
            localStorage.clear();
            logout();
          }}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
export default ProfileMenu;
