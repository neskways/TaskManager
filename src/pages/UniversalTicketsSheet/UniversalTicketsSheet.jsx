import { ThemeToggle } from "../../components/ThemeToggle/ThemeToggle";
import s from "./UniversalTicketsSheet.module.scss";

export const UniversalTicketsSheet = ({ url }) => {
  return (
    <div className={s.wrapper}>
      {url}
      <ThemeToggle/>
    </div>
  );
}
