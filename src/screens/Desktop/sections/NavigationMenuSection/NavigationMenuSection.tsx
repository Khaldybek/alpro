import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

const storeManagementItems = [
  {
    icon: "/chart-histogram.svg",
    label: "Аналитика товара",
    isActive: false,
  },
  {
    icon: "/ad-product.svg",
    label: "Товары",
    isActive: true,
  },
  {
    icon: "/red-envelope.svg",
    label: "Заказы",
    isActive: false,
  },
  {
    icon: "/more-app.svg",
    label: "Расширения",
    isActive: false,
  },
];

const learningItems = [
  {
    icon: "/carousel-video.svg",
    label: "Видеоуроки",
    isActive: false,
  },
  {
    icon: "/list-middle.svg",
    label: "План обучения",
    isActive: false,
  },
];

export const NavigationMenuSection = (): JSX.Element => {
  return (
    <aside className="w-60 h-[965px] bg-white">
      <div className="flex flex-col w-[169px] items-start gap-5 pt-5 pl-6">
        <nav className="w-full">
          <div className="mb-5">
            <h2 className="font-desktop-text-small-regular font-[number:var(--desktop-text-small-regular-font-weight)] text-light-themetext-primary text-[length:var(--desktop-text-small-regular-font-size)] tracking-[var(--desktop-text-small-regular-letter-spacing)] leading-[var(--desktop-text-small-regular-line-height)] [font-style:var(--desktop-text-small-regular-font-style)] mb-8">
              Управление магазином
            </h2>

            <NavigationMenu>
              <NavigationMenuList className="flex flex-col items-start gap-3 pl-3">
                {storeManagementItems.map((item, index) => (
                  <NavigationMenuItem key={`store-${index}`} className="w-full">
                    <NavigationMenuLink className="flex items-center gap-2 h-6 w-full">
                      <img
                        className="w-6 h-6 flex-shrink-0"
                        alt={item.label}
                        src={item.icon}
                      />
                      <span
                        className={`font-desktop-text-small-regular font-[number:var(--desktop-text-small-regular-font-weight)] text-[length:var(--desktop-text-small-regular-font-size)] tracking-[var(--desktop-text-small-regular-letter-spacing)] leading-[var(--desktop-text-small-regular-line-height)] [font-style:var(--desktop-text-small-regular-font-style)] whitespace-nowrap ${
                          item.isActive
                            ? "text-dark-theme-color-schemeprimary"
                            : "text-light-themetext-primary"
                        }`}
                      >
                        {item.label}
                      </span>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div>
            <h2 className="font-desktop-text-small-regular font-[number:var(--desktop-text-small-regular-font-weight)] text-light-themetext-primary text-[length:var(--desktop-text-small-regular-font-size)] tracking-[var(--desktop-text-small-regular-letter-spacing)] leading-[var(--desktop-text-small-regular-line-height)] [font-style:var(--desktop-text-small-regular-font-style)] mb-8">
              Управление магазином
            </h2>

            <NavigationMenu>
              <NavigationMenuList className="flex flex-col items-start gap-10 pl-3">
                {learningItems.map((item, index) => (
                  <NavigationMenuItem
                    key={`learning-${index}`}
                    className="w-full"
                  >
                    <NavigationMenuLink className="flex items-center gap-2 h-6 w-full">
                      <img
                        className="w-6 h-6 flex-shrink-0"
                        alt={item.label}
                        src={item.icon}
                      />
                      <span className="font-desktop-text-small-regular font-[number:var(--desktop-text-small-regular-font-weight)] text-light-themetext-primary text-[length:var(--desktop-text-small-regular-font-size)] tracking-[var(--desktop-text-small-regular-letter-spacing)] leading-[var(--desktop-text-small-regular-line-height)] [font-style:var(--desktop-text-small-regular-font-style)] whitespace-nowrap">
                        {item.label}
                      </span>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </nav>
      </div>
    </aside>
  );
};
