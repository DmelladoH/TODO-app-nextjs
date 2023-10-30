import FormTODO from "./form";

function Header() {
  return (
    <header className="">
      <h1 className="text-6xl bold">TODO</h1>
      <p className="text-sm">Add your TODO</p>
      <FormTODO />
    </header>
  );
}

export default Header;
