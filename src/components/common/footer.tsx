import React, { ReactNode } from "react";
import { Button, Link, Tooltip } from "@nextui-org/react";

import {
  FaInstagram,
  FaXTwitter,
  FaGithub,
  FaLinkedinIn,
  FaBehance,
  FaWhatsapp,
  FaDiscord,
  FaSkype,
} from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const tel = "12981847553";

  const icons: { title: string; href: string; icon: ReactNode }[] = [
    {
      title: "E-mail",
      href: "vlnmbfhomy@gmail.com",
      icon: <FaMailBulk size={20} />,
    },
    {
      title: "Discord",
      href: "https://discord.com/Moh_Azril",
      icon: <FaDiscord size={20} />,
    },
    // {
    //   title: "Skype",
    //   href: `https://join.skype.com/invite/iIh6vb9dWdEp`,
    //   icon: <FaSkype size={20} />,
    // },
  ];

  return (
    <footer className="mx-auto w-full cursor-default items-center justify-center bg-[#181717] pt-8 text-center shadow-xl md:px-0">
      <section className="mx-auto flex w-full max-w-4xl flex-col items-center justify-between gap-y-4 px-4 pb-8 shadow-xl md:flex-row md:gap-y-0">
        <Link href="/#">
          <p className="select-none text-2xl font-black text-white">
            <span className="text-xl text-lime-500">{`. `}</span>Moh Azril
          </p>
        </Link>

        <p className="text-xs font-light">
          &copy; {currentYear} Portfolio - All rights reserved.
        </p>

        <div className="flex gap-1">
          {icons.map((icon, index) => (
            <Tooltip
              content={<p className="text-tiny">{icon.title}</p>}
              key={index}
              placement="bottom"
              color="foreground"
              delay={0}
              closeDelay={0}
            >
              <Link href={icon.href} target="_blank">
                <Button
                  variant="shadow"
                  isIconOnly
                  size="lg"
                  startContent={icon.icon}
                  className="transition-all duration-300 ease-in-out hover:text-lime-400"
                />
              </Link>
            </Tooltip>
          ))}
        </div>
      </section>
    </footer>
  );
}
