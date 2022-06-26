import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React from "react";
import { useTicTacToe } from "../contexts/TicTacToeContext";

const Header: React.FC = () => {
  const { me } = useTicTacToe();

  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="https://flowbite.com/">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={
            <Avatar
              alt="User settings"
              img={
                me === "X"
                  ? "https://i.scdn.co/image/ab6761610000e5eb9319d939accc1f1e22155955"
                  : "https://img.estadao.com.br/fotos/crop/1200x900/resources/jpg/5/5/1553173579355.jpg"
              }
              rounded={true}
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">
              {me === "X"
                ? "Edinaldo Pereira"
                : "Nego Ney"}
            </span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">About</Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
