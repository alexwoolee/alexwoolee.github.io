import Contact from "./Contact.jsx";

const Resume = () => {
  const resumeUrl = "/COOP_Resume.pdf";
  return (
  <>
    <div id="resume-sec">
      <a id="resume-download" className="bg-green-400 p-3 mt-8 border-0 text-black rounded-3xl hover:bg-yellow-400" href={resumeUrl} download="alex_lee_resume">Download</a>
      <iframe src={resumeUrl} width="64%" height="1148px" title="resume pdf" />      
    </div>
    <Contact />
   </>
  );
};

export default Resume;