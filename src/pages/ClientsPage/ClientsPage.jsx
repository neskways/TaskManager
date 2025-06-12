import React, { useState, useRef, useEffect } from "react";
import s from "./ClientsPage.module.scss";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { getFromLocalStorage, saveToLocalStorage } from "../../modules/localStorageUtils";

const headers = ["Клиент", "Приоритет", "1С", "СисАдмин", "Почасовка", "Задачи"];
const LOCAL_STORAGE_KEY = "clients_table_col_widths";
const defaultWidths = [40, 12, 14, 14, 14, 6];

export const ClientsPage = () => {
  const [colWidths, setColWidths] = useState(() =>
    getFromLocalStorage(LOCAL_STORAGE_KEY, defaultWidths)
  );

  const tableRef = useRef(null);
  const isResizing = useRef(false);
  const startX = useRef(0);
  const resizingColIndex = useRef(null);
  const startWidths = useRef([0, 0]);

  useEffect(() => {
    saveToLocalStorage(LOCAL_STORAGE_KEY, colWidths);
  }, [colWidths]);

  const handleMouseDown = (e, index) => {
    e.preventDefault();
    isResizing.current = true;
    startX.current = e.clientX;
    resizingColIndex.current = index;
    startWidths.current = [colWidths[index], colWidths[index + 1]];
    document.body.style.cursor = "col-resize";
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!isResizing.current) return;

    const dx = e.clientX - startX.current;
    const tableWidth = tableRef.current.offsetWidth;
    const deltaPercent = (dx / tableWidth) * 100;

    let left = startWidths.current[0] + deltaPercent;
    let right = startWidths.current[1] - deltaPercent;

    const minPercent = 5;
    if (left < minPercent || right < minPercent) return;

    const newWidths = [...colWidths];
    newWidths[resizingColIndex.current] = left;
    newWidths[resizingColIndex.current + 1] = right;

    setColWidths(newWidths);
  };

  const handleMouseUp = () => {
    isResizing.current = false;
    document.body.style.cursor = "default";
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const gridTemplateColumns = colWidths.map((w) => `${w}%`).join(" ");

  return (
    <div className={s.gridTableWrapper}>
      <PageTitle titleText="Список клиентов" />
      <button onClick={() => localStorage.removeItem(LOCAL_STORAGE_KEY)}>Удалить</button>

      <div ref={tableRef} className={s.gridTable} style={{ gridTemplateColumns }}>
        {headers.map((header, i) => (
          <div key={i} className={s.gridHeader}>
            <div className={s.headerCell}>
              <span className={s.header_span}>{header}</span>
              {i < headers.length - 1 && (
                <div
                  className={s.resizer}
                  onMouseDown={(e) => handleMouseDown(e, i)}
                />
              )}
            </div>
          </div>
        ))}

        {/* Пример строки данных */}
        <div className={s.gridCell}>Клиент 1</div>
        <div className={s.gridCell}>Высокий</div>
        <div className={s.gridCell}>12345</div>
        <div className={s.gridCell}>54321</div>
        <div className={s.gridCell}>1000</div>
        <div className={s.gridCell}>5</div>
      </div>
    </div>
  );
};
