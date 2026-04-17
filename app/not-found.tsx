import Link from "next/link";
import Section from "@/components/Section";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-brand-ink text-white relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-orange/5 blur-[120px] -ml-64 -mb-64" />

      <Section className="relative z-10 text-center">
        <div className="mb-8">
          <div className="text-[150px] font-display font-black leading-none text-white/5 select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            404
          </div>
          <div className="relative">
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-4 shadow-glow">Oops!</h1>
            <div className="w-24 h-1 bg-brand-blue mx-auto rounded-full" />
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6">Circuit Not Found</h2>
        <p className="text-white/60 max-w-md mx-auto mb-10 text-lg">
          Looks like this page has been disconnected or moved to a different node. Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/" className="btn-primary px-10 py-4 shadow-glow">
            Back to Home
          </Link>
          <Link href="/courses" className="btn-outline border-white/20 text-white hover:bg-white/10 px-10 py-4">
            Explore Courses
          </Link>
        </div>
      </Section>
      
      {/* Decorative Robotics Elements */}
      <div className="absolute bottom-10 left-10 text-white/10 font-mono text-xs hidden lg:block">
        [ERROR_CODE]: 404_PAGE_MISSING<br/>
        [STATUS]: DISCONNECTED<br/>
        [LOCATION]: MECHETRON_CORE
      </div>
    </main>
  );
}
