const NavBar = () => {
  return (
    <nav>
        <div className="flex justify-center items-center p-4 bg-blue-100 dark:bg-zinc-950 text-center">
          <div className="flex gap-4 items-center">
            <a href="#" className="text-lg text-black dark:text-white">
              Home
            </a>
            <a href="#" className="text-lg text-black dark:text-white">
              About
            </a>
            <a href="#" className="text-lg text-black dark:text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>
  )
}

export default NavBar
