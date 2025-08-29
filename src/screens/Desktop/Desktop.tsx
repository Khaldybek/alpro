import React from "react";
import styles from "./Desktop.module.css";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { NavigationMenuSection } from "./sections/NavigationMenuSection/NavigationMenuSection";
import { ProductListSection } from "./sections/ProductListSection/ProductListSection";

export const Desktop = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <MainContentSection />
        <div className={styles.mainLayout}>
          <NavigationMenuSection />
          <div className={styles.contentArea}>
            <HeaderSection />
            <ProductListSection />
          </div>
        </div>
      </div>
    </div>
  );
};
