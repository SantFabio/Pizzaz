import { CheckboxWrapper, TglBtn } from "./Checkbox.styled";
import { useState } from "react";

const Checkbox = ({ drink }) => {
  const [selecionado, setSelecionado] = useState(drink.selecionado);

  const handleSelectItem = () => {
    setSelecionado(!selecionado);
    drink.selecionado = !selecionado;
  };

  return (
    <CheckboxWrapper className="checkbox-wrapper-10">
      <input
        type="checkbox"
        checked={selecionado}
        onChange={handleSelectItem} 
        id={drink.id}
        className="tgl tgl-flip"
      />
      <TglBtn htmlFor={drink.id} className="tgl-btn" data-tg-on="Sim!" data-tg-off="Não" />
    </CheckboxWrapper>
  );
};

export default Checkbox;
