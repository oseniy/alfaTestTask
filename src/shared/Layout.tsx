import type { ReactNode } from "react"

interface LayoutProps {
    children: ReactNode
}

export default function Layout({children}: LayoutProps) {
    return (
        <div className="w-full flex flex-col relative">
            {children}
        </div>
    )
}