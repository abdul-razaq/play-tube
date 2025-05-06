import { SidebarTrigger } from "@/components/ui/sidebar";
import { AuthButton } from "@/modules/auth/ui/components/auth-button";
import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "./search-input";

export function HomeNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white flex items-center px-2 pr-5 z-50 justify-between">
      <aside className="flex items-center gap-4 flex-shrink-0">
        <SidebarTrigger />
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" height={32} width={32} alt="Logo" />
            <p className="text-xl font-semibold tracking-tight">PlayTube</p>
          </div>
        </Link>
      </aside>

      <aside className="max-w-[720px] flex flex-1 justify-center mx-auto">
        <SearchInput />
      </aside>

      <aside className="flex items-center gap-4 flex-shrink-0">
        <AuthButton />
      </aside>
    </nav>
  );
}
