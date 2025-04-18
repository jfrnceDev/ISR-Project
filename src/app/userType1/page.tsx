export default function UserType1Page() {
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">User Type 1 Dashboard</h1>
        <p className="mb-4">Welcome to the User Type 1 area</p>
        
        <div className="border rounded-lg p-6 mt-8">
          <h2 className="text-xl font-semibold mb-4">User Type 1 Features</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Feature 1 description</li>
            <li>Feature 2 description</li>
            <li>Feature 3 description</li>
          </ul>
        </div>
      </div>
    );
  }