import React from "react";
import { Footer as F } from "flowbite-react";
import {
  BsFacebook,
  BsGithub,
  BsTwitter,
  BsDribbble,
  BsInstagram,
} from "react-icons/bs";

const Footer: React.FC = () => {
  return (
    <F className="flex flex-col">
      <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
        <div>
          <F.Brand
            href="https://flowbite.com"
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Flowbite Logo"
            name="Flowbite"
            className="m-6"
          />
        </div>
        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              About
            </h2>
            <F.LinkGroup className="flex-col">
              <F.Link className="mb-4" href="#">
                Flowbite
              </F.Link>
              <F.Link className="mb-4" href="#">
                Tailwind CSS
              </F.Link>
            </F.LinkGroup>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              Follow us
            </h2>
            <F.LinkGroup className="flex-col">
              <F.Link className="mb-4" href="#">
                Github
              </F.Link>
              <F.Link className="mb-4" href="#">
                Discord
              </F.Link>
            </F.LinkGroup>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              Legal
            </h2>
            <F.LinkGroup className="flex-col">
              <F.Link className="mb-4" href="#">
                Privacy Policy
              </F.Link>
              <F.Link className="mb-4" href="#">
                Terms & Conditions
              </F.Link>
            </F.LinkGroup>
          </div>
        </div>
      </div>
      <hr className="my-6 w-full border-gray-200 p-1 dark:border-gray-700 sm:mx-auto lg:my-8" />
      <div className="w-full sm:flex sm:items-center sm:justify-between">
        <F.Copyright href="#" by="Flowbite™" year={2022} />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <F.Icon
            href="#"
            className="text-gray-400 hover:text-gray-900"
            icon={BsFacebook}
          />
          <F.Icon
            href="#"
            className="text-gray-400 hover:text-gray-900"
            icon={BsInstagram}
          />
          <F.Icon
            href="#"
            className="text-gray-400 hover:text-gray-900"
            icon={BsTwitter}
          />
          <F.Icon
            href="#"
            className="text-gray-400 hover:text-gray-900"
            icon={BsGithub}
          />
          <F.Icon
            href="#"
            className="text-gray-400 hover:text-gray-900"
            icon={BsDribbble}
          />
        </div>
      </div>
    </F>
  );
};

export default Footer;
