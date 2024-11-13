import Button from "../elements/Button";

function Navbar() {
  return (
    <nav className="w-1/2 bg-slate-950 m-auto p-4 rounded-lg mt-6">
      <div className="flex gap-8 justify-center">
        <Button to="/" className="bg-slate-950 text-white">Home</Button>
        <Button to="/about" className="bg-slate-950 text-white">about</Button>
        <Button to="/dashboard" className="bg-slate-950 text-white">Dashboard</Button>
      </div>
    </nav>
  )
}

export default Navbar;