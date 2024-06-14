import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function Page() {
  return (
    <div className="relative min-h-screen ">
      <img
        src="/login/login1.svg"
        alt="logo"
        className="absolute top-[-50px] right-0 mt-0 mr-0 w-[300px] md:w-[400px] lg:w-[400px] xl:w-[600px] "
      />
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-[400px] mt-16 rounded-lg  ">
          <h1 className="text-center  text-3xl font-semibold lg:text-4xl lg:leading-snug leading-snug">
            डिजिटल बंशावलीमा
            <br /> हजुरलाई स्वागत छ
          </h1>
          <form>
            <div className="flex flex-col mt-5">
              <div className="mt-5">
                <Label className="text-md" htmlFor="email">
                  Phone <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="text"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="rounded border-gray-600 text-gray-500"
                />
              </div>

              <div className="mt-5">
                <Label className="text-md" htmlFor="password">
                  Password <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="rounded border-gray-600 text-gray-500"
                />
              </div>

              <div className="flex justify-between flex-col lg:flex-row md:flex-row lg:items-center mt-5">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember-password"
                    className="mr-2"
                  />
                  <Label htmlFor="remember-password" className="text-md">
                    Remember Password
                  </Label>
                </div>
                <a
                  href="/forgot-password"
                  className="hover:underline text-blue-700 mt-2 lg:mt-0 md:mt-0 "
                >
                  Forgot Password?
                </a>
              </div>

              <div className="mt-5">
                <button
                  type="submit"
                  className="bg-[#0051BA] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                >
                  Login
                </button>
              </div>
              <div className="flex justify-center items-center mt-5">
                <a href="/register" className=" hover:underline">
                  Not a member yet?
                  <span className="font-semibold text-blue-700">
                    Register now
                  </span>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
      <img
        src="/login/login.svg"
        alt="logo"
        className="absolute bottom-[-50px] left-0 mb-10 ml-10 hidden lg:block xl:block w-[250px] md:w-[250px] lg:w-[200px] xl:w-[300px]"
      />
    </div>
  );
}
