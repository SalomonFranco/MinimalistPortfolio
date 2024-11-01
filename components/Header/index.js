import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name, showBlog, showResume } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link"
              >
                {name}.
              </h1>

              <div className="flex items-center">
                {data.darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <img
                      className="h-6"
                      src={`/images/${
                        theme === "dark" ? "moon.svg" : "sun.svg"
                      }`}
                    ></img>
                  </Button>
                )}

                <Popover.Button>
                  <img
                    className="h-5"
                    src={`/images/${
                      !open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                  ></img>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
              {!isBlog ? (
                <div className="grid grid-cols-1">
                  <Button onClick={handleWorkScroll}>Work</Button>
                  <Button onClick={handleAboutScroll}>About</Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  {showResume && (
                    <div className="relative">
                      <Popover className="block">
                        {({ open }) => (
                          <>
                            <Popover.Button className="w-full text-left">
                              <Button>USA to LATIN AMERICA</Button>
                            </Popover.Button>
                            <Popover.Panel className="absolute left-0 z-10 w-48 p-2 bg-black shadow-lg rounded-md">
                            <Button onClick={() => window.open("https://docs.google.com/forms/d/1UW-dl49k06SO7gaaonHfWPaUX1nZgyeolXq2QiZlzJA/edit")}>
                              Registration Form  
                              </Button>
                              <Button onClick={() => window.open("/resume2.pdf")}>
                              Medical Form
                              </Button>
                              <Button onClick={() => window.open("/resume3.pdf")}>
                              Terms and conditions
                              </Button>
                              <Button onClick={() => window.open("/resume4.pdf")}>
                              Program agreement
                              </Button>
                              <Button onClick={() => window.open("/resume5.pdf")}>
                              Student Behavior guidelines
                              </Button>
                              <Button onClick={() => window.open("/resume2.pdf")}>
                              Medical Form
                              </Button>
                              <Button onClick={() => window.open("/resume3.pdf")}>
                              Responsability Disclaimers
                              </Button>
                              <Button onClick={() => window.open("/resume2.pdf")}>
                              Things to bring to Peru
                              </Button>
                              <Button onClick={() => window.open("/resume2.pdf")}>
                              Things to bring to Cuba
                              </Button>
                            </Popover.Panel>
                          </>
                        )}
                      </Popover>
                    </div>
                  )}
                  
                  <Button
                    onClick={() => window.open("mailto:martha.creatingties@gmail.com")}
                  >
                    Contact
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1">
                  <Button onClick={() => router.push("/")}>Home</Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  {showResume && (
                    <div className="relative">
                      <Popover className="block">
                        {({ open }) => (
                          <>
                            <Popover.Button className="w-full text-left">
                              <Button>USA to LATIN AMERICA</Button>
                            </Popover.Button>
                            <Popover.Panel className="absolute left-0 z-10 w-48 p-2 bg-white shadow-lg rounded-md">
                              <Button onClick={() => window.open("https://docs.google.com/forms/d/1UW-dl49k06SO7gaaonHfWPaUX1nZgyeolXq2QiZlzJA/edit")}>
                              Registration Form  
                              </Button>
                              <Button onClick={() => window.open("/resume2.pdf")}>
                              Medical Form
                              </Button>
                              <Button onClick={() => window.open("/resume3.pdf")}>
                              Terms and conditions
                              </Button>
                              <Button onClick={() => window.open("/resume4.pdf")}>
                              Program agreement
                              </Button>
                              <Button onClick={() => window.open("/resume5.pdf")}>
                              Student Behavior guidelines
                              </Button>
                              <Button onClick={() => window.open("/resume2.pdf")}>
                              Medical Form
                              </Button>
                              <Button onClick={() => window.open("/resume3.pdf")}>
                              Responsability Disclaimers
                              </Button>
                              <Button onClick={() => window.open("/resume2.pdf")}>
                              Things to bring to Peru
                              </Button>
                              <Button onClick={() => window.open("/resume2.pdf")}>
                              Things to bring to Cuba
                              </Button>
                            </Popover.Panel>
                          </>
                        )}
                      </Popover>
                    </div>
                  )}

                  <Button
                    onClick={() => window.open("mailto:Jfdsfotografia@gmail.com")}
                  >
                    Contact
                  </Button>
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky ${
          theme === "light" && "bg-white"
        } dark:text-white top-0 z-10 tablet:flex`}
      >
        <h1
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer mob:p-2 laptop:p-0"
        >
          {name}.
        </h1>
        {!isBlog ? (
          <div className="flex">
            <Button onClick={handleWorkScroll}>Work</Button>
            <Button onClick={handleAboutScroll}>About</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {showResume && (
              <div className="relative">
                <Popover className="block">
                  {({ open }) => (
                    <>
                      <Popover.Button className="w-full text-left">
                        <Button>USA to LATIN AMERICA</Button>
                      </Popover.Button>
                      <Popover.Panel className="absolute left-0 z-10 w-48 p-2 bg-black shadow-lg rounded-md">
                      <Button onClick={() => window.open("https://docs.google.com/forms/d/1UW-dl49k06SO7gaaonHfWPaUX1nZgyeolXq2QiZlzJA/edit")}>
                              Registration Form  
                              </Button>
                              <Button onClick={() => window.open("/resume2.pdf")}>
                              Medical Form
                              </Button>
                              <Button onClick={() => window.open("/resume3.pdf")}>
                              Terms and conditions
                              </Button>
                              <Button onClick={() => window.open("/resume4.pdf")}>
                              Program agreement
                              </Button>
                              <Button onClick={() => window.open("/resume5.pdf")}>
                              Student Behavior guidelines
                              </Button>
                              <Button onClick={() => window.open("/resume2.pdf")}>
                              Medical Form
                              </Button>
                              <Button onClick={() => window.open("/resume3.pdf")}>
                              Responsability Disclaimers
                              </Button>
                              <Button onClick={() => window.open("/resume2.pdf")}>
                              Things to bring to Peru
                              </Button>
                              <Button onClick={() => window.open("/resume2.pdf")}>
                              Things to bring to Cuba
                              </Button>
                      </Popover.Panel>
                    </>
                  )}
                </Popover>
              </div>
            )}

            <Button onClick={() => window.open("mailto:Jfdsfotografia@gmail.com")}>
              Contact
            </Button>

            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                ></img>
              </Button>
            )}
          </div>
        ) : (
          <div className="flex">
            <Button onClick={() => router.push("/")}>Home</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {showResume && (
              <div className="relative">
                <Popover className="block">
                  {({ open }) => (
                    <>
                      <Popover.Button className="w-full text-left">
                        <Button>USA to LATIN AMERICA</Button>
                      </Popover.Button>
                      <Popover.Panel className="absolute left-0 z-10 w-48 p-2 bg-black shadow-lg rounded-md">
                      <Button onClick={() => window.open("https://docs.google.com/forms/d/1UW-dl49k06SO7gaaonHfWPaUX1nZgyeolXq2QiZlzJA/edit")}>
                              Registration Form  
                              </Button>
                              <Button onClick={() => window.open("/resume2.pdf")}>
                              Medical Form
                              </Button>
                              <Button onClick={() => window.open("/resume3.pdf")}>
                              Terms and conditions
                              </Button>
                              <Button onClick={() => window.open("/resume4.pdf")}>
                              Program agreement
                              </Button>
                              <Button onClick={() => window.open("/resume5.pdf")}>
                              Student Behavior guidelines
                              </Button>
                              <Button onClick={() => window.open("/resume2.pdf")}>
                              Medical Form
                              </Button>
                              <Button onClick={() => window.open("/resume3.pdf")}>
                              Responsability Disclaimers
                              </Button>
                              <Button onClick={() => window.open("/resume2.pdf")}>
                              Things to bring to Peru
                              </Button>
                              <Button onClick={() => window.open("/resume2.pdf")}>
                              Things to bring to Cuba
                              </Button>
                      </Popover.Panel>
                    </>
                  )}
                </Popover>
              </div>
            )}

            <Button onClick={() => window.open("mailto:Jfdsfotografia@gmail.com")}>
              Contact
            </Button>

            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images /${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                ></img>
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;