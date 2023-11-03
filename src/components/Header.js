import Link from "next/link"

function Header() {
    return (
        <header className="w-full px-3 py-3 bg-cerulean-blue-500">
            <h1 className="text-xl text-white cursor-pointer">
                <Link href={'/'}>
                    E-Lister
                </Link>
            </h1>
        </header>
    )
}

export default Header