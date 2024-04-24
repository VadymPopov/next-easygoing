import AppBar from "@/app/components/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppBar />
      <main className='my-10'>{children}</main>
      <footer className='flex items-baseline justify-center lg:px-7 lg:py-14 mt-auto px-5 py-10 '>
        <p>&copy; 2024 Vadym Popov </p>
      </footer>
    </>
  );
}
