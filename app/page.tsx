import Link from "next/link";
import Image from "next/image";

import { nunito } from "@/app/ui/fonts";
import { IconLink, IconClick, IconCopy } from "@tabler/icons-react";

import Icon from "@/public/Icon.svg";
import Github from "@/public/Github.svg";
import ArrowScribble from "@/public/ArrowScribble.svg";
import HighlightScribble from "@/public/HighlightScribble.svg";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow md:max-w-[640px] mx-auto w-full">
        <nav className="flex justify-between items-center px-4 md:px-0 h-[88px] text-sm md:text-base">
          <Image src={Icon} alt="mill.sh" />
          <div className="flex gap-2">
            <Link href="https://github.com/Serving-Hours/mill" className="md:flex items-center px-3 hidden h-10 bg-[#EAEAEA] text-[#777777] font-semibold rounded-full">
              GitHub
            </Link>
            <Link href="/login" className="flex items-center px-3 md:px-4 h-8 md:h-10 bg-[#181818] text-[#FAFAFA] font-semibold rounded-full">
              Log In
            </Link>
          </div>
        </nav>
        <main className="mt-8 md:mt-[72px] px-4 md:px-0">
          <header className="flex flex-col items-center mb-12 md:mb-16">
            <div className={`${nunito.className} flex flex-wrap justify-center items-center mb-4 text-4xl md:text-5xl tracking-tight font-bold gap-1 md:gap-0`}>
              <div className="flex items-center">
                <IconLink className="mr-1 text-[#52AEFF] h-9 w-9 md:h-12 md:w-12" />
                <h1>Your Links, </h1>
              </div>
              <div className="flex items-center">
                <IconClick className="mr-1 text-[#12A594] h-9 w-9 md:h-12 md:w-12" />
                <h1>Made Short.</h1>
              </div>
            </div>
            <span className="font-medium text-center text-base md:text-lg text-[#585858] max-w-[420px] mb-6 md:mb-8">
              Managing and shortening your links has never been so simple and fun.
            </span>
            <Link href="/" className="flex items-center px-4 h-10 bg-[#181818] text-[#FAFAFA] font-semibold rounded-full">
              Start for Free
            </Link>
          </header>
          <section>
            <form className="relative mb-8">
              <input
                placeholder="https://your.app.com/about"
                className="px-4 pr-24 w-full h-[50px] border border-[#E5E5E5] rounded-full placeholder-[#A3A3A3] placeholder:font-medium truncate"
              />
              <button className="flex items-center px-4 h-10 absolute right-[6px] bg-[#EAEAEA] text-[#777777] font-semibold rounded-full top-1/2 transform -translate-y-1/2">
                Create
              </button>
              <Image className="absolute -right-5 -top-[18px] hidden md:block" src={HighlightScribble} alt="scribble" />
            </form>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex flex-col w-full p-4 rounded-3xl bg-[#F7F7F7] relative">
                <Image src={Github} alt="github" className="mb-4" />
                <header className={`${nunito.className} text-xl mb-1`}>mill.sh/about</header>
                <span className="text-sm mb-6 font-medium text-[#777777]">https://your.app.com/about</span>
                <button className="flex items-center px-3 h-8 w-fit bg-[#EAEAEA] text-[#777777] font-semibold rounded-full">
                  Edit
                </button>
                <IconCopy className="absolute right-4 top-4 text-[#A3A3A3]" />
              </div>
              <div className="w-full p-4 bg-[#F7F7F7] rounded-3xl">
                <svg className="mb-[20px]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="16" fill="#EAEAEA" />
                </svg>
                <svg className="mb-[12px]" width="100" height="16" viewBox="0 0 100 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="16" rx="8" fill="#EAEAEA" />
                </svg>
                <svg className="mb-[28px]" width="163" height="12" viewBox="0 0 163 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="163" height="12" rx="6" fill="#EAEAEA" />
                </svg>
                <svg width="63" height="32" viewBox="0 0 63 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.904785" width="62" height="32" rx="16" fill="#EAEAEA" />
                  <path d="M18.1832 22V10.3636H25.4786V11.875H19.9389V15.4205H25.098V16.9261H19.9389V20.4886H25.5468V22H18.1832ZM30.7625 22.1705C30.058 22.1705 29.4292 21.9905 28.8761 21.6307C28.3269 21.267 27.8951 20.75 27.5807 20.0795C27.2701 19.4053 27.1148 18.5966 27.1148 17.6534C27.1148 16.7102 27.272 15.9034 27.5864 15.233C27.9045 14.5625 28.3402 14.0492 28.8932 13.6932C29.4462 13.3371 30.0731 13.1591 30.7739 13.1591C31.3155 13.1591 31.7511 13.25 32.0807 13.4318C32.414 13.6098 32.6716 13.8182 32.8534 14.0568C33.039 14.2955 33.183 14.5057 33.2852 14.6875H33.3875V10.3636H35.0864V22H33.4273V20.642H33.2852C33.183 20.8277 33.0352 21.0398 32.842 21.2784C32.6527 21.517 32.3913 21.7254 32.058 21.9034C31.7246 22.0814 31.2928 22.1705 30.7625 22.1705ZM31.1375 20.7216C31.6261 20.7216 32.039 20.5928 32.3761 20.3352C32.717 20.0739 32.9746 19.7121 33.1489 19.25C33.3269 18.7879 33.4159 18.25 33.4159 17.6364C33.4159 17.0303 33.3288 16.5 33.1545 16.0455C32.9803 15.5909 32.7246 15.2367 32.3875 14.983C32.0504 14.7292 31.6337 14.6023 31.1375 14.6023C30.6261 14.6023 30.2 14.7348 29.8591 15C29.5182 15.2652 29.2606 15.6269 29.0864 16.0852C28.9159 16.5436 28.8307 17.0606 28.8307 17.6364C28.8307 18.2197 28.9178 18.7443 29.092 19.2102C29.2663 19.6761 29.5239 20.0455 29.8648 20.3182C30.2095 20.5871 30.6337 20.7216 31.1375 20.7216ZM37.3191 22V13.2727H39.0179V22H37.3191ZM38.177 11.9261C37.8816 11.9261 37.6278 11.8277 37.4157 11.6307C37.2073 11.4299 37.1032 11.1913 37.1032 10.9148C37.1032 10.6345 37.2073 10.3958 37.4157 10.1989C37.6278 9.99811 37.8816 9.89773 38.177 9.89773C38.4725 9.89773 38.7244 9.99811 38.9327 10.1989C39.1448 10.3958 39.2509 10.6345 39.2509 10.9148C39.2509 11.1913 39.1448 11.4299 38.9327 11.6307C38.7244 11.8277 38.4725 11.9261 38.177 11.9261ZM45.1853 13.2727V14.6364H40.4183V13.2727H45.1853ZM41.6967 11.1818H43.3955V19.4375C43.3955 19.767 43.4448 20.0152 43.5433 20.1818C43.6418 20.3447 43.7687 20.4564 43.924 20.517C44.083 20.5739 44.2554 20.6023 44.441 20.6023C44.5774 20.6023 44.6967 20.5928 44.799 20.5739C44.9012 20.5549 44.9808 20.5398 45.0376 20.5284L45.3444 21.9318C45.2459 21.9697 45.1058 22.0076 44.924 22.0455C44.7421 22.0871 44.5149 22.1098 44.2421 22.1136C43.7952 22.1212 43.3785 22.0417 42.9921 21.875C42.6058 21.7083 42.2933 21.4508 42.0546 21.1023C41.816 20.7538 41.6967 20.3163 41.6967 19.7898V11.1818Z" fill="#EAEAEA" />
                </svg>
              </div>
            </div>
          </section>
          <Image className="mx-auto mb-4" src={ArrowScribble} alt="scribble" />
          <span className="block text-center mx-auto text-sm max-w-[420px] font-medium text-[#777777] mb-8 md:mb-0">
            Want to claim your links, edit them, or view their analytics?{" "}
            <Link className="underline" href="/">
              Create a free account on mill.sh
            </Link>{" "}
            to get started
          </span>
        </main>
      </div>
      <footer className="mt-8 md:mt-auto py-4 text-center text-[#777777] font-medium text-sm">A project by Smintfy & Fadil</footer>
    </div>
  );
}