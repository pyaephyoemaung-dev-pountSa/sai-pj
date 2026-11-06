import navLink from "#/constants/navLink";
import { Link, useNavigate } from "@tanstack/react-router";
import { Label } from "../ui/label";
import { ShoppingCartIcon, Store } from "lucide-react"
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from '../ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "../ui/dropdown-menu";
import useAuthStore from "#/stores/useAuthStore";
import useCartStore from "#/stores/useCartStore";

const Header = () =>
{
    const { isAuthenticated, clearInfo, user } = useAuthStore()
    const {cartItems} = useCartStore()
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
            <ul className="flex items-center justify-between gap-3">
                {navLink.map((link) => {
                    const isCart = link.link === "/carts";
                    return (
                        <li key={link.link} className="relative hover:bg-blue-50 dark:hover:bg-slate-800 rounded-full px-4 py-2 transition-colors duration-200">
                            <Link to={link.link} className="flex items-center gap-1.5 hover:text-blue-600 font-medium text-slate-700 dark:text-slate-200 transition-colors duration-200">
                                <span>{link.title}</span>
                                
                                {isCart && cartItems.length > 0 && (
                                    <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-600 text-[11px] font-bold text-white shadow-sm ring-2 ring-white dark:ring-slate-900">
                                        {cartItems.length}
                                    </span>

                                )}
                            </Link>
                        </li>
                    );
                })}
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