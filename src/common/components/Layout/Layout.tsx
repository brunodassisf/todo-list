import Header from "../Header";

interface ILayout {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayout) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
