import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function Page() {
  return (
    <div className="relative min-h-screen">
      <img
        src="/register/register1.svg"
        alt="logo"
        width={400}
        className="absolute top-0 left-0 hidden lg:block xl:block"
      />
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-[500px] mt-16 rounded-lg p-8">
          <h1 className="text-center font-medium text-5xl leading-snug">
            डिजिटल बंशावलीमा
            <br /> हजुरलाई स्वागत छ
          </h1>
          <form>
            <div className="flex flex-col mt-5">
              <div className="mt-5">
                <Label className="text-md" htmlFor="name">
                  Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="rounded border-gray-600 text-gray-500"
                />
              </div>
              <div className="mt-5">
                <Label className="text-md" htmlFor="email">
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="rounded border-gray-600 text-gray-500"
                />
              </div>
              <div className="mt-5">
                <Label className="text-md" htmlFor="phone">
                  Phone <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="tel"
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
              <div className="mt-5">
                <Label className="text-md" htmlFor="confirm-password">
                  Confirm Password <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="password"
                  id="confirm-password"
                  placeholder="Enter your password"
                  className="rounded border-gray-600 text-gray-500"
                />
              </div>
              <div className="mt-5">
                <Label className="text-md" htmlFor="address">
                  Address <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="text"
                  id="address"
                  placeholder="Enter your address"
                  className="rounded border-gray-600 text-gray-500"
                />
              </div>
              <div className="mt-5">
                <Label className="text-md" htmlFor="referal">
                  Referal Code
                </Label>
                <Input
                  type="text"
                  id="referal"
                  placeholder="Enter your referal code"
                  className="rounded border-gray-600 text-gray-500"
                />
              </div>
              <div className="mt-5">
                <button
                  type="submit"
                  className="bg-[#0051BA] hover:bg-blue-500 text-white font-bold py-2 px-4 rounded w-full"
                >
                  Signup
                </button>
              </div>
              <div className="text-center mt-5">
                <a href="/login" className="hover:underline">
                  Already have an account?{" "}
                  <span className="text-blue-700 font-semibold">Login!!</span>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
      <img
        src="/register/register2.svg"
        alt="logo"
        width={500}
        className="absolute bottom-[-250px] right-0  hidden lg:block xl:block"
      />
    </div>
  );
}
