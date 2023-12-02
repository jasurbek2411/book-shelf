export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="bg-light max-w-full max-h-screen background">
          {children}
        </div>
      </body>
    </html>
  );
}
