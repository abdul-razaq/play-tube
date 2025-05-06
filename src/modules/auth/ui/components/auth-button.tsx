import { UserCircleIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export function AuthButton() {
  // TODO: Add different button auth states.
  return (
    <Button
      variant="outline"
      className="text-blue-500 hover:text-blue-600 rounded-full bg-transparent hover:bg-gray-100 shadow-none border border-blue-500/20 font-medium text-sm px-4 py-2"
    >
      <UserCircleIcon />
      Sign In
    </Button>
  );
}
