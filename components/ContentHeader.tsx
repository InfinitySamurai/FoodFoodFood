interface IProps {
  title: string;
}

export const ContentHeader = (props: IProps) => {
  return (
    <header className="flex justify-between items-center p-6">
      <div className="flex items-center space-x-4 lg:space-x-0">
        <div>
          <h1 className="text-2xl font-medium text-gray-800 dark:text-white">
            {props.title}
          </h1>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="flex text-gray-600 dark:text-gray-300 focus:outline-none">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className="flex text-gray-600 dark:text-gray-300 focus:outline-none">
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className="flex items-center space-x-2 relative focus:outline-none">
          <h2 className="text-gray-700 dark:text-gray-300 text-sm hidden sm:block">
            Jones Ferdinand
          </h2>
          <img
            className="h-9 w-9 rounded-full border-2 border-purple-500 object-cover"
            src="https://images.unsplash.com/photo-1553267751-1c148a7280a1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt="Your avatar"
          />
        </button>
      </div>
    </header>
  );
};
