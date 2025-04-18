export default function CareerPage() {
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Careers</h1>
        <p className="mb-4">Join our team and be part of something great!</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Software Engineer</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We're looking for passionate developers to join our engineering team.
            </p>
            <button className="bg-foreground text-background px-4 py-2 rounded-md">
              Apply Now
            </button>
          </div>
          
          <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">UX Designer</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Help us create beautiful, intuitive user experiences.
            </p>
            <button className="bg-foreground text-background px-4 py-2 rounded-md">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    );
  }