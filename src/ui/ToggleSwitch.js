

import React, { useState } from 'react';
import clsx from 'clsx';

const ToggleSwitch = ({
  initialChecked = false,
  onChange,
  disabled = false,
  onColor = 'bg-green-500',
  offColor = 'bg-gray-300',
  onIcon,
  offIcon,
  onText = 'On',
  offText = 'Off',
  showText = false,
  showTextOnSwitch = false,
  showIconOnSwitch = false,
  switchStyles = {}, 
  knobStyles = {},   
  textStyles = {}    
}) => {
  const [isChecked, setIsChecked] = useState(initialChecked);

  const handleToggle = () => {
    if (disabled) return;
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <div className="flex items-center">
      {showText && (
        <div className={clsx('mr-2', textStyles)}>
          {isChecked ? onText : offText}
        </div>
      )}
      <div
        className={clsx('relative inline-flex items-center', {
          [onColor]: isChecked,
          [offColor]: !isChecked,
          'opacity-50 cursor-not-allowed': disabled,
        }, switchStyles)}
        onClick={handleToggle}
        style={{ width: '60px', height: '30px', borderRadius: '9999px', cursor: 'pointer', ...switchStyles }}
      >
        <div
          className={clsx('absolute w-6 h-6 bg-white rounded-full transition-transform transform flex items-center justify-center', {
            'translate-x-6': isChecked,
            'translate-x-0': !isChecked,
          }, knobStyles)}
          style={{ ...knobStyles }}
        >
          {showIconOnSwitch && (isChecked ? onIcon : offIcon)}
          {showTextOnSwitch && (
            <span className={clsx('text-xs', textStyles)}>{isChecked ? onText : offText}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToggleSwitch;
