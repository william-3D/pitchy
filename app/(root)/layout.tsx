export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="font-work-sans">
            {/* navbar */}
            
            {children}
        </main>
    )
}