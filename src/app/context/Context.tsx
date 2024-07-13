const Context = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <main>{children}</main>
  )
}

export default Context