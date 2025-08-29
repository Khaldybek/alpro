import React from "react";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { NavigationMenuSection } from "./sections/NavigationMenuSection/NavigationMenuSection";
import { ProductListSection } from "./sections/ProductListSection/ProductListSection";

export const Desktop = (): JSX.Element => {
  return (
    <div className="bg-neutral-100 min-h-screen w-full flex justify-center">
      <div className="bg-light-themebackground w-full max-w-[1440px] min-h-screen flex flex-col">
        <MainContentSection />
        <div className="flex flex-1">
          <NavigationMenuSection />
          <div className="flex flex-col flex-1">
            <HeaderSection />
            <ProductListSection />
          </div>
        </div>
      </div>
    </div>
  );
};
