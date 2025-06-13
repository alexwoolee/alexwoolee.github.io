const Resume = () => {
  const resumeUrl = "/COOP_Resume.pdf";
  return (
    <div id="resume-sec">
      <a id="resume-download" className="bg-green-400 border-4" href={resumeUrl} download="alex_lee_resume">Download</a>
      <iframe src={resumeUrl} width="64%" height="1148px" title="resume pdf" />      
    </div>
  );
};

export default Resume;