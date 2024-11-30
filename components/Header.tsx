"use client";
import { Input } from "@/components/ui/input";
import YoutubeLogo from "@/components/YoutubeLogo";
import { Button } from "@/components/ui/button";
import { Bell, Menu, Mic, Search, Video } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [search, setSearch] = useState("");

  return (
    <header className="flex items-center justify-between px-4 py-2 border-b">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
        </Button>
        <Link href="/">
          <YoutubeLogo />
        </Link>
      </div>
      <div className="flex items-center flex-1 max-w-2xl ml-8">
        <form
          className="flex w-full max-w-sm items-center space-x-2"
          action={`/search?q=${search}`}
        >
          <Input
            className="rounded-l-full"
            placeholder="Search"
            type="search"
            name="q"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button className="rounded-r-full" type="submit" variant="secondary">
            <Search className="h-4 w-4" />
          </Button>
        </form>
        <Button className="ml-2 hidden sm:flex" size="icon" variant="ghost">
          <Mic className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex items-center">
        <Button className="mr-2 hidden sm:flex" size="icon" variant="ghost">
          <Video className="h-5 w-5" />
        </Button>
        <Button className="mr-2 hidden sm:flex" size="icon" variant="ghost">
          <Bell className="h-5 w-5" />
        </Button>
        <Button className="rounded-full" size="icon" variant="ghost">
          <Image
            alt="User"
            className="rounded-full"
            height="32"
            src="https://placehold.co/32"
            style={{
              aspectRatio: "32/32",
              objectFit: "cover",
            }}
            width="32"
          />
        </Button>
      </div>
    </header>
  );
};

export default Header;
