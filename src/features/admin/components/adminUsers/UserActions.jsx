import { Eye, Trash2, ArrowUpCircle } from "lucide-react";

export default function UserActions({ onView, onPromote, onDelete }) {
  return (
    <div className="flex items-center gap-4">
      <Eye className="cursor-pointer text-yellow-600" onClick={onView} />

      {/* <ArrowUpCircle
        className="cursor-pointer text-blue-600"
        onClick={onPromote}
      /> */}

      <Trash2 className="cursor-pointer text-red-600" onClick={onDelete} />
    </div>
  );
}
