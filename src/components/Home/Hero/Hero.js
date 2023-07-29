import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <Swiper
        loop={true}
        autoplay={{ delay: 1500 }}
        speed={1200}
        spaceBetween={0}
        slidesPerView={1}
        modules={[Pagination, Autoplay]}
        pagination={{
          dynamicBullets: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide className="md:flex justify-between items-center gap-10 bg-sky-900">
          <div className="md:w-7/12 p-16">
            <h1 className="text-5xl font-bold text-yellow-400">
              Build Your PC
            </h1>
            <p className="mt-5 text-gray-300">
              A custom-built or homebuilt computer is a computer assembled from
              available components, usually commercial off-the-shelf (COTS)
              components, rather than purchased as a complete system from a
              computer system supplier, also known as pre-built systems.
            </p>
            <Link href="/pc-build">
              <Button className="mt-8 bg-orange-500 border-0 text-white">
                Build PC
              </Button>
            </Link>
          </div>
          <div className="md:w-5/12">
            <Image
              src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
              width={500}
              height={600}
              alt=""
              className="object-cover"
              style={{ width: "100%" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="md:flex justify-between items-center gap-10 bg-sky-900">
          <div className="md:w-7/12 p-16">
            <h1 className="text-5xl font-bold text-yellow-400">
              Update Desktop
            </h1>
            <p className="mt-5 text-gray-300">
              A custom-built or homebuilt computer is a computer assembled from
              available components, usually commercial off-the-shelf (COTS)
              components, rather than purchased as a complete system from a
              computer system supplier, also known as pre-built systems.
            </p>
            <Link href="/pc-build">
              <Button className="mt-8 bg-orange-500 border-0 text-white">
                Build PC
              </Button>
            </Link>
          </div>
          <div className="md:w-5/12">
            <Image
              src="https://images.unsplash.com/photo-1547082299-de196ea013d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              width={500}
              height={600}
              alt=""
              className="object-cover"
              style={{ width: "100%" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="md:flex justify-between items-center gap-10 bg-sky-900 ">
          <div className="md:w-7/12 p-16">
            <h1 className="text-5xl font-bold text-yellow-400">
              Buy New Workshop
            </h1>
            <p className="mt-5 text-gray-300">
              A custom-built or homebuilt computer is a computer assembled from
              available components, usually commercial off-the-shelf (COTS)
              components, rather than purchased as a complete system from a
              computer system supplier, also known as pre-built systems.
            </p>
            <Link href="/pc-build">
              <Button className="mt-8 bg-orange-500 border-0 text-white">
                Build PC
              </Button>
            </Link>
          </div>
          <div className="md:w-5/12">
            <Image
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              width={500}
              height={600}
              alt=""
              className="object-cover"
              style={{ width: "100%" }}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
