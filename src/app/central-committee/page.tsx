import React from "react";
import Image from "next/image";

const Committee = [
  {
    name: "Rajesh Hamal",
    role: "अध्यक्ष",
    phone: "9848000000",
    image: "/rajesh/hamal.svg",
  },
  {
    name: "Rajesh Hamal",
    role: "अध्यक्ष",
    phone: "9848000000",
    image: "/rajesh/hamal.svg",
  },
  {
    name: "Rajesh Hamal",
    role: "अध्यक्ष",
    phone: "9848000000",
    image: "/rajesh/hamal.svg",
  },
  {
    name: "Rajesh Hamal",
    role: "अध्यक्ष",
    phone: "9848000000",
    image: "/rajesh/hamal.svg",
  },
  {
    name: "Rajesh Hamal",
    role: "अध्यक्ष",
    phone: "9848000000",
    image: "/rajesh/hamal.svg",
  },
  {
    name: "Rajesh Hamal",
    role: "अध्यक्ष",
    phone: "9848000000",
    image: "/rajesh/hamal.svg",
  },
  {
    name: "Rajesh Hamal",
    role: "अध्यक्ष",
    phone: "9848000000",
    image: "/rajesh/hamal.svg",
  },
  {
    name: "Rajesh Hamal",
    role: "अध्यक्ष",
    phone: "9848000000",
    image: "/rajesh/hamal.svg",
  },
];

export default function Page() {
  return (
    <div className="2xl:container mx-auto px-8 my-8 py-0">
      <img
        src="/leafs/right.svg"
        alt="logo"
        width={600}
        className="absolute top-[-50px] right-[-50px] mt-0 mr-0 hidden lg:block xl:block"
      />
      <div className="text-left ">
        <div className="rounded-lg sm:ml-16  lg:ml-16 md:ml-16">
          <h1 className="text-4xl font-semibold ">Central Committee</h1>
        </div>

        <div className="flex relative mt-10 justify-center items-center">
          <div className="text-center">
            <div className="items-center  text-center sm:ml-16 md:ml-16 lg:ml-16">
              <h1 className="text-xl font-medium text-center mb-1">अध्यक्ष</h1>
              <Image
                className="rounded-lg"
                src="/rajesh/hamal.svg"
                alt="literature collection"
                width={200}
                height={200}
              />
              <h2 className="text-lg text-center font-medium mt-4">
                Rajesh Hamal
              </h2>
              <p className="mb-8 lg:text-center">9848000000</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4  justify-center items-center lg:items-start">
          {Committee.map((item, index) => (
            <div key={index} className="w-1/2 md:w-1/3 lg:w-1/4 px-4">
              <div className="flex relative mt-8 justify-center">
                <div className="text-center lg:text-left">
                  <div>
                    <h1 className="text-xl font-medium text-center mb-1">
                      {item.role}
                    </h1>
                    <Image
                      className="rounded-lg"
                      src={item.image}
                      alt="literature collection"
                      width={200}
                      height={200}
                    />
                    <h2 className="text-lg text-center font-medium mt-4">
                      {item.name}
                    </h2>
                    <p className="mb-8 lg:text-center">{item.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
