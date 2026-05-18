"use client";

import { FcGoogle } from "react-icons/fc";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      email: user.email,
      password: user.password,
      name: user.name,
      image: user.image,
    });

    if (data) {
        toast.success("Registration Successful");
      redirect("/login");
    }

    if (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleSignin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="min-h-screen bg-[#f4f1ea] flex items-center justify-center px-6 py-10">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div>
          <p className="uppercase tracking-[6px] text-sm font-semibold text-lime-700 mb-4">
            Join DriveFleet
          </p>

          <h1 className="text-6xl lg:text-8xl font-black leading-none text-black">
            Create your <br /> account
          </h1>

          <p className="mt-8 text-xl text-gray-600 leading-10 max-w-2xl">
            Book premium cars, manage your rentals, and explore your journeys
            with a secure and modern dashboard experience.
          </p>
        </div>


        <div className="bg-white rounded-[40px] p-10 shadow-sm max-w-xl w-full mx-auto">
          <h2 className="text-5xl font-black mb-10">
            Register
          </h2>

          <Form onSubmit={onSubmit} className="space-y-6">

            <TextField
              isRequired
              name="name"
              type="text"
              className="w-full"
              classNames={{
                  inputWrapper:
                    "h-16 rounded-2xl border border-gray-300 px-4",
                }}
            >
              <Label className="font-semibold text-lg mb-3">
                Name
              </Label>

              <Input
                placeholder="Enter your name"
                className="w-full"
                
              />

              <FieldError />
            </TextField>


            <TextField
            isRequired
              name="image"
              type="url"
              className="w-full"
               classNames={{
                  inputWrapper:
                    "h-16 rounded-2xl border border-gray-300 px-4",
                }}
            >
              <Label className="font-semibold text-lg mb-3">
                Image URL
              </Label>

              <Input
                placeholder="Enter image url"
                className="w-full"
               
              />

              <FieldError />
            </TextField>


            <TextField
              isRequired
              name="email"
              type="email"
              className="w-full"
               classNames={{
                  inputWrapper:
                    "h-16 rounded-2xl border border-gray-300 px-4",
                }}
              validate={(value) => {
                if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                    value
                  )
                ) {
                  return "Please enter a valid email address";
                }

                return null;
              }}
            >
              <Label className="font-semibold text-lg mb-3">
                Email
              </Label>

              <Input
                placeholder="john@example.com"
                className="w-full"
               
              />

              <FieldError />
            </TextField>


            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              className="w-full"
              classNames={{
                  inputWrapper:
                    "h-16 rounded-2xl border border-gray-300 px-4",
                }}
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }

                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }

                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }

                return null;
              }}
            >
              <Label className="font-semibold text-lg mb-3">
                Password
              </Label>

              <Input
                placeholder="Enter your password"
                className="w-full"
                
              />

              <Description className="text-sm text-gray-500 mt-2">
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>

              <FieldError />
            </TextField>

            <Button
              type="submit"
              className="w-full h-16 rounded-full bg-lime-400 hover:bg-lime-500 transition text-black font-bold text-2xl mt-4"
            >
              Create Account
            </Button>
          </Form>

          <div className="flex justify-center items-center gap-4 my-8">
            <div className="h-px bg-gray-300 w-full"></div>

            <div className="whitespace-nowrap text-gray-500">
              Or sign up with
            </div>

            <div className="h-px bg-gray-300 w-full"></div>
          </div>

          {/* Google Button */}
          <Button
            onClick={handleGoogleSignin}
            className="w-full h-16 rounded-full border border-gray-300 bg-white hover:bg-gray-50 text-black font-bold text-xl"
          >
            <FcGoogle size={24} />
            Sign in with Google
          </Button>

          {/* Login Link */}
          <p className="text-center mt-8 text-lg text-gray-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-bold text-black underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;