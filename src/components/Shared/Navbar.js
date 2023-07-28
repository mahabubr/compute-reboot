import { Button, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data));
  }, []);

  const menu = (
    <Menu className="w-56">
      {categories?.map((cat) => (
        <Menu.Item key={cat._id}>
          <Link href={`/category/${cat._id}`}>{cat.name}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className="bg-gray-950 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="no-underline">
            <h2 className="text-white text-2xl font-bold ">Compute Reboot</h2>
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
