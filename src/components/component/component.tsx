 
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"

export function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-950 text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BookIcon className="w-6 h-6" />
          <span className="text-lg font-bold">DocSmart</span>
        </div>
        <nav className="hidden md:flex items-center gap-4">
          <Link className="hover:underline" href="#">
            Features
          </Link>
          <Link className="hover:underline" href="#">
            Pricing
          </Link>
          <Link className="hover:underline" href="#">
            About
          </Link>
          <Link className="hover:underline" href="#">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline">
            Sign In
          </Button>
          <Button size="sm"  >
            Sign Up
          </Button>
        </div>
      </header>
      <main className="flex-1 bg-gray-100 dark:bg-gray-950">
        <section className="py-12 md:py-20 lg:py-28 px-4 md:px-6 flex flex-col items-center justify-center">
          <div className="max-w-3xl text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Unlock the Power of Your Documents
            </h1>
            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400">
              DocSmart is your one-stop solution for PDF document management. Upload, summarize, translate, and generate
              citations and study guides with ease.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
  <Button size="lg">Get Started</Button>
  <Button size="lg" variant="outline">Learn More</Button>
</div>

          </div>
        </section>
        <section className="py-12 md:py-20 lg:py-28 px-4 md:px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <FileIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                  <h3 className="text-xl font-bold">Document Summarization</h3>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  Quickly get to the key points of any PDF document with our advanced summarization algorithm.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <GlobeIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                  <h3 className="text-xl font-bold">Multilingual Translation</h3>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  Translate your documents into over 100 languages with our powerful translation engine.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <BookmarkIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                  <h3 className="text-xl font-bold">Citation Generation</h3>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  Automatically generate accurate citations in APA, MLA, and Chicago styles for your research papers.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <ClipboardIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                  <h3 className="text-xl font-bold">Study Guides</h3>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  Create personalized study guides from your course materials to help you ace your exams.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20 lg:py-28 px-4 md:px-6 bg-gray-950 text-white">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Simplify Your Document Workflow</h2>
              <p className="text-gray-400">
                DocSmart is designed to streamline your document management process, from uploading to generating
                valuable insights. Experience the power of AI-driven document processing at your fingertips.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button size="lg" >
                  Try It Now
                </Button>
                <Button size="lg" variant="outline">
                  Schedule a Demo
                </Button>
              </div>
            </div>
            <div>
              <img
                alt="DocSmart Dashboard"
                className="rounded-lg"
                height="400"
                src="https://play-lh.googleusercontent.com/LvJB3SJdelN1ZerrndNgRcDTcgKO49d1A63C5hNJP06rMvsGkei-lwV52eYZJmMknCwW"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-950 text-white px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <BookIcon className="w-6 h-6" />
          <span className="text-lg font-bold">DocSmart</span>
        </div>
        <nav className="flex items-center gap-4 mt-4 md:mt-0">
          <Link className="hover:underline" href="#">
            Terms of Service
          </Link>
          <Link className="hover:underline" href="#">
            Privacy Policy
          </Link>
          <Link className="hover:underline" href="#">
            Contact Us
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function BookIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}


function BookmarkIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  )
}


function ClipboardIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  )
}


function FileIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  )
}


function GlobeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  )
}
