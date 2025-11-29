function FormInput({ label, name, type, placeholder, value, onChange }) {
  return (
    <div className="flex flex-col  gap-1 py-2 ">
      <label htmlFor={name} className="font-heading text-primary">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          rows="4"
          cols="50"
          className=" border border-primary-dark rounded-lg  p-2 focus:outline-primary"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        ></textarea>
      ) : (
        <input
          id={name}
          type={type}
          className=" border border-primary-dark rounded-lg h-8 p-2 focus:outline-primary"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}

export default FormInput;
