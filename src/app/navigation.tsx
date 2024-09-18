import { Search, UserRound } from "lucide-react";

export function Navigation() {
    return (
        <nav className="w-full fixed top-0 left-0 right-0 z-30 px-5 py-4 shadow-md">
            <header className="flex justify-between items-center ">
                <a
                    className="text-2xl font-bold text-gray-200 "
                    href="#">Wa Chanllege
                </a>
                
                <ul className="flex self-end gap-4">
                    <li className="p-2 rounded-full bg-gray-500">
                        <UserRound />
                    </li>
                </ul>
            </header>
        </nav>
    )
}