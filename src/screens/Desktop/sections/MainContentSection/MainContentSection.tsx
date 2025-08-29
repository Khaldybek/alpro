import React from "react";
import styles from "./MainContentSection.module.css";

export const MainContentSection = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <img className={styles.logo} alt="Alash Logo" src="/image-420.png" />

        <div className={styles.rightSection}>
          <div className={styles.organizationSelector}>
            <div className={styles.organizationContent}>
              <div className={styles.organizationInfo}>
                <img
                  className={styles.organizationIcon}
                  alt="Organization icon"
                  src="/image-186.png"
                />

                <div className={styles.organizationName}>
                  TOO "ALASH"
                </div>
              </div>

              <img
                className={styles.dropdownArrow}
                alt="Dropdown arrow"
                src="/lsicon-left-outline-2.svg"
              />
            </div>
          </div>

          <div className={styles.userActions}>
            <div className={styles.languageText}>
              RU
            </div>

            <img
              className={styles.actionIcon}
              alt="Notifications"
              src="/remind-----.svg"
            />

            <img className={styles.actionIcon} alt="Menu" src="/pull-door-----.svg" />
          </div>
        </div>
      </div>
    </header>
  );
};
