import s from "./UniversalTicketsSheet.module.scss";

export const UniversalTicketsSheet = ({ url }) => {
  return (
    <div className={s.wrapper}>
      {url}
    </div>
  );
}
