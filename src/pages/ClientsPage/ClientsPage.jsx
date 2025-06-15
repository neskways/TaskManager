import React, { useState, useRef, useEffect } from "react";
import s from "./ClientsPage.module.scss";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "../../modules/localStorageUtils";
import { ClientGridCell } from "../../components/ClientGridCell/ClientGridCell";
import { headersTitle } from "../../modules/Arrays";
import { ClientModal } from "../../components/ClientModal/ClientModal"; // добавь импорт

const LOCAL_STORAGE_KEY = "clients_table_col_widths";
const defaultWidths = [40, 12, 14, 14, 14, 6];

// 🔹 Пример массива данных клиентов
const mockClients = [
  {
    name: "Клиент 1",
    status: "Высокий",
    phone: "12345",
    altPhone: "54321",
    balance: "1000",
    rating: "5",
  },
  {
    name: "Клиент 2",
    status: "Средний",
    phone: "67890",
    altPhone: "09876",
    balance: "2500",
    rating: "4",
  },
  {
    name: "Клиент 3",
    status: "Низкий",
    phone: "11111",
    altPhone: "22222",
    balance: "500",
    rating: "2",
  },
  {
    name: "Клиент 4",
    status: "Низкий",
    phone: "11111",
    altPhone: "22222",
    balance: "500",
    rating: "2",
  },
  {
    name: "Клиент 5",
    status: "Низкий",
    phone: "11111",
    altPhone: "22222",
    balance: "500",
    rating: "2",
  },
  {
    name: "Клиент 6",
    status: "Низкий",
    phone: "11111",
    altPhone: "22222",
    balance: "500",
    rating: "2",
  },
  {
    name: "Клиент 7",
    status: "Низкий",
    phone: "11111",
    altPhone: "22222",
    balance: "500",
    rating: "2",
  },
  {
    name: "Клиент 1",
    status: "Высокий",
    phone: "12345",
    altPhone: "54321",
    balance: "1000",
    rating: "5",
  },
  {
    name: "Клиент 2",
    status: "Средний",
    phone: "67890",
    altPhone: "09876",
    balance: "2500",
    rating: "4",
  },
  {
    name: "Клиент 3",
    status: "Низкий",
    phone: "11111",
    altPhone: "22222",
    balance: "500",
    rating: "2",
  },
  {
    name: "Клиент 4",
    status: "Низкий",
    phone: "11111",
    altPhone: "22222",
    balance: "500",
    rating: "2",
  },
  {
    name: "Клиент 5",
    status: "Низкий",
    phone: "11111",
    altPhone: "22222",
    balance: "500",
    rating: "2",
  },
  {
    name: "Клиент 6",
    status: "Низкий",
    phone: "11111",
    altPhone: "22222",
    balance: "500",
    rating: "2",
  },
  {
    name: "Клиент 7",
    status: "Низкий",
    phone: "11111",
    altPhone: "22222",
    balance: "500",
    rating: "2",
  },
  {
    name: "Клиент 1",
    status: "Высокий",
    phone: "12345",
    altPhone: "54321",
    balance: "1000",
    rating: "5",
  },
  {
    name: "Клиент 2",
    status: "Средний",
    phone: "67890",
    altPhone: "09876",
    balance: "2500",
    rating: "4",
  },
  {
    name: "Клиент 3",
    status: "Низкий",
    phone: "11111",
    altPhone: "22222",
    balance: "500",
    rating: "2",
  },
  {
    name: "Клиент 4",
    status: "Низкий",
    phone: "11111",
    altPhone: "22222",
    balance: "500",
    rating: "2",
  },
  {
    name: "Клиент 5",
    status: "Низкий",
    phone: "11111",
    altPhone: "22222",
    balance: "500",
    rating: "2",
  },
  {
    name: "Клиент 6",
    status: "Низкий",
    phone: "11111",
    altPhone: "22222",
    balance: "500",
    rating: "2",
  },
  {
    name: "Клиент 7",
    status: "Низкий",
    phone: "11111",
    altPhone: "22222",
    balance: "500",
    rating: "2",
  },
  {
    name: "Клиент 1",
    status: "Высокий",
    phone: "12345",
    altPhone: "54321",
    balance: "1000",
    rating: "5",
  },
  {
    name: "Клиент 2",
    status: "Средний",
    phone: "67890",
    altPhone: "09876",
    balance: "2500",
    rating: "4",
  },
  {
    name: "Клиент 3",
    status: "Низкий",
    phone: "11111",
    altPhone: "22222",
    balance: "500",
    rating: "2",
  },
  {
    name: "Клиент 4",
    status: "Низкий",
    phone: "11111",
    altPhone: "22222",
    balance: "500",
    rating: "2",
  },
  {
    name: "Клиент 5",
    status: "Низкий",
    phone: "11111",
    altPhone: "22222",
    balance: "500",
    rating: "2",
  },
  {
    name: "Клиент 6",
    status: "Низкий",
    phone: "11111",
    altPhone: "22222",
    balance: "500",
    rating: "2",
  },
  {
    name: "Клиент 7",
    status: "Низкий",
    phone: "11111",
    altPhone: "22222",
    balance: "500",
    rating: "2",
  },
];

export const ClientsPage = () => {
  const [colWidths, setColWidths] = useState(() =>
    getFromLocalStorage(LOCAL_STORAGE_KEY, defaultWidths)
  );

  const [selectedClient, setSelectedClient] = useState(null); // управление модалкой

  const startX = useRef(0);
  const tableRef = useRef(null);
  const isResizing = useRef(false);
  const startWidths = useRef([0, 0]);
  const resizingColIndex = useRef(null);
  const gridTemplateColumns = colWidths.map((w) => `${w}%`).join(" ");

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

  return (
    <div className={s.gridTableWrapper}>
      <PageTitle titleText="Список клиентов" />

      <div
        ref={tableRef}
        className={s.gridTable}
        style={{ gridTemplateColumns }}
      >
        {headersTitle.map((header, i) => (
          <div key={i} className={s.gridHeader}>
            <div className={s.headerCell}>
              <span className={s.header_span}>{header}</span>
              {i < headersTitle.length - 1 && (
                <div
                  className={s.resizer}
                  onMouseDown={(e) => handleMouseDown(e, i)}
                />
              )}
            </div>
          </div>
        ))}

        {mockClients.map((client, index) => (
            <ClientGridCell key={index} clientData={client} setSelectedClient={setSelectedClient} />
        ))}
      </div>

      <ClientModal
        clientData={selectedClient}
        onClose={() => setSelectedClient(false)}
      />
    </div>
  );
};
