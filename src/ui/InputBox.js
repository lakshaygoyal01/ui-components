// InputBox.jsx
import React from "react";
import clsx from "clsx";
import { FaSearch } from "react-icons/fa";

const InputBox = ({
  type = "text",
  placeholder = "",
  value,
  onChange,
  disabled = false,
  error = false,
  size = "medium",
  label,
  helperText,
  prefixIcon,
  suffixIcon,
  autoFocus = false,
  autoComplete = "on",
  classes = {},
  color = "primary",
  customColor = "blue",
  defaultValue,
  inableUnderline = false,
  endAdornment,
  fullWidth = false,
  id,
  inputProps = {},
  inputRef,
  margin = "none",
  maxRows,
  minRows,
  multiline = false,
  name,
  readOnly = false,
  required = false,
  rows,
  startAdornment,
  sx = {},

  ...props
}) => {
  // Size variants
  const sizeClasses = {
    small: "py-1 px-2 text-sm",
    medium: "py-2 px-3 text-base",
    large: "py-3 px-4 text-lg",
  };

  // Color variants
  const colorClasses = {
    primary: "border-blue-500 focus:ring-blue-500",
    secondary: "border-gray-500 focus:ring-gray-500",
    custom: (color) => `border-${color}-500 focus:ring-${color}-500`,
  };

  const borderColorClass =
    color === "custom" ? colorClasses.custom(customColor) : colorClasses[color];

  return (
    <div className={clsx("relative", classes.root)} style={sx}>
      {label && <label className='block text-gray-700 mb-1'>{label}</label>}
      <div className='flex items-center'>
        {startAdornment && (
          <span className='absolute left-2'>{startAdornment}</span>
        )}
        {prefixIcon && <span className='absolute left-2'>{prefixIcon}</span>}
        {type === "search" && (
          <span className='absolute left-2 text-gray-500'>
            <FaSearch />
          </span>
        )}
        {multiline ? (
          <textarea
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
            disabled={disabled}
            autoFocus={autoFocus}
            autoComplete={autoComplete}
            className={clsx(
              "border rounded-md focus:outline-none transition-colors",
              sizeClasses[size],
              borderColorClass,
              {
                "border-gray-300": !error,
                "border-red-500": error,
                "bg-gray-100": disabled,
                "focus:ring-2": !disabled,
                "resize-none": !rows,
              },
              classes.input
            )}
            rows={rows}
            maxRows={maxRows}
            minRows={minRows}
            readOnly={readOnly}
            required={required}
            {...inputProps}
            ref={inputRef}
            {...props}
          />
        ) : (
          <input
            id={id}
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
            disabled={disabled}
            autoFocus={autoFocus}
            autoComplete={autoComplete}
            className={clsx(
              "border rounded-md focus:outline-none transition-colors",
              sizeClasses[size],
              borderColorClass,
              {
                "border-gray-300": !error,
                "border-red-500": error,
                "bg-gray-100": disabled,
                "focus:ring-2": !disabled,
                "pl-8": prefixIcon || startAdornment || type === "search",
                "pr-8": suffixIcon || endAdornment,
                underline: inableUnderline,
              },
              classes.input
            )}
            readOnly={readOnly}
            required={required}
            {...inputProps}
            ref={inputRef}
            {...props}
          />
        )}
        {suffixIcon && <span className='absolute right-2'>{suffixIcon}</span>}
        {endAdornment && (
          <span className='absolute right-2'>{endAdornment}</span>
        )}
      </div>
      {helperText && <p className='text-sm text-gray-500 mt-1'>{helperText}</p>}
    </div>
  );
};

export default InputBox;
