import { Upload } from "lucide-react";

export default function UploadInput({ label, name, onChange, preview }) {
  return (
    <div className="mb-4">
      <label className="block mb-1 text-primary">{label}</label>

      <label
        className="border-2 border-dashed border-primary/40 hover:border-primary cursor-pointer
        rounded-xl p-4 flex flex-col items-center justify-center gap-2 text-gray-600
        transition"
      >
        <Upload className="w-8 h-8 text-primary" />

        <p className="text-sm">
          Click to upload or <span className="font-semibold">browse</span>
        </p>

        <input
          type="file"
          accept="image/*"
          name={name}
          className="hidden"
          onChange={onChange}
        />
      </label>

      {/* preview */}
      {preview && (
        <img
          src={preview}
          alt="preview"
          className="mt-3 w-32 h-32 object-cover rounded-lg border"
        />
      )}
    </div>
  );
}
