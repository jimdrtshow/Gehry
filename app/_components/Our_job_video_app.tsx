export default function Our_job_video_app() {
  return (
    <section className="w-screen h-auto">
      <div className="relative h-[50vh] w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 h-full w-full object-cover"
          src="/videos/services.mp4"
          autoPlay
          loop
          muted
        ></video>
      </div>
    </section>
  );
}
