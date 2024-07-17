import { Button } from "@/components/ui/button";
import { IoBarbell } from "react-icons/io5";
import Image from "next/image";
import { SparklesCore } from "@/components/ui/sparkles";
import InfiniteCards from "@/components/ui/custom/infiniteCards";
import Footer from "@/components/ui/custom/footer";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FaWindowClose } from "react-icons/fa";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { SignUp } from "@/components/ui/custom/sign-up";
import { Login } from "@/components/ui/custom/login";

export default function LandingPage() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },

    {
      name: "services",
      link: "/services",
      icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
    }
  ];
  return (
    <div className=" min-h-full">
      <header className="flex w-full justify-between p-14">
        <div>
          <p className="text-4xl font-mono">LiftUp</p>
        </div>

        <div className="relative  w-full">
          <FloatingNav navItems={navItems} />
         
        </div>

        <div className="flex justify-between items-center w-[11%]">
          <AlertDialog>
          <AlertDialogTrigger>
            <Button className="rounded-full" variant="outline">
            Login
          </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="max-h-[85%]">
          <AlertDialogHeader>
            <AlertDialogCancel className="absolute top-0 right-0 p-2">
              <div className="w-full h-full">
                <FaWindowClose className="w-full h-full hover:fill-red-400" />
              </div>
            </AlertDialogCancel>
          </AlertDialogHeader>
            <Login />
          </AlertDialogContent>
          </AlertDialog>
<AlertDialog>
  <AlertDialogTrigger>
          <Button
            className="rounded-full"
            style={{
              fill: "hsl(var(--foreground))",
            }}
          >
            Sign Up
          </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="max-h-[85%]">
          <AlertDialogHeader>
            <AlertDialogCancel className="absolute top-0 right-0 p-2">
              <div className="w-full h-full">
                <FaWindowClose className="w-full h-full hover:fill-red-400" />
              </div>
            </AlertDialogCancel>
          </AlertDialogHeader>
            <SignUp />
          </AlertDialogContent>
          </AlertDialog>
        </div>
      </header>

      <section
        id="intro"
        className="flex flex-col items-center justify-center "
      >
        <IoBarbell className="text-9xl" />
        <div className=" w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
            LiftUp
          </h1>

          <div className="w-[40rem] relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            {/* Core component */}
            <h3 className="md:text-3xl text-xl lg:text-5xl font-bold text-center text-white relative z-20 pt-3">
              You Work out, We'll take care of the rest
            </h3>

            {/* Radial Gradient to prevent sharp edges */}
            {/* <div className="absolute inset-0 w-full h-full   [mask-image:radial-gradient(350px_200px_at_top,transparent_50%,white)]"></div> */}
          </div>
        </div>
      </section>

      <section
        id="infinite cards"
        className="flex flex-col items-center justify-center min-w-full"
      >
        <InfiniteCards />
      </section>
      <section id="Text header">
        <div className=" w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h1 className="md:text-5xl text-3xl lg:text-7xl font-bold text-center text-white relative z-20">
            Dive into our immersire <br /> Gym Experience
          </h1>

          <div className="w-[40rem] relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          </div>
        </div>
      </section>

      <section
        id="features"
        className="flex flex-col items-center justify-center p-6"
      >
        <div className="flex flex-col items-center justify-between w-[70%] gap-y-5">
          <div className="flex  items-center justify-between w-full h-500">
            <div className="flex flex-col  justify-between text-left">
              <h2 className="text-xl">Gym Membership Management</h2>
              <h4 className="w-[50%] font-extralight pb-2">
                As a gym member, you can track your membership status and renew
                your membership with ease
              </h4>
              <button className="max-w-[20%] bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white ">
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                </span>
                <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 m-auto">
                  <span>Read More</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M10.75 8.75L14.25 12L10.75 15.25"
                    ></path>
                  </svg>
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
              </button>
            </div>
            <Image
              src="/images/gym.jpg"
              alt="gym"
              width="400"
              height="200"
              className="rounded-lg"
            />
          </div>

          <div className="flex items-center justify-between w-full h-500">
            <Image
              src="/images/gym.jpg"
              alt="gym"
              width="400"
              height="200"
              className="rounded-lg"
            />

            <div className="flex flex-col  justify-between text-left">
              <h2 className="text-xl self-end">Gym Membership Management</h2>
              <h4 className="w-[51%] font-extralight self-end pb-2">
                As a gym member, you can track your membership status and renew
                your membership with ease
              </h4>
              <button className=" self-end max-w-[22%] bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white ">
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                </span>
                <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                  <span>Read More</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M10.75 8.75L14.25 12L10.75 15.25"
                    ></path>
                  </svg>
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
              </button>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
