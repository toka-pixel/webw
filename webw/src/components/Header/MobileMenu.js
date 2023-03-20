import { Drawer } from "antd";
import links from "./NavigationLinks.json";
import Button from "../shared-components/Button/Button";
import { useState } from "react";
import "./MobileMenu.scss";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="mobileMenu">

      <h1 className='logo'>St<span className="v">v</span>dy</h1>
      <div className="menu" onClick={showDrawer}>
        <img src="/imgs/menu.svg" />
      </div>
      <Drawer title="Study" placement="left" onClose={onClose} open={open} className='custom-menu'>
        <ul>
          {links.map((item) => (
            <li key={item.id}>{item.item}</li>
          ))}
        </ul>
        <br/>
        <Button>About us</Button>
      </Drawer>
    </div>
  );
};
export default MobileMenu;
