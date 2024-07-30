import React from "react";
import ToggleSwitch from "../ui/ToggleSwitch";
import { FaMoon, FaSun } from "react-icons/fa";

const ToggleSwitchList = () => {
  const handleToggleChange = (checked) => {
    console.log("Toggle Switch is now", checked ? "On" : "Off");
  };
  return (
    <div className='p-4 space-y-4'>
      <ToggleSwitch
        initialChecked={true}
        onChange={handleToggleChange}
        showText={true}
        onText='Enabled'
        offText='Disabled'
      />

      <ToggleSwitch
        initialChecked={false}
        onChange={handleToggleChange}
        showIconOnSwitch={true}
        onIcon={<FaSun />}
        offIcon={<FaMoon />}
        onColor='bg-yellow-500'
        offColor='bg-blue-500'
      />

      <ToggleSwitch
        initialChecked={true}
        onChange={handleToggleChange}
        showTextOnSwitch={true}
        onText='Yes'
        offText='No'
        onColor='bg-green-500'
        offColor='bg-red-500'
      />

      <ToggleSwitch
        initialChecked={false}
        onChange={handleToggleChange}
        showText={true}
        showIconOnSwitch={true}
        onIcon={<FaSun />}
        offIcon={<FaMoon />}
        onText='Night'
        offText='Day'
        onColor='bg-blue-900'
        offColor='bg-orange-500'
      />
    </div>
  );
};

export default ToggleSwitchList;
