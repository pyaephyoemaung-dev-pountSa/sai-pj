import navLink from "#/constants/navLink";
import { Link } from "@tanstack/react-router";
import { Label } from "../ui/label";

const Header = () =>
{
    return(
        <nav className="flex justify-between">
            <div className="">
                <img src="" alt="" />
                <Label>Sai</Label>
            </div>
            <ul className="flex justify-between gap-3">
                {navLink.map((link) => (
                    <li key={link.link}>
                        <Link to={link.link}>{link.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default Header;