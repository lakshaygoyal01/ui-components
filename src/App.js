import InputBox from "./ui/InputBox";
import "./App.css";
// import ToggleButton from "./ui/ToggleSwitch";
import {
  FaSun,
  FaMoon,
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
  FaSearch,
  FaCheck,
} from "react-icons/fa";
import { useState } from "react";
import DebouncedSearchInput from "./components/DebouncedSearchInput";
import ToggleSwitch from "./ui/ToggleSwitch";

function App() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleToggleChange = (checked) => {
    console.log("Toggle Switch is now", checked ? "On" : "Off");
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file);
    }
  };
  return (
    <>
      <div className='space-y-2 mx-4 flex flex-row items-center justify-between'>
        <InputBox
          placeholder='Enter text'
          onChange={(e) => console.log(e.target.value)}
        />

        <InputBox
          type='search'
          placeholder='Search...'
          autoFocus={true}
          onChange={(e) => console.log(e.target.value)}
        />

        <InputBox
          placeholder='Disabled input'
          disabled={true}
          helperText='This input is disabled'
        />

        <InputBox
          type='date'
          color='secondary'
          onChange={(e) => console.log(e.target.value)}
        />

        <InputBox
          placeholder='Enter multiple lines'
          multiline={true}
          rows={4}
          maxRows={6}
          startAdornment={
            <span className='text-gray-500'>{`${message.length}/500`}</span>
          }
        />
      </div>
      <div className='space-y-2 mx-4 flex flex-row items-center justify-between'>
        <InputBox
          placeholder='With icons'
          prefixIcon={<FaSearch />}
          suffixIcon={<FaCheck />}
          onChange={(e) => console.log(e.target.value)}
        />

        <InputBox placeholder='Full width input' fullWidth={true} />

        <InputBox
          placeholder='Input with error'
          error={true}
          helperText='This field has an error'
        />

        <InputBox
          placeholder='Read-only input'
          readOnly={true}
          value="Can't edit this"
        />

        <InputBox
          placeholder='Required input'
          label='Name'
          required={true}
          helperText='This field is required'
        />
      </div>
      <div className='space-y-2 mx-4 flex flex-row items-center justify-between'>
        <InputBox
          type='file'
          onChange={handleFileChange}
          label='Upload File'
          helperText='Select a file to upload'
        />

        <InputBox
          type='file'
          multiple={true}
          onChange={(e) => {
            const files = e.target.files;
            for (let i = 0; i < files.length; i++) {
              console.log("Selected file:", files[i]);
            }
          }}
          label='Upload multiple files'
          helperText='You can select multiple files'
          customColor='green'
          classes={{ input: "bg-yellow-50 border-dashed border-2" }}
        />

        <InputBox
          multiline={true}
          placeholder='Write your message here...'
          rows={4}
          maxRows={10}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          helperText={`${message.length}/500 characters`}
          label='Message'
          sx={{ resize: "vertical" }}
          endAdornment={
            <span className='text-gray-500'>{`${message.length}/500`}</span>
          }
        />

        <InputBox
          type='text'
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!validateEmail(email)}
          helperText={
            !validateEmail(email) ? "Invalid email address" : "Looks good!"
          }
          autoComplete='email'
          label='Email'
          required={true}
          sx={{ borderColor: email.length < 5 ? "red" : "blue" }}
        />
      </div>

      <DebouncedSearchInput />

      {/* toggle switch */}

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
    </>
  );
}

export default App;
