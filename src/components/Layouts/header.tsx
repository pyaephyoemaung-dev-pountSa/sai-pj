import navLink from "#/constants/navLink";
import { Link } from "@tanstack/react-router";
import { Label } from "../ui/label";
import { Store } from "lucide-react"

const Header = () =>
{
    return(
        <nav className="flex justify-between max-w-6xl mx-auto mt-5">
            <div className="flex items-center gap-2">
                <Store />
                <Label className="font-bold">Sai</Label>
            </div>
            <ul className="flex justify-between gap-3">
                {navLink.map((link) => (
                    <li key={link.link} className="hover:bg-gray-200 rounded-full px-4 py-2">
                        <Link to={link.link} className="hover:text-blue-600 font-medium">{link.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default Header;