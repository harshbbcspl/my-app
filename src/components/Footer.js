export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 ">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>

        <div className="space-x-4 mt-3 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">
            Twitter
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
