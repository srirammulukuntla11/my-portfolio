import { useEffect, useState } from "react";
import { Pencil } from "lucide-react";
import { useAdmin } from "../../context/AdminContext";

function EditableText({
  value,
  onChange,
  className = "",
  multiline = false,
}) {
  const { editMode } = useAdmin();

  const [text, setText] = useState(value);

  useEffect(() => {
    setText(value);
  }, [value]);

  if (!editMode) {
    return <span className={className}>{value}</span>;
  }

  const handleChange = (e) => {
    const newValue = e.target.value;
    setText(newValue);
    onChange(newValue);
  };

  if (multiline) {
    return (
      <div className="w-full">
        <textarea
          value={text}
          onChange={handleChange}
          rows={5}
          className={`w-full bg-slate-900 border border-cyan-500 rounded-lg p-3 outline-none resize-none ${className}`}
        />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 w-full">
      <input
        value={text}
        onChange={handleChange}
        className={`bg-transparent border-b border-cyan-500 outline-none w-full ${className}`}
      />

      <Pencil
        size={16}
        className="text-cyan-400 flex-shrink-0"
      />
    </div>
  );
}

export default EditableText;