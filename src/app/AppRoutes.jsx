import { Routes, Route, Navigate } from "react-router-dom";
// import AllTicketsPage from "../pages/MainPage/AllTicketsPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { MyAssigned } from "../pages/MyAssigned/MyAssigned";
import { TicketPage } from "../pages/TicketPage/TicketPage";
import { MainLayout } from "../components/MainLayout/MainLayout";
import { AllTicketPage } from "../pages/AllTicketPage/AllTicketPage";
import { Applications1C } from "../pages/Applications1C/Applications1C";
import { StatisticsPage } from "../pages/StatisticsPage/StatisticsPage";
import { CreateTicketPage } from "../pages/CreateTicketPage/CreateTicketPage";
import { AllOpenTicketPage } from "../pages/AllOpenTicketPage/AllOpenTicketPage";
import { AllClosedTicketPage } from "../pages/AllClosedTicketPage/AllClosedTicketPage";
import { MyOrganizationTicketsPage } from "../pages/MyOrganizationTicketsPage/MyOrganizationTicketsPage";

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
        //Перенаправляет на странице /ticket по умолчанию
        <Route index element={<Navigate to="/ticket" replace />} />

        //Страница с задачами, по умолчанию показывает список задач пользователя
        <Route path="/ticket" element={<TicketPage />}>
          <Route index element={<Navigate to="my_assigned" replace />} />
          <Route path="my_assigned" element={<MyAssigned />} />
          <Route path="1с_applications" element={<Applications1C />} />
          <Route path="all_open" element={<AllOpenTicketPage />} />
          <Route path="all_closed" element={<AllClosedTicketPage />} />
          <Route path="my_organization_tickets" element={<MyOrganizationTicketsPage />} />
          <Route path="all_tickets" element={<AllTicketPage />} />
          {/* Добавьте другие подстраницы при необходимости */}
        </Route>
        //Страница статистики пользователя по выполненым задачам
        <Route path="/statistics" element={<StatisticsPage />}>
          {/* <Route index element={<Navigate to="my_task" replace />} />
          <Route path="my_task" element={<MyTaskPage />} />*/}
        </Route>
         //Страница статистики пользователя по выполненым задачам
        <Route path="/create" element={<CreateTicketPage />}>
          {/* <Route index element={<Navigate to="my_task" replace />} />
          <Route path="my_task" element={<MyTaskPage />} />*/}
        </Route>
      </Route>

      <Route
        path="*"
        element={
          <PrivateRoute>
            <ErrorPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
