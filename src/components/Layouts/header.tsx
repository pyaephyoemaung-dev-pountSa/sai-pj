import navLink from "#/constants/navLink";
import { Link, useNavigate } from "@tanstack/react-router";
import { Label } from "../ui/label";
import { Store } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "../ui/dropdown-menu";
import useAuthStore from "#/stores/useAuthStore";

const Header = () =>
{
    const { isAuthenticated, clearInfo, user } = useAuthStore()
    const navigate = useNavigate()
    const logout = () =>
    {
        clearInfo()
        navigate({ to:"/login"})
    }
    return(
        <div className="border-b">
            <nav className="flex justify-between max-w-6xl mx-auto my-3 ">
            <div className="flex items-center gap-2">
                <Store />
                <Label className="font-bold">Sai</Label>
            </div>
            <ul className="flex justify-between gap-3">
                {navLink.map((link) => (
                    <li key={link.link} className="hover:bg-blue-100 rounded-full px-4 py-2">
                        <Link to={link.link} className="hover:text-blue-600 font-medium">{link.title}</Link>
                    </li>
                ))}
                </ul>
                {isAuthenticated && (
                    <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuGroup>
                        <DropdownMenuLabel>{user?.email}</DropdownMenuLabel>
                        <DropdownMenuItem>
                            <Link to="/dashboard">Dashboard</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                    </DropdownMenu>
                )}
        </nav>
        </div>
    )
}
export default Header;