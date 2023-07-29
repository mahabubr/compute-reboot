import { Card } from "antd";
import Link from "next/link";

const Catagories = ({ catagories }) => {
  return (
    <div className="container mx-auto w-11/12 my-20">
      <div>
        <h2 className="text-center text-xl text-orange-600 font-black">
          Featured Category
        </h2>
        <p className="text-center text-sm my-1 text-gray-700">
          Get Your Desired Product from Featured Category !
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10">
        {catagories.map((cat) => (
          <Link
            href={`/category/${cat._id}`}
            className="no-underline"
            key={cat._id}
          >
            <Card hoverable className="rounded-none  text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                />
              </svg>
              <h2 className="text-xl text-gray-600 font-normal">{cat.name}</h2>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Catagories;
