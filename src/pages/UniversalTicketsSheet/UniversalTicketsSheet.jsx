import { PageTitle } from "../../components/PageTitle/PageTitle";
import { ThemeToggle } from "../../components/ThemeToggle/ThemeToggle";
import s from "./UniversalTicketsSheet.module.scss";

export const UniversalTicketsSheet = ({ url, titleText }) => {
  return (
    <div className={s.wrapper}>
      <PageTitle titleText={titleText} />
      {url}
      <ThemeToggle/>
    </div>
  );
}
