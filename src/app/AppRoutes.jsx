import { Routes, Route, Navigate } from "react-router-dom";
// import AllTicketsPage from "../pages/MainPage/AllTicketsPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { MyAssigned } from "../pages/MyAssigned/MyAssigned";
import { TicketPage } from "../pages/TicketPage/TicketPage";
import { ProfilePage } from "../pages/ProfilePage/ProfilePage";
import { ClientsPage } from "../pages/ClientsPage/ClientsPage";
import { MainLayout } from "../components/MainLayout/MainLayout";
import { Applications1C } from "../pages/Applications1C/Applications1C";
import { StatisticsPage } from "../pages/StatisticsPage/StatisticsPage";
import { ParametersPage } from "../pages/ParametersPage/ParametersPage";
import { ClosedTodayPage } from "../pages/ClosedTodayPage/ClosedTodayPage";
import { CreateTicketPage } from "../pages/CreateTicketPage/CreateTicketPage";
import { AllClosedTicketPage } from "../pages/AllClosedTicketPage/AllClosedTicketPage";
import { UniversalTicketsSheet } from "../pages/UniversalTicketsSheet/UniversalTicketsSheet";
import { MyOrganizationTicketsPage } from "../pages/MyOrganizationTicketsPage/MyOrganizationTicketsPage";
import { SchedulePage } from "../pages/SchedulePage/SchedulePage";

const PrivateRoute = ({ children }) => {
  // const { isAuthenticated } = useAuth();
  const isAuthenticated = true;
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const NavigateFromLogin = ({ children }) => {
  // const { isAuthenticated } = useAuth();
  const isAuthenticated = true;
  return isAuthenticated ? (
    <Navigate to="/ticket/my_assigned" replace />
  ) : (
    children
  );
};

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <NavigateFromLogin>
            <LoginPage />
          </NavigateFromLogin>
        }
      />

      <Route
        path="/"
        element={
          <PrivateRoute>
            <MainLayout />
          </PrivateRoute>
        }
      >
          <Route
          path="*"
          element={
            <PrivateRoute>
              <ErrorPage />
            </PrivateRoute>
          }
        />
        //Перенаправляет на странице /ticket по умолчанию
        <Route index element={<Navigate to="/ticket" replace />} />

        //Страница с задачами, по умолчанию показывает список задач пользователя
        <Route path="/ticket" element={<TicketPage />}>
          <Route index element={<Navigate to="my_assigned" replace />} />
          <Route path="my_assigned" element={<UniversalTicketsSheet url={"my_assigned"} />}  />
          <Route path="1с_applications" element={<UniversalTicketsSheet url={"1с_applications"} />} />
          <Route path="all_open" element={<UniversalTicketsSheet url={"all_open"} />} />
          <Route path="all_closed" element={<UniversalTicketsSheet url={"all_closed"} />} />
          <Route path="my_organization_tickets" element={<UniversalTicketsSheet url={"my_organization_tickets"} />} />
          <Route path="all_tickets" element={<UniversalTicketsSheet url={"all_tickets"} />} />
          <Route path="closed_today" element={<UniversalTicketsSheet url={"closed_today"} />} />
          <Route path="current_tasks" element={<UniversalTicketsSheet url={"current_tasks"} />} />
        </Route>

        //Страница статистики пользователя по выполненым задачам
        <Route path="/statistics" element={<StatisticsPage />}> </Route>
         //Страница создания заявки
        <Route path="/create" element={<CreateTicketPage />}></Route>
        //Страница со списком всех клиентов
        <Route path="/clients" element={<ClientsPage />}></Route>
        //Страница профиля
        <Route path="/profile" element={<ProfilePage />}></Route>
        //Страница настроек
        <Route path="/parameters" element={<ParametersPage />}></Route>
        //Страница графиков обновлений и дежурств
        <Route path="/shedules" element={<SchedulePage />}></Route>

      </Route>

      
    </Routes>
  );
};
