export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className='my-10'>{children}</div>;
}
