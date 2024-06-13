"use client";
import { useState } from "react";
type Props = {};
import {
  SlidersVertical,
  ChevronRight,
  Newspaper,
  CircleGauge,
  FileUp,
} from "lucide-react";
import { useWindowWidth } from "@react-hook/window-size";
import { Button } from "./ui/button";
import { Nav } from "./ui/nav";

export default function SideNavbar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;
  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }
  return (
    <div className="relative min-w-[80px] border-r px-3  pb-10 pt-24 ">
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className=" rounded-full p-2"
          >
            <ChevronRight />
          </Button>
        </div>
      )}
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Dashbord",
            icon: CircleGauge,
            href: "/Dashbord",
            variant: "default",
          },
          {
            title: "Report",
            icon: Newspaper,
            href: "/report",
            variant: "ghost",
          },
          {
            title: "Export",
            icon: FileUp,
            href: "/export",
            variant: "ghost",
          },
          {
            title: "Setting",
            icon: SlidersVertical,
            href: "/settings",
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
}