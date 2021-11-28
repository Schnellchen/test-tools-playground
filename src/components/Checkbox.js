import React, {useState} from 'react';

const Checkbox = ({labelOn, labelOff, dataTestId}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [eventType, setEventType] = useState('');

  const onChange = () => {
    setIsChecked(!isChecked);
  };
  const onMouseOver = () => {
    setIsChecked(!isChecked);
    setEventType('onMouseOver');
  };

  return (
    <label>
      <input data-testid={dataTestId} type="checkbox" checked={isChecked} onChange={onChange}
             className={isChecked ? 'checked' : 'notChecked'}
             onMouseOver={onMouseOver}
      />
      {isChecked ? labelOn + '_' + eventType : labelOff + '_' + eventType}
    </label>
  );
};

export default Checkbox;