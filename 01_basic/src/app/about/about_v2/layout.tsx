export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>

            <h1>This is a 3rd Layout</h1>
            {children}

        </>
    );
}
