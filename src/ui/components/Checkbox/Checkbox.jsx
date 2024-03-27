
import { CheckboxWrapper, TglBtn } from './Checkbox.styled';

const Checkbox = ({ id }) => {
  return (
    <CheckboxWrapper className="checkbox-wrapper-10">
      <input
        type="checkbox"
        id="oi"
        className="tgl tgl-flip"
      />
      <TglBtn htmlFor="oi" className="tgl-btn" data-tg-on="Yeah!" data-tg-off="Nope" />
    </CheckboxWrapper>
  );
};

export default Checkbox;
