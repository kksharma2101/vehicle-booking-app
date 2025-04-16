import { CheckCircle, Clock, XCircle } from "lucide-react";

// /components/StatusBadge.tsx
export default function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    Pending: "bg-yellow-100 text-yellow-800",
    Confirmed: "bg-green-100 text-green-800",
    Cancelled: "bg-red-100 text-red-800",
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${colors[status] || ""}`}>
      {status === "Confirmed" && (
        <CheckCircle className="inline-block mr-1 h-3 w-3" />
      )}
      {status === "Pending" && (
        <Clock className="inline-block mr-1 h-3 w-3 animate-spin" />
      )}
      {status === "Cancelled" && (
        <XCircle className="inline-block mr-1 h-3 w-3" />
      )}
      {status}
    </span>
  );
}
