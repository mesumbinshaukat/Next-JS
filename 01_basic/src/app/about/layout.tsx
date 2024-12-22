export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
                <>

            <h1>This is a 2nd Layout</h1>
                {children}

        </>
    );
}
