import {
  DownloadIcon,
  FilterIcon,
  InfoIcon,
  PlusIcon,
  RefreshCwIcon,
  CheckIcon,
} from "lucide-react";
import React, { useState } from "react";
import styles from "./ProductListSection.module.css";

const headerColumns = [
  { key: "position", label: "Поз.", className: "position" },
  { key: "productList", label: "Список продуктов", className: "productList" },
  {
    key: "priceRange",
    label: "Диапазон цен",
    className: "priceRange",
    hasInfo: true,
  },
  { key: "basePrice", label: "Базовая цена", className: "basePrice" },
  { key: "step", label: "Шаг", className: "step" },
  { key: "decrease", label: "Снижение", className: "decrease" },
  { key: "increase", label: "Поднятие", className: "increase" },
];

const productData = [
  {
    id: 1,
    position: 1,
    title: "Вешалка напольная Singleton TW610, металл, 150x154 см, черный",
    code: "106301738",
    image: "/rectangle-2269-4.png",
    lastCheck: "1 мин. назад",
    lastUpdate: "1 мин. назад",
    priceRange: { min: "100 000", max: "200 000" },
    basePrice: "912 121",
    step: "14 123",
    hasError: false,
    isActive: true,
    menuDotsClass: "gray600",
  },
  {
    id: 2,
    position: 1,
    title: "Вешалка напольная Singleton TW610, металл, 150x154 см, черный",
    code: "106301738",
    image: "/rectangle-2269-4.png",
    lastCheck: "1 мин. назад",
    lastUpdate: "1 мин. назад",
    priceRange: { min: "200 000", max: "100 000" },
    basePrice: "",
    step: "",
    hasError: true,
    errorText: "ошибка Текст, я хз",
    isActive: false,
    menuDotsClass: "gray300",
  },
  {
    id: 3,
    position: 1,
    title: "Вешалка напольная Singleton TW610, металл, 150x154 см, черный",
    code: "106301738",
    image: "/rectangle-2269-4.png",
    lastCheck: "1 мин. назад",
    lastUpdate: "1 мин. назад",
    priceRange: { min: "200 000", max: "100 000" },
    basePrice: "",
    step: "",
    hasError: true,
    errorText: "ошибка Текст, я хз",
    isActive: false,
    menuDotsClass: "gray300",
  },
  {
    id: 4,
    position: 1,
    title: "Вешалка напольная Singleton TW610, металл, 150x154 см, черный",
    code: "106301738",
    image: "/rectangle-2269-4.png",
    lastCheck: "1 мин. назад",
    lastUpdate: "1 мин. назад",
    priceRange: { min: "200 000", max: "100 000" },
    basePrice: "",
    step: "",
    hasError: true,
    errorText: "ошибка Текст, я хз",
    isActive: false,
    menuDotsClass: "gray300",
  },
  {
    id: 5,
    position: 1,
    title: "Вешалка напольная Singleton TW610, металл, 150x154 см, черный",
    code: "106301738",
    image: "/rectangle-2269-4.png",
    lastCheck: "1 мин. назад",
    lastUpdate: "1 мин. назад",
    priceRange: { min: "200 000", max: "100 000" },
    basePrice: "",
    step: "",
    hasError: true,
    errorText: "ошибка Текст, я хз",
    isActive: false,
    menuDotsClass: "gray300",
  },
];

const actionButtons = [
  {
    icon: PlusIcon,
    label: "Добавить товар",
    className: "addButton",
  },
  {
    icon: RefreshCwIcon,
    label: "Обновить",
    className: "refreshButton",
  },
  {
    icon: FilterIcon,
    label: "Фильтр",
    className: "filterButton",
  },
  {
    icon: DownloadIcon,
    label: "Экспорт",
    className: "exportButton",
  },
];

export const ProductListSection = (): JSX.Element => {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());
  const [allChecked, setAllChecked] = useState(false);
  const [decreaseChecked, setDecreaseChecked] = useState<Set<number>>(new Set());
  const [increaseChecked, setIncreaseChecked] = useState<Set<number>>(new Set());

  const handleItemCheck = (id: number) => {
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems.has(id)) {
      newCheckedItems.delete(id);
    } else {
      newCheckedItems.add(id);
    }
    setCheckedItems(newCheckedItems);
    setAllChecked(newCheckedItems.size === productData.length);
  };

  const handleSelectAll = () => {
    if (allChecked) {
      setCheckedItems(new Set());
      setAllChecked(false);
    } else {
      setCheckedItems(new Set(productData.map(p => p.id)));
      setAllChecked(true);
    }
  };

  const handleDecreaseCheck = (id: number) => {
    const newCheckedItems = new Set(decreaseChecked);
    if (newCheckedItems.has(id)) {
      newCheckedItems.delete(id);
    } else {
      newCheckedItems.add(id);
    }
    setDecreaseChecked(newCheckedItems);
  };

  const handleIncreaseCheck = (id: number) => {
    const newCheckedItems = new Set(increaseChecked);
    if (newCheckedItems.has(id)) {
      newCheckedItems.delete(id);
    } else {
      newCheckedItems.add(id);
    }
    setIncreaseChecked(newCheckedItems);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.actionBar}>
          {actionButtons.slice(0, 2).map((button, index) => (
            <button
              key={index}
              className={`${styles.actionButton} ${styles[button.className]}`}
            >
              <button.icon size={24} />
              <span>{button.label}</span>
            </button>
          ))}

          <div className={styles.searchContainer}>
            <input
              placeholder="Поиск..."
              className={styles.searchInput}
            />
          </div>

          {actionButtons.slice(2).map((button, index) => (
            <button
              key={index + 2}
              className={`${styles.actionButton} ${styles[button.className]}`}
            >
              <button.icon size={24} />
              <span>{button.label}</span>
            </button>
          ))}
        </div>

        <div className={styles.header}>
          <div 
            className={`${styles.selectAllCheckbox} ${allChecked ? styles.checked : styles.unchecked}`}
            onClick={handleSelectAll}
          >
            {allChecked && <CheckIcon size={16} color="white" />}
          </div>

          {headerColumns.map((column) => (
            <div key={column.key} className={`${styles.headerColumn} ${styles[column.className]}`}>
              <span className={styles.headerLabel}>
                {column.label}
              </span>
              {column.hasInfo && <InfoIcon className={styles.infoIcon} />}
            </div>
          ))}
        </div>

        <div className={styles.productList}>
          {productData.map((product, index) => (
            <div
              key={product.id}
              className={styles.productRow}
            >
              <div className={styles.menuDots}>
                <div className={`${styles.menuDot} ${styles.first} ${styles[product.menuDotsClass]}`} />
                <div className={`${styles.menuDot} ${styles.second} ${styles[product.menuDotsClass]}`} />
                <div className={`${styles.menuDot} ${styles.third} ${styles[product.menuDotsClass]}`} />
              </div>

              <div className={styles.priceRangeContainer}>
                <input
                  defaultValue={product.priceRange.min}
                  className={`${styles.priceInput} ${product.hasError ? styles.error : ''}`}
                />
                <div className={`${styles.priceSeparator} ${product.hasError ? styles.error : ''}`} />
                <input
                  defaultValue={product.priceRange.max}
                  className={`${styles.priceInput} ${product.hasError ? styles.error : ''}`}
                />
              </div>

              <input
                defaultValue={product.basePrice}
                className={styles.baseInput}
              />

              <input
                defaultValue={product.step}
                className={styles.stepInput}
              />

              <div 
                className={`${styles.checkbox} ${styles.decreaseCheckbox} ${decreaseChecked.has(product.id) ? styles.checked : styles.unchecked}`}
                onClick={() => handleDecreaseCheck(product.id)}
              >
                {decreaseChecked.has(product.id) && <CheckIcon size={16} color="white" />}
              </div>

              <div 
                className={`${styles.checkbox} ${styles.itemCheckbox} ${checkedItems.has(product.id) ? styles.checked : styles.unchecked}`}
                onClick={() => handleItemCheck(product.id)}
              >
                {checkedItems.has(product.id) && <CheckIcon size={16} color="white" />}
              </div>

              <div 
                className={`${styles.checkbox} ${styles.increaseCheckbox} ${increaseChecked.has(product.id) ? styles.checked : styles.unchecked}`}
                onClick={() => handleIncreaseCheck(product.id)}
              >
                {increaseChecked.has(product.id) && <CheckIcon size={16} color="white" />}
              </div>

              <div className={styles.productInfo}>
                <div className={styles.productTitle}>
                  {product.title}
                </div>

                <img
                  className={styles.productImage}
                  alt="Rectangle"
                  src={product.image}
                />

                <div className={styles.productCode}>
                  {product.code}
                </div>

                <div className={styles.lastUpdate}>
                  Последнее обновление цены: {product.lastUpdate}
                </div>

                <div className={styles.lastCheck}>
                  Последняя проверка: {product.lastCheck}
                </div>
              </div>

              <div className={styles.position}>
                {product.position}
              </div>

              {product.hasError && (
                <div className={styles.errorText}>
                  {product.errorText}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.paginationContainer}>
          <div className={styles.paginationWrapper}>
            <span className={styles.itemsInfo}>
              Показано 1-5 из 50 товаров
            </span>
            
            <div className={styles.paginationControls}>
              <button className={styles.navButton} disabled>
                Предыдущая
              </button>
              
              <div className={styles.pageNumbers}>
                <div className={`${styles.pageNumber} ${styles.active}`}>
                  1
                </div>
                <div className={`${styles.pageNumber} ${styles.inactive}`}>
                  2
                </div>
                <div className={`${styles.pageNumber} ${styles.inactive}`}>
                  3
                </div>
                <div className={styles.ellipsis}>
                  ...
                </div>
                <div className={`${styles.pageNumber} ${styles.inactive}`}>
                  10
                </div>
              </div>
              
              <button className={styles.navButton}>
                Следующая
              </button>
            </div>
            
            <div className={styles.jumpToPage}>
              <span className={styles.jumpLabel}>Перейти на страницу:</span>
              <input 
                type="number" 
                defaultValue="3" 
                className={styles.jumpInput}
              />
              <button className={styles.jumpButton}>
                Перейти
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};