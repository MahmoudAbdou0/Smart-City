export function statusMap(status) {
  switch (status) {
    case 0:
      return {
        label: "Pending",
        bg: "bg-yellow-100",
        text: "text-yellow-700",
        border: "border-yellow-300",
      };

    case 1:
      return {
        label: "In Progress",
        bg: "bg-blue-100",
        text: "text-blue-700",
        border: "border-blue-300",
      };

    case 2:
      return {
        label: "Resolved",
        bg: "bg-green-100",
        text: "text-green-700",
        border: "border-green-300",
      };

    case 3:
      return {
        label: "Rejected",
        bg: "bg-red-100",
        text: "text-red-700",
        border: "border-red-300",
      };

    default:
      return {
        label: "Unknown",
        bg: "bg-gray-100",
        text: "text-gray-700",
        border: "border-gray-300",
      };
  }
}
