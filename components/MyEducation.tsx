const MyEducation = () => {
  return (
    <div className="flex flex-col justify-center items-center px-8">
      <h2 className="lg:text-[48px] md:text-3xl sm:text-lg p-2 tracking-tighter leading-snug font-bold relative whitespace-normal line-clamp">Education</h2>
      <p className="p-description mb-6">
      As I am about to complete my Systems Engineering program at the University of Antioquia, I have been trained in an investigative and competency-based approach.
      </p>
      <div className="grid grid-flow-col gap-6">
        <div>
        <h3 className="text-xl font-bold">University of Antioquia</h3>
        <div className="grid grid-cols-2 mt-3">
         <p>Student</p>
         <span className="bg-white/40 rounded px-2 text-xs py-1">Jun 2015 - Actual</span>

        </div>
         </div>
         <div className="mx-4">
         <h3 className="text-xl font-bold">Systems Engineering</h3>
          <p className="mt-3">My education covers both the scientific and technological foundations as well as preparation for the Fourth Industrial Revolution, including technologies such as Blockchain, Artificial Intelligence, and the Internet of Things.</p>
         </div>
        
      </div>
      <div className="container">
          <hr className="m-5" />
        </div>
    </div>
  );
};

export { MyEducation };
