import React from "react";
import styles from "./HeaderSection.module.css";

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
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.statsContainer}>
          {statsData.map((stat, index) => (
            <React.Fragment key={index}>
              <div className={styles.statItem}>
                <div className={styles.statValue}>
                  {stat.value}
                </div>
                <div className={styles.statLabel}>
                  {stat.label}
                </div>
              </div>
              {index < statsData.length - 1 && (
                <div className={styles.separator} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
