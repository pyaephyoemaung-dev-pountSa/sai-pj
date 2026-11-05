import { Label } from "../ui/label"

export const Footer = () =>
{
    return (
        <div className="border-t mt-auto">
            <footer className="flex justify-between max-w-6xl mx-auto my-7">
                    <div className="flex items-center gap-2">
                        <Label className="">Sai, Bangkok</Label>
                    </div>
                    <div className="flex items-center gap-2">
                        <Label className="">Free delivery on orders over $100</Label>
                    </div>
        </footer>
        </div>
    )
}