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
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Input } from "../../../../components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "../../../../components/ui/pagination";

const headerColumns = [
  { key: "position", label: "Поз.", left: "left-[67px]" },
  { key: "productList", label: "Список продуктов", left: "left-[125px]" },
  {
    key: "priceRange",
    label: "Диапазон цен",
    left: "left-[589px]",
    hasInfo: true,
  },
  { key: "basePrice", label: "Базовая цена", left: "left-[765px]" },
  { key: "step", label: "Шаг", left: "left-[909px]" },
  { key: "decrease", label: "Снижение", left: "left-[973px]" },
  { key: "increase", label: "Поднятие", left: "left-[1064px]" },
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
    menuDots: "bg-grays-600",
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
    menuDots: "bg-grays-300",
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
    menuDots: "bg-grays-300",
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
    menuDots: "bg-grays-300",
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
    menuDots: "bg-grays-300",
  },
];

const actionButtons = [
  {
    icon: PlusIcon,
    label: "Добавить товар",
    width: "w-[163px]",
    left: "left-5",
  },
  {
    icon: RefreshCwIcon,
    label: "Обновить",
    width: "w-[120px]",
    left: "left-[207px]",
  },
  {
    icon: FilterIcon,
    label: "Фильтр",
    width: "w-[104px]",
    left: "left-[875px]",
  },
  {
    icon: DownloadIcon,
    label: "Экспорт",
    width: "w-[110px]",
    left: "left-[995px]",
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
    <Card className="w-full bg-light-themebackground-secondary rounded-[10px] overflow-hidden shadow-bloor-2-secondary">
      <CardContent className="p-0 relative">
        <div className="flex items-center gap-4 p-4">
          {actionButtons.slice(0, 2).map((button, index) => (
            <Button
              key={index}
              variant="outline"
              className={`h-9 ${button.width} rounded-[10px] border-[#dddddd] bg-white`}
            >
              <button.icon className="w-6 h-6 mr-2" />
              <span className="font-desktop-text-small-medium font-[number:var(--desktop-text-small-medium-font-weight)] text-light-themetext-secondary text-[length:var(--desktop-text-small-medium-font-size)] tracking-[var(--desktop-text-small-medium-letter-spacing)] leading-[var(--desktop-text-small-medium-line-height)] [font-style:var(--desktop-text-small-medium-font-style)]">
                {button.label}
              </span>
            </Button>
          ))}

          <div className="flex-1 max-w-[500px] ml-4">
            <Input
              placeholder="Поиск..."
              className="h-9 rounded-[10px] border-[#dddddd] font-desktop-text-small-regular font-[number:var(--desktop-text-small-regular-font-weight)] text-light-themetext-secondary text-[length:var(--desktop-text-small-regular-font-size)] tracking-[var(--desktop-text-small-regular-letter-spacing)] leading-[var(--desktop-text-small-regular-line-height)] [font-style:var(--desktop-text-small-regular-font-style)]"
            />
          </div>

          {actionButtons.slice(2).map((button, index) => (
            <Button
              key={index + 2}
              variant="outline"
              className={`h-9 ${button.width} rounded-[10px] border-[#dddddd] bg-white`}
            >
              <button.icon className="w-6 h-6 mr-2" />
              <span className="font-desktop-text-small-medium font-[number:var(--desktop-text-small-medium-font-weight)] text-light-themetext-secondary text-[length:var(--desktop-text-small-medium-font-size)] tracking-[var(--desktop-text-small-medium-letter-spacing)] leading-[var(--desktop-text-small-medium-line-height)] [font-style:var(--desktop-text-small-medium-font-style)]">
                {button.label}
              </span>
            </Button>
          ))}
        </div>

        <div className="w-full h-12 bg-grays-200 border-t border-b border-[#dddddd] relative">
          <div 
            className={`absolute top-3 left-5 w-6 h-6 rounded-[5px] border border-[#1a1a1a] cursor-pointer flex items-center justify-center ${allChecked ? 'bg-[#F5793B]' : 'bg-white'}`}
            onClick={handleSelectAll}
          >
            {allChecked && <CheckIcon className="w-4 h-4 text-white" />}
          </div>

          {headerColumns.map((column) => (
            <div key={column.key} className={`absolute top-3 ${column.left}`}>
              <div className="flex items-center gap-2">
                <span className="font-desktop-text-small-regular font-[number:var(--desktop-text-small-regular-font-weight)] text-light-themetext-primary text-[length:var(--desktop-text-small-regular-font-size)] tracking-[var(--desktop-text-small-regular-letter-spacing)] leading-[var(--desktop-text-small-regular-line-height)] [font-style:var(--desktop-text-small-regular-font-style)]">
                  {column.label}
                </span>
                {column.hasInfo && <InfoIcon className="w-3 h-3" />}
              </div>
            </div>
          ))}
        </div>

        <div className="divide-y divide-[#dddddd]">
          {productData.map((product, index) => (
            <div
              key={product.id}
              className="h-[140px] relative border-b border-[#dddddd]"
            >
              <div className="absolute top-11 left-[1132px] w-2 h-8">
                <div
                  className={`absolute w-2 h-2 top-0 left-0 ${product.menuDots} rounded-[62px]`}
                />
                <div
                  className={`absolute w-2 h-2 top-3 left-0 ${product.menuDots} rounded-[62px]`}
                />
                <div
                  className={`absolute w-2 h-2 top-6 left-0 ${product.menuDots} rounded-[62px]`}
                />
              </div>

              <div className="absolute top-11 left-[541px] w-[210px] h-8 flex items-center gap-3">
                <Input
                  defaultValue={product.priceRange.min}
                  className={`w-[85px] h-8 rounded-[10px] border ${product.hasError ? "border-[#d32f2f]" : "border-[#dddddd]"} text-right font-desktop-text-small-regular font-[number:var(--desktop-text-small-regular-font-weight)] text-black text-[length:var(--desktop-text-small-regular-font-size)] tracking-[var(--desktop-text-small-regular-letter-spacing)] leading-[var(--desktop-text-small-regular-line-height)] [font-style:var(--desktop-text-small-regular-font-style)] px-2`}
                />
                <div
                  className={`w-3 h-0.5 ${product.hasError ? "bg-[#d32f2f]" : "bg-light-themeborder"}`}
                />
                <Input
                  defaultValue={product.priceRange.max}
                  className={`w-[85px] h-8 rounded-[10px] border ${product.hasError ? "border-[#d32f2f]" : "border-[#dddddd]"} text-right font-desktop-text-small-regular font-[number:var(--desktop-text-small-regular-font-weight)] text-black text-[length:var(--desktop-text-small-regular-font-size)] tracking-[var(--desktop-text-small-regular-letter-spacing)] leading-[var(--desktop-text-small-regular-line-height)] [font-style:var(--desktop-text-small-regular-font-style)] px-2`}
                />
              </div>

              <Input
                defaultValue={product.basePrice}
                className="absolute top-11 left-[763px] w-[99px] h-8 rounded-[10px] border border-[#dddddd] text-right font-desktop-text-small-regular font-[number:var(--desktop-text-small-regular-font-weight)] text-black text-[length:var(--desktop-text-small-regular-font-size)] tracking-[var(--desktop-text-small-regular-letter-spacing)] leading-[var(--desktop-text-small-regular-line-height)] [font-style:var(--desktop-text-small-regular-font-style)] px-2"
              />

              <Input
                defaultValue={product.step}
                className="absolute top-11 left-[874px] w-[99px] h-8 rounded-[10px] border border-[#dddddd] text-right font-desktop-text-small-regular font-[number:var(--desktop-text-small-regular-font-weight)] text-black text-[length:var(--desktop-text-small-regular-font-size)] tracking-[var(--desktop-text-small-regular-letter-spacing)] leading-[var(--desktop-text-small-regular-line-height)] [font-style:var(--desktop-text-small-regular-font-style)] px-2"
              />

              <div 
                className={`absolute top-12 left-[997px] w-6 h-6 rounded-[5px] border border-[#1a1a1a] cursor-pointer flex items-center justify-center ${decreaseChecked.has(product.id) ? 'bg-[#F5793B]' : 'bg-white'}`}
                onClick={() => handleDecreaseCheck(product.id)}
              >
                {decreaseChecked.has(product.id) && <CheckIcon className="w-4 h-4 text-white" />}
              </div>

              <div 
                className={`absolute top-[58px] left-5 w-6 h-6 rounded-[5px] border border-[#1a1a1a] cursor-pointer flex items-center justify-center ${checkedItems.has(product.id) ? 'bg-[#F5793B]' : 'bg-white'}`}
                onClick={() => handleItemCheck(product.id)}
              >
                {checkedItems.has(product.id) && <CheckIcon className="w-4 h-4 text-white" />}
              </div>

              <div 
                className={`absolute top-12 left-[1075px] w-6 h-6 rounded-[5px] border border-[#1a1a1a] cursor-pointer flex items-center justify-center ${increaseChecked.has(product.id) ? 'bg-[#F5793B]' : 'bg-white'}`}
                onClick={() => handleIncreaseCheck(product.id)}
              >
                {increaseChecked.has(product.id) && <CheckIcon className="w-4 h-4 text-white" />}
              </div>

              <div className="absolute top-5 left-[125px] w-[400px] h-[100px]">
                <div className="absolute -top-px left-[120px] w-[280px] font-desktop-text-small-medium font-[number:var(--desktop-text-small-medium-font-weight)] text-light-themetext-primary text-[length:var(--desktop-text-small-medium-font-size)] tracking-[var(--desktop-text-small-medium-letter-spacing)] leading-[var(--desktop-text-small-medium-line-height)] [font-style:var(--desktop-text-small-medium-font-style)]">
                  {product.title}
                </div>

                <img
                  className="absolute w-[100px] h-[100px] top-0 left-0 object-cover"
                  alt="Rectangle"
                  src={product.image}
                />

                <div className="absolute top-[39px] left-[120px] font-desktop-text-xs-medium font-[number:var(--desktop-text-xs-medium-font-weight)] text-light-themetext-secondary text-[length:var(--desktop-text-xs-medium-font-size)] tracking-[var(--desktop-text-xs-medium-letter-spacing)] leading-[var(--desktop-text-xs-medium-line-height)] [font-style:var(--desktop-text-xs-medium-font-style)]">
                  {product.code}
                </div>

                <div className="absolute top-[81px] left-[120px] font-desktop-text-xs-medium font-[number:var(--desktop-text-xs-medium-font-weight)] text-light-themetext-secondary text-[length:var(--desktop-text-xs-medium-font-size)] tracking-[var(--desktop-text-xs-medium-letter-spacing)] leading-[var(--desktop-text-xs-medium-line-height)] [font-style:var(--desktop-text-xs-medium-font-style)]">
                  Последнее обновление цены: {product.lastUpdate}
                </div>

                <div className="absolute top-[63px] left-[120px] font-desktop-text-xs-medium font-[number:var(--desktop-text-xs-medium-font-weight)] text-light-themetext-secondary text-[length:var(--desktop-text-xs-medium-font-size)] tracking-[var(--desktop-text-xs-medium-letter-spacing)] leading-[var(--desktop-text-xs-medium-line-height)] [font-style:var(--desktop-text-xs-medium-font-style)]">
                  Последняя проверка: {product.lastCheck}
                </div>
              </div>

              <div className="absolute top-[59px] left-[76px] w-[13px] font-desktop-text-small-medium font-[number:var(--desktop-text-small-medium-font-weight)] text-black text-[length:var(--desktop-text-small-medium-font-size)] text-center tracking-[var(--desktop-text-small-medium-letter-spacing)] leading-[var(--desktop-text-small-medium-line-height)] [font-style:var(--desktop-text-small-medium-font-style)]">
                {product.position}
              </div>

              {product.hasError && (
                <div className="absolute top-[79px] left-[541px] font-desktop-text-xs-regular font-[number:var(--desktop-text-xs-regular-font-weight)] text-color-kitdanger-secondary text-[length:var(--desktop-text-xs-regular-font-size)] tracking-[var(--desktop-text-xs-regular-letter-spacing)] leading-[var(--desktop-text-xs-regular-line-height)] [font-style:var(--desktop-text-xs-regular-font-style)]">
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
            
            <button className={styles.navButton} disabled>
              Предыдущая
            </button>
            
            <div className={styles.pageNumbers}>
              <div className={`${styles.pageNumber} ${styles.active}`}>
                1
              </div>
              <div className={styles.pageNumber}>
                2
              </div>
              <div className={styles.pageNumber}>
                3
              </div>
              <div className={styles.ellipsis}>
                ...
              </div>
              <div className={styles.pageNumber}>
                10
              </div>
            </div>
            
            <button className={styles.navButton}>
              Следующая
            </button>
            
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
      </CardContent>
    </Card>
  );
};