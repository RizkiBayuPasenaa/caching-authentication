function Home() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-medium">Home Page</h1>
        <h3>Here to implements in-memory-cache & basic authentication</h3>
        <h3>To see the implementation at the first you visiting here, you go to the dashboard page</h3>
        <h3>And you will see , you must be input username and password, username: <span className="font-bold">"admin" </span>password : <span className="font-bold">"password123"</span></h3>
        <h3>After you input the username and password, you will see the dashboard page</h3>
        <h3>And you navigate to another page you dont input username & password again , until you refresh page</h3>
      </div>

    </>
  )
}

export default Home;