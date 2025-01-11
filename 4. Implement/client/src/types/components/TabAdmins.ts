import { faList, IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { faTruck, faMessage, faGear, faGrip, faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { faCalendar } from "@fortawesome/free-regular-svg-icons"

export interface ITabAdmins { 
    name: string,
    url: string,
    logo?: IconDefinition
}

export const tabAdmins: ITabAdmins[] = [
    { name: "Dashboard", url: "/admin/dashboard", logo: faGrip },
    { name: "Product", url: "/admin/product", logo: faCartShopping },
    { name: "Category", url: "/admin/category", logo: faList },
    { name: "Delivery", url: "/admin/delivery", logo: faTruck},
    { name: "Calendar", url:"/admin/calendar", logo: faCalendar},
    { name: "Messages", url:"/admin/messages", logo: faMessage},
    { name: "Settings", url:"/admin/settings", logo: faGear},
] 
