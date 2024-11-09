import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <div className="mt-10">
          <h1 className="text-2xl text-bold">Martha Hayden</h1>
            <h1 className="text-1m tablet:text-1m laptop:text-1m laptopl:text-1m text-bold">
              President and Founder
            </h1>
            <h1 className="text-1m tablet:text-1m laptop:text-1m laptopl:text-1m text-bold">
              Creating Ties US
            </h1>
            <Button
                  type="primary"  onClick={() => window.open("mailto:martha.creatingties@gmail.com")}
                  >
              Get in touch
            </Button>
            <div className="mt-10">
            1403 Barclay Boulevard
            </div>
            Princeton, New Jersey 08540
            </div>
          Cell: 609-665-0231
        </div>
        <Socials />
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Made with ❤ by{" "}
        <Link href="https://github.com/SalomonFranco">
          <a className="underline underline-offset-1">Salomon Franco</a>
        </Link>
      </h1>
    </>
  );
};

export default Footer;
