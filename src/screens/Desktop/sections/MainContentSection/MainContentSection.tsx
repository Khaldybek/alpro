import React from "react";

export const MainContentSection = (): JSX.Element => {
  return (
    <header className="flex flex-col w-full items-start gap-2.5 px-6 py-3 bg-light-themebackground-secondary border-b border-solid border-[#dddddd]">
      <div className="flex items-center justify-between w-full">
        <img className="w-[115px] h-9" alt="Alash Logo" src="/image-420.png" />

        <div className="flex items-center gap-6">
          <div className="w-[252px] h-9 bg-light-themebackground-secondary rounded-[10px] border border-solid border-[#dddddd]">
            <div className="flex w-[220px] items-center justify-between relative top-1.5 left-6">
              <div className="flex items-center gap-2">
                <img
                  className="w-6 h-6"
                  alt="Organization icon"
                  src="/image-186.png"
                />

                <div className="font-desktop-text-small-medium font-[number:var(--desktop-text-small-medium-font-weight)] text-light-themetext-primary text-[length:var(--desktop-text-small-medium-font-size)] tracking-[var(--desktop-text-small-medium-letter-spacing)] leading-[var(--desktop-text-small-medium-line-height)] whitespace-nowrap [font-style:var(--desktop-text-small-medium-font-style)]">
                  TOO "ALASH"
                </div>
              </div>

              <img
                className="w-5 h-5"
                alt="Dropdown arrow"
                src="/lsicon-left-outline-2.svg"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="font-desktop-text-md-regular font-[number:var(--desktop-text-md-regular-font-weight)] text-light-themetext-primary text-[length:var(--desktop-text-md-regular-font-size)] tracking-[var(--desktop-text-md-regular-letter-spacing)] leading-[var(--desktop-text-md-regular-line-height)] whitespace-nowrap [font-style:var(--desktop-text-md-regular-font-style)]">
              RU
            </div>

            <img
              className="w-6 h-6"
              alt="Notifications"
              src="/remind-----.svg"
            />

            <img className="w-6 h-6" alt="Menu" src="/pull-door-----.svg" />
          </div>
        </div>
      </div>
    </header>
  );
};
