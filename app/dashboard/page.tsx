import React from "react";
import LeftSection from "./views/LeftSection";
import RightSection from "./views/RightSection";
import { Theme } from "@radix-ui/themes";

const DashboardPage: React.FC = () => {
  return (
    <Theme>
      <main className="h-screen w-screen flex">
        <LeftSection />
        <RightSection />
      </main>
    </Theme>
  );
};

export default DashboardPage;
