"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { auth } from "@/config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const router = useRouter();

  const [formInputsValidity, setFormInputsValidity] = useState({
    emailIsValid: true,
    passwordIsValid: true,
  });

  const emailValidity = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const passwordValidity = (value) => {
    return value.trim().length >= 6;
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const enterdEmailIsValid = emailValidity(email);
    const enterdPasswordIsValid = passwordValidity(password);

    setFormInputsValidity({
      emailIsValid: enterdEmailIsValid,
      passwordIsValid: enterdPasswordIsValid,
    });

    const formIsValid =
      formInputsValidity.emailIsValid && formInputsValidity.passwordIsValid;

    if (formIsValid && typeof window !== 'undefined') {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        router.push("/");
      } catch (error) {
        console.log(error);
      }
      setEmail("");
      setPassWord("");
    }
  };

  return (
    <div className="flex max-md:block">
      <div className="relative">
        <img src="/Images/Paste image (1).png"></img>
        <h2 className="absolute top-[4%] left-[45%] text-2xl font-semibold cursor-pointer">
          3legant<span className="text-[#6C7275]">.</span>
        </h2>
      </div>
      <div className="mx-20 my-48 max-xl:my-20 max-lg:mx-8">
        <div className="m-auto max-w-sm">
          <h1 className="text-4xl font-bold text-[#141718]">Sign In</h1>
          <p className="py-4 text-[#6C7275] text-[14px]">
            Don't have an account yet?{" "}
            <span className="text-[#38CB89] cursor-pointer">
              <Link href="SignUp">Sign Up</Link>
            </span>
          </p>
          <input
            className=" mt-2 w-full text-[14px] text-[#6C7275] border-b-[1px] pt-4 pb-2 outline-none"
            placeholder="Email address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          {!formInputsValidity.emailIsValid && (
            <p className="text-red-500 text-sm">Invalid email address</p>
          )}
          <input
            className=" mt-2 w-full text-[14px] text-[#6C7275] border-b-[1px] pt-4 pb-2 outline-none"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassWord(e.target.value)}
          ></input>
          {!formInputsValidity.passwordIsValid && (
            <p className="text-red-500 text-sm">
              Password must be at least 6 characters long
            </p>
          )}
          <div className="flex justify-between py-6 text-[14px] text-[#6C7275]">
            <div>Remember me</div>
            <div className="font-bold text-black cursor-pointer">
              Forgot password?
            </div>
          </div>
          <button
            className="bg-[#141718] text-white py-[8px] px-4 rounded-md w-full"
            onClick={submitHandler}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};
export default page;
