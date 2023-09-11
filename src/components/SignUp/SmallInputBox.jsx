import React from 'react';

export default function SmallInputBox({
  placeholderText,
  idText,
  valueText,
  onChangeFunction,
  valueRefText,
}) {
  return (
    <span className="relative flex-1 mr-1">
      <label>
        <input
          className="py-2 px-4 block w-full box-border text-sm border border-gray-300 rounded"
          type="text"
          placeholder={placeholderText}
          id={idText}
          value={valueText}
          onChange={onChangeFunction}
          valueRef={valueRefText}
        />
      </label>
    </span>
  );
}
