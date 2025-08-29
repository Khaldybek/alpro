import React from "react";
import styles from "./NavigationMenuSection.module.css";

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
    <aside className={styles.sidebar}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Управление магазином
            </h2>

            <div className={styles.menuList}>
              {storeManagementItems.map((item, index) => (
                <div key={`store-${index}`} className={styles.menuItem}>
                  <div className={styles.menuLink}>
                    <img
                      className={styles.menuIcon}
                      alt={item.label}
                      src={item.icon}
                    />
                    <span
                      className={`${styles.menuText} ${
                        item.isActive
                          ? styles.menuTextActive
                          : styles.menuTextInactive
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Обучение
            </h2>

            <div className={styles.menuListLearning}>
              {learningItems.map((item, index) => (
                <div
                  key={`learning-${index}`}
                  className={styles.menuItem}
                >
                  <div className={styles.menuLink}>
                    <img
                      className={styles.menuIcon}
                      alt={item.label}
                      src={item.icon}
                    />
                    <span className={`${styles.menuText} ${styles.menuTextInactive}`}>
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
};