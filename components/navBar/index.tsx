import MainMenu from "../mainMenu";
import Logo from "../logo";
import SearchBar from "../searchBar";

export default function NavBar() {
  return (
    <div className="nav-bar-container">
      <div className="logo-container">
        <Logo></Logo>
        <MainMenu></MainMenu>
      </div>
      <SearchBar></SearchBar>
    </div>
  );
}
