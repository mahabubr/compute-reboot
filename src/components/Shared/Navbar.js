import { Button, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Link from "next/link";

const Navbar = () => {
  const menu = (
    <Menu>
      <Menu.Item>
        <Link href="/processor">Processor</Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/motherboard">Motherboard</Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/ram">RAM</Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/power-supply-unit">Power Supply Unit</Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/storage-device">Storage Device</Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/monitor">Monitor</Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="others">Others</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="bg-gray-950 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h2 className="text-white text-2xl font-bold">Compute Reboot</h2>
          </Link>
          <div>
            <Dropdown overlay={menu} trigger={["click"]}>
              <Button className="bg-white text-orange-600 hover:bg-orange-600 hover:text-white border-0">
                Categories <DownOutlined />
              </Button>
            </Dropdown>
          </div>
          <div className="">
            <Link href="/pc-build">
              <Button className="bg-white text-pink-600 hover:bg-pink-600 hover:text-white border-0">
                PC Builder
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
