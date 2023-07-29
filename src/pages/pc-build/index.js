import { Button } from "antd";
import Link from "next/link";

const PcBuild = () => {
  return (
    <div className="container mx-auto w-11/12 my-10">
      <div>
        <h2 className="text-center text-xl text-orange-600 font-black">
          Build PC
        </h2>
        <p className="text-center text-sm my-1 text-gray-700">
          Check & Build Your Desktop !
        </p>
      </div>
      <div className="mt-10 space-y-5">
        {/* CPU START */}
        <div
          className="flex justify-between items-center gap-5 p-2"
          style={{ borderBottom: "2px solid #EEEDED" }}
        >
          <div className="w-10/12 flex items-center gap-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-12 h-12 text-orange-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
                />
              </svg>
            </div>
            <div>
              <p className="text-md font-bold text-gray-500">CPU / Processor</p>
              <div className="mt-2">
                <h2 className="text-xl font-normal text-sky-800">
                  Corsair RM750x 750W Power Supply
                </h2>
                <div className="flex  items-center gap-6">
                  <p className="mt-1 text-green-600 font-bold">$ price</p>
                  <p className="mt-1 text-gray-600 font-bold">status</p>
                  <p className="mt-1 text-pink-600 font-bold">reviews</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-2/12 p-4"
            style={{ borderLeft: "1px solid #EEEDED" }}
          >
            <Link href="/pc-build/select/64c37c37be85a3400fb0c38d">
              <Button type="primary" className="w-full">
                Choose / Select
              </Button>
            </Link>
          </div>
        </div>
        {/* CPU END */}

        {/* Motherboard START */}
        <div
          className="flex justify-between items-center gap-5 p-2"
          style={{ borderBottom: "2px solid #EEEDED" }}
        >
          <div className="w-10/12 flex items-center gap-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-12 h-12 text-orange-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
                />
              </svg>
            </div>
            <div>
              <p className="text-md font-bold text-gray-500">Motherboard</p>
              <div className="mt-2">
                <h2 className="text-xl font-normal text-sky-800">
                  Corsair RM750x 750W Power Supply
                </h2>
                <div className="flex  items-center gap-6">
                  <p className="mt-1 text-green-600 font-bold">$ price</p>
                  <p className="mt-1 text-gray-600 font-bold">status</p>
                  <p className="mt-1 text-pink-600 font-bold">reviews</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-2/12 p-4"
            style={{ borderLeft: "1px solid #EEEDED" }}
          >
            <Link href="/pc-build/select/64c37c37be85a3400fb0c38e">
              <Button type="primary" className="w-full">
                Choose / Select
              </Button>
            </Link>
          </div>
        </div>
        {/* Motherboard END */}

        {/* RAM START */}
        <div
          className="flex justify-between items-center gap-5 p-2"
          style={{ borderBottom: "2px solid #EEEDED" }}
        >
          <div className="w-10/12 flex items-center gap-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-12 h-12 text-orange-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
                />
              </svg>
            </div>
            <div>
              <p className="text-md font-bold text-gray-500">RAM</p>
              <div className="mt-2">
                <h2 className="text-xl font-normal text-sky-800">
                  Corsair RM750x 750W Power Supply
                </h2>
                <div className="flex  items-center gap-6">
                  <p className="mt-1 text-green-600 font-bold">$ price</p>
                  <p className="mt-1 text-gray-600 font-bold">status</p>
                  <p className="mt-1 text-pink-600 font-bold">reviews</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-2/12 p-4"
            style={{ borderLeft: "1px solid #EEEDED" }}
          >
            <Link href="/pc-build/select/64c37c37be85a3400fb0c38f">
              <Button type="primary" className="w-full">
                Choose / Select
              </Button>
            </Link>
          </div>
        </div>
        {/* RAM END */}

        {/* Power Supply Unit START */}
        <div
          className="flex justify-between items-center gap-5 p-2"
          style={{ borderBottom: "2px solid #EEEDED" }}
        >
          <div className="w-10/12 flex items-center gap-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-12 h-12 text-orange-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
                />
              </svg>
            </div>
            <div>
              <p className="text-md font-bold text-gray-500">
                Power Supply Unit
              </p>
              <div className="mt-2">
                <h2 className="text-xl font-normal text-sky-800">
                  Corsair RM750x 750W Power Supply
                </h2>
                <div className="flex  items-center gap-6">
                  <p className="mt-1 text-green-600 font-bold">$ price</p>
                  <p className="mt-1 text-gray-600 font-bold">status</p>
                  <p className="mt-1 text-pink-600 font-bold">reviews</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-2/12 p-4"
            style={{ borderLeft: "1px solid #EEEDED" }}
          >
            <Link href="/pc-build/select/64c37c37be85a3400fb0c390">
              <Button type="primary" className="w-full">
                Choose / Select
              </Button>
            </Link>
          </div>
        </div>
        {/* Power Supply Unit END */}

        {/* Storage Device START */}
        <div
          className="flex justify-between items-center gap-5 p-2"
          style={{ borderBottom: "2px solid #EEEDED" }}
        >
          <div className="w-10/12 flex items-center gap-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-12 h-12 text-orange-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
                />
              </svg>
            </div>
            <div>
              <p className="text-md font-bold text-gray-500">Storage Device</p>
              <div className="mt-2">
                <h2 className="text-xl font-normal text-sky-800">
                  Corsair RM750x 750W Power Supply
                </h2>
                <div className="flex  items-center gap-6">
                  <p className="mt-1 text-green-600 font-bold">$ price</p>
                  <p className="mt-1 text-gray-600 font-bold">status</p>
                  <p className="mt-1 text-pink-600 font-bold">reviews</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-2/12 p-4"
            style={{ borderLeft: "1px solid #EEEDED" }}
          >
            <Link href="/pc-build/select/64c37c37be85a3400fb0c391">
              <Button type="primary" className="w-full">
                Choose / Select
              </Button>
            </Link>
          </div>
        </div>
        {/* Storage Device END */}

        {/* Monitor START */}
        <div
          className="flex justify-between items-center gap-5 p-2"
          style={{ borderBottom: "2px solid #EEEDED" }}
        >
          <div className="w-10/12 flex items-center gap-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-12 h-12 text-orange-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
                />
              </svg>
            </div>
            <div>
              <p className="text-md font-bold text-gray-500">Monitor</p>
              <div className="mt-2">
                <h2 className="text-xl font-normal text-sky-800">
                  Corsair RM750x 750W Power Supply
                </h2>
                <div className="flex  items-center gap-6">
                  <p className="mt-1 text-green-600 font-bold">$ price</p>
                  <p className="mt-1 text-gray-600 font-bold">status</p>
                  <p className="mt-1 text-pink-600 font-bold">reviews</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-2/12 p-4"
            style={{ borderLeft: "1px solid #EEEDED" }}
          >
            <Link href="/pc-build/select/64c37c37be85a3400fb0c392">
              <Button type="primary" className="w-full">
                Choose / Select
              </Button>
            </Link>
          </div>
        </div>
        {/* Monitor END */}
      </div>
    </div>
  );
};

export default PcBuild;
