import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Link,
    Navbar as NavbarBase,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
    User,
} from "@nextui-org/react";

const menuItems = [
    { label: "Beranda", url: "/home" },
    { label: "Program", url: "/program" },
    { label: "Butuh Bantuan?", url: "/help" },
];

const Navbar = () => {
    const user = {
        name: "User Name",
        email: "user@example.com",
    }; // Contoh data pengguna

    return (
        <NavbarBase
            shouldHideOnScroll
            className="bg-light-background dark:bg-dark-background border-b border-light-border dark:border-dark-border"
            classNames={{
                item: [
                    'data-[active="true"]:font-bold text-light-text dark:text-dark-text',
                    'data-[active="true"]:border-b-2 border-primary',
                ],
            }}
        >
            {/* Logo Brand */}
            <NavbarBrand>
                <a href="/home">
                    <img
                        src="/assets/images/mbkm.png"
                        alt="Nama Aplikasi"
                        className="h-10"
                    />
                </a>
            </NavbarBrand>

            {/* Menu Utama - Desktop */}
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {menuItems.map((item, index) => (
                    <NavbarItem key={index}>
                        <Link
                            href={item.url}
                            className="text-light-text dark:text-dark-text hover:text-primary dark:hover:text-primary"
                        >
                            {item.label}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            {/* Konten Akhir - Desktop */}
            <NavbarContent justify="end" className="hidden sm:flex">
                <NavbarItem>
                    {user ? (
                        <Dropdown>
                            <DropdownTrigger>
                                <User
                                    classNames={{
                                        base: "cursor-pointer text-light-text dark:text-dark-text",
                                    }}
                                    name={user.name}
                                    description={user.email}
                                />
                            </DropdownTrigger>
                            <DropdownMenu variant="faded" aria-label="Dropdown menu with description">
                                <DropdownItem href="/dashboard" className="text-light-text dark:text-dark-text hover:text-primary">
                                    Kegiatanku
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    ) : (
                        <a href="/login" className="inline-block">
                            <Button
                                color="default"
                                variant="bordered"
                                className="border-light-border dark:border-dark-border text-light-text dark:text-dark-text hover:text-primary hover:border-primary dark:hover:text-primary"
                            >
                                Login
                            </Button>
                        </a>
                    )}
                </NavbarItem>
            </NavbarContent>

            {/* Menu Toggle - Mobile */}
            <NavbarMenuToggle className="sm:hidden text-light-text dark:text-dark-text" />

            {/* Menu untuk Tampilan Mobile */}
            <NavbarMenu className="bg-light-background dark:bg-dark-background">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.label}-${index}`}>
                        <Button color="primary" variant="flat" className="w-full">
                            <a href={item.url} className="text-light-text dark:text-dark-text hover:text-primary dark:hover:text-primary w-full inline-block">
                                {item.label}
                            </a>
                        </Button>
                    </NavbarMenuItem>
                ))}
                {user ? (
                    <NavbarMenuItem>
                        <a href="/dashboard" className="w-full inline-block">
                            <Button
                                color="default"
                                variant="bordered"
                                className="border-light-border dark:border-dark-border text-light-text dark:text-dark-text hover:text-primary hover:border-primary dark:hover:text-primary w-full"
                            >
                                Kegiatanku
                            </Button>
                        </a>
                    </NavbarMenuItem>
                ) : (
                    <NavbarMenuItem>
                        <a href="/login" className="w-full inline-block">
                            <Button
                                color="default"
                                variant="bordered"
                                className="border-light-border dark:border-dark-border text-light-text dark:text-dark-text hover:text-primary hover:border-primary dark:hover:text-primary w-full"
                            >
                                Login
                            </Button>
                        </a>
                    </NavbarMenuItem>
                )}
            </NavbarMenu>
        </NavbarBase>
    );
};

export default Navbar;
