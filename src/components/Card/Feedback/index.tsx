const Feedback = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="bg-main-300 rounded-[20px] w-[365px] h-[250px] p-5 flex flex-col space-y-2 mobile:w-[300px]">
      <p className="font-600 text-[25px] text-black desktop:text-[20px]">{title}</p>
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((index) => (
          <svg
            key={`star-${index}`}
            width="26"
            height="25"
            viewBox="0 0 26 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.2024 0.848553C12.5849 0.169908 13.5621 0.169908 13.9447 0.848553L17.3413 6.87476C17.484 7.12794 17.7298 7.30651 18.0146 7.36399L24.7955 8.73217C25.5591 8.88625 25.8611 9.81569 25.3339 10.3892L20.6523 15.4818C20.4556 15.6957 20.3617 15.9847 20.3951 16.2734L21.1893 23.1452C21.2787 23.919 20.4881 24.4934 19.7797 24.1692L13.4897 21.2904C13.2254 21.1695 12.9216 21.1695 12.6573 21.2904L6.3673 24.1692C5.65894 24.4934 4.86831 23.919 4.95775 23.1452L5.75194 16.2734C5.7853 15.9847 5.69142 15.6957 5.49474 15.4818L0.813085 10.3892C0.285859 9.81569 0.587854 8.88625 1.35149 8.73217L8.13236 7.36399C8.41725 7.30651 8.66303 7.12794 8.80573 6.87476L12.2024 0.848553Z"
              fill="#DD222A"
            />
          </svg>
        ))}
      </div>
      <p className="text-[18px] font-400 text-black desktop:text-[15px]">{description}</p>
    </div>
  );
};
export default Feedback;
