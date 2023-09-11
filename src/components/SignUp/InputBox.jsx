import React from 'react';

export default function InputBox({
  title,
  description,
  typeText,
  placeholderText,
  valueText,
  onChangeFunction,
  valueRefText,
  authText,
  ErrorText,
}) {
  return (
    <div className="mb-8">
      <label className="block mb-3 text-base font-bold natural-800">
        {title}
      </label>
      <div className="mb-2.5 text-sm text-zinc-400">{description}</div>
      <label>
        <input
          className="py-2 px-4 inline-block w-full box-border text-sm border border-gray-300 rounded"
          type={typeText}
          placeholder={placeholderText}
          id="name"
          value={valueText}
          onChange={onChangeFunction}
          valueRef={valueRefText}
        />
      </label>
      {authText.length > 0 && <p className="text-red-500">{ErrorText}</p>}
    </div>
  );
}
