import s from "./CreateTicketPage.module.scss";
import { Input } from '../../UI/Input/Input'

export const CreateTicketPage = () => {

  return (
    <div className={s.wrapper}>
      <div className={s.inner}>
        <h2 className={s.title}>Новая заявка</h2>
        <Input text={"ЗАГОЛОВОК *"} />
        <Input text={"КЛИЕНТ *"} />
      </div>
    </div>
  );
};
