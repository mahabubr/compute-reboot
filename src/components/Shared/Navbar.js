import { Button, Drawer, Dropdown, Menu } from "antd";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const { data: session } = useSession();

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
          <div className="sm:hidden">
            {/* Mobile Menu (Drawer) */}
            <Button
              onClick={() => setDrawerVisible(true)}
              className="bg-white text-orange-600 hover:bg-orange-600 hover:text-white border-0"
            >
              <MenuOutlined />
            </Button>
          </div>
          <div className="hidden sm:block space-x-4">
            {/* Full Menu (hidden on small screens) */}
            <Dropdown overlay={menu} trigger={["click"]}>
              <Button className="bg-white text-orange-600 hover:bg-orange-600 hover:text-white border-0">
                Categories <DownOutlined />
              </Button>
            </Dropdown>
            <Link href="/pc-build">
              <Button type="primary">PC Builder</Button>
            </Link>
            {session?.user && session?.user.email ? (
              <Button onClick={() => signOut()} type="default">
                Log Out
              </Button>
            ) : (
              <Link href="/login">
                <Button type="default">Login</Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Drawer for Mobile */}
      <Drawer
        visible={drawerVisible}
        onClose={() => setDrawerVisible(false)}
        placement="right"
        closable={false}
        width="250"
      >
        <div className="space-y-4">
          {/* Categories Dropdown */}
          <Menu className="w-full">
            {categories?.map((cat) => (
              <Menu.Item key={cat._id}>
                <Link href={`/category/${cat._id}`}>{cat.name}</Link>
              </Menu.Item>
            ))}
          </Menu>
          <Link href="/pc-build">
            <Button type="primary" className="w-full">
              PC Builder
            </Button>
          </Link>
          {session?.user && session?.user.email ? (
            <Button onClick={() => signOut()} className="w-full" type="default">
              Log Out
            </Button>
          ) : (
            <Link href="/login">
              <Button className="w-full" type="default">
                Login
              </Button>
            </Link>
          )}
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
