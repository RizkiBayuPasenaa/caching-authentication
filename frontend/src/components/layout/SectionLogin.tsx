import Form from "../fragments/Form";

function SectionLogin() {
  return (
    <section id="section-login" className="flex items-center justify-center h-screen w-full">
      <div className="w-1/2 bg-slate-900 text-slate-50 p-6 rounded-md">
        <h1 className="text-2xl text-center">Login</h1>
        <Form />
      </div>
    </section>
  )
}

export default SectionLogin;