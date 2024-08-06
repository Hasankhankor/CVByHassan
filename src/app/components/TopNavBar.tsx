"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logoSrc from "public/logo.svg";
import githubLogoSrc from "public/github-logo.svg"; // Import the GitHub logo
import { cx } from "lib/cx";

export const TopNavBar = () => {
  const pathName = usePathname();
  const isHomePage = pathName === "/";

  return (
    <header
      aria-label="Site Header"
      className={cx(
        "flex h-[var(--top-nav-bar-height)] items-center border-b-2 border-gray-100 px-3 lg:px-12",
        isHomePage && "bg-dot"
      )}
    >
      <div className="flex h-10 w-full items-center justify-between">
      <Link href="/">
          <span className="sr-only">CVByHassan</span>
          <Image
            src={logoSrc}
            alt="CVByHassan Logo"
            className=""
            priority
            width={190} // Set the desired width
            height={50} // Set the desired height
          />
        </Link>
        <nav
          aria-label="Site Nav Bar"
          className="flex items-center gap-2 text-sm font-medium"
        >
          {[
            ["/resume-builder", "Builder"],
            ["/resume-parser", "Parser"],
          ].map(([href, text]) => (
            <Link
              key={text}
              className="rounded-md px-1.5 py-2 text-gray-500 hover:bg-gray-100 focus-visible:bg-gray-100 lg:px-4"
              href={href}
            >
              {text}
            </Link>
          ))}
 <Link href="https://github.com/Hasankhankor/CVByHassan" className="ml-1 mt-1" target="_blank" rel="noopener noreferrer">
            <Image
              src={githubLogoSrc}
              alt="GitHub Logo"
              className=""
              priority
              width={40} // Set the desired width for the GitHub logo
              height={24} // Set the desired height for the GitHub logo
            />
          </Link>
        </nav>
      </div>
    </header>
  );
};
