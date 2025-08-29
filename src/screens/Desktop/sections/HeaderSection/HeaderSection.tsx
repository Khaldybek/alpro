import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const HeaderSection = (): JSX.Element => {
  const statsData = [
    {
      value: "30,913",
      label: "Всего продуктов",
    },
    {
      value: "3,913",
      label: "Проданные продукты",
    },
    {
      value: "135",
      label: "Доступные продукты",
    },
    {
      value: "135",
      label: "Возвращенные продукты",
    },
  ];

  return (
    <Card className="w-full bg-light-themebackground-secondary rounded-[10px] shadow-bloor-2-secondary">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          {statsData.map((stat, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col">
                <div className="font-[number:var(--desktop-display-sm-medium-font-weight)] text-gray-900 text-[length:var(--desktop-display-sm-medium-font-size)] leading-[var(--desktop-display-sm-medium-line-height)] font-desktop-display-sm-medium tracking-[var(--desktop-display-sm-medium-letter-spacing)] [font-style:var(--desktop-display-sm-medium-font-style)]">
                  {stat.value}
                </div>
                <div className="mt-[31px] font-[number:var(--desktop-text-small-regular-font-weight)] text-gray-900 text-[length:var(--desktop-text-small-regular-font-size)] leading-[var(--desktop-text-small-regular-line-height)] font-desktop-text-small-regular tracking-[var(--desktop-text-small-regular-letter-spacing)] [font-style:var(--desktop-text-small-regular-font-style)]">
                  {stat.label}
                </div>
              </div>
              {index < statsData.length - 1 && (
                <Separator
                  orientation="vertical"
                  className="h-[54px] bg-[#d9d9d9]"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
