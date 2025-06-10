import React, { useState, useRef } from "react";
import s from "./ClientsPage.module.scss";

const headers = ["Клиент", "Приоритет", "1С", "СисАдмин", "Почасовка", "Задачи"];
const initialWidths = [150, 150, 150, 150, 150, 150]; // стартовые ширины колонок

export const ClientsPage = () => {
  const [colWidths, setColWidths] = useState(initialWidths);
  const isResizing = useRef(false);
  const startX = useRef(0);
  const resizingColIndex = useRef(null);
  const startWidths = useRef([0, 0]);

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
    const minWidth = 80;

    let newWidthLeft = startWidths.current[0] + dx;
    let newWidthRight = startWidths.current[1] - dx;

    if (newWidthLeft < minWidth || newWidthRight < minWidth) return;

    const newWidths = [...colWidths];
    newWidths[resizingColIndex.current] = newWidthLeft;
    newWidths[resizingColIndex.current + 1] = newWidthRight;
    setColWidths(newWidths);
  };

  const handleMouseUp = () => {
  isResizing.current = false;
  document.body.style.cursor = "default"; // Возвращаем курсор
  document.removeEventListener("mousemove", handleMouseMove);
  document.removeEventListener("mouseup", handleMouseUp);
};

  return (
    <div className={s.gridTableWrapper}>
      <div
        className={s.gridTable}
        style={{ gridTemplateColumns: colWidths.map(w => `${w}px`).join(" ") }}
      >
        {/* Заголовки */}
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

        {/* Данные */}
        <div className={s.gridCell}>Клиент 1</div>
        <div className={s.gridCell}>Высокий</div>
        <div className={s.gridCell}>12345</div>
        <div className={s.gridCell}>54321</div>
        <div className={s.gridCell}>1000</div>
        <div className={s.gridCell}>5</div>

        <div className={s.gridCell}>Клиент 2</div>
        <div className={s.gridCell}>Низкий</div>
        <div className={s.gridCell}>67890</div>
        <div className={s.gridCell}>09876</div>
        <div className={s.gridCell}>500</div>
        <div className={s.gridCell}>3</div>
      </div>
    </div>
  );
};
