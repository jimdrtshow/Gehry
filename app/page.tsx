import Header_app from "./_components/Header_app";
import Studio_app from "./_components/Studio_app";
import Work_app from "./_components/Work_app";
import Our_job_video_app from "./_components/Our_job_video_app";
import Our_job_app from "./_components/Our_job_app";

export default function Home() {
  return (
    <main>
      <Header_app />
      <Studio_app />
      <Work_app />
      <Our_job_video_app />
      <Our_job_app />
    </main>
  );
}
