import NavBar from "../navBar";

export default function Layout({ children }: any) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
}
