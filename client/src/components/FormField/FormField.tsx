import React from "react";

interface FormFieldProps {
  labelName: string;
  name: string;
  type: string;
  placeHolder: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isSurpriseMe: boolean;
  handleSurpriseMe: () => void;
  value: string;
}

const FormField = ({
  labelName,
  name,
  type,
  placeHolder,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
  value,
}: FormFieldProps) => {
  return (
    <div>
      <div className="flex font-semibold items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-[#636363]"
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            className="font-semibold text-xs bg-[#ff6969] py-1 px-2 rounded-[5px] text-white shadow shadow-slate-50 hover:shadow-md"
            onClick={handleSurpriseMe}
          >
            Surprise Me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeHolder}
        value={value}
        onChange={handleChange}
        required
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#646464] focus:border-[#828282] outline-none block s:min-w-[300px] xl:min-w-[500px] w-full p-3 shadow-inner shadow-black font-bold"
      />
    </div>
  );
};

export default FormField;
