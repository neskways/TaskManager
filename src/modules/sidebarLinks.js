//Список страниц для Sidebar
export const secondaryLinks = [
  {
    label: "Назначенные мне заявки",
    to: "/ticket/my_assigned",
    exact: true,
  },
  {
    label: "Заявки 1С",
    to: "/ticket/1с_applications",
    exact: true,
  },
   {
    label: "Открытые заявки",
    to: "/ticket/all_open",
    exact: true,
  },
   {
    label: "Заявки моей организации",
    to: "/ticket/my_organization_tickets",
    exact: true,
  },
   {
    label: "Закрытые заявки",
    to: "/ticket/all_closed",
    exact: true,
  },
  {
    label: "Все заявки",
    to: "/ticket/all_tickets",
    exact: true,
  },
];
