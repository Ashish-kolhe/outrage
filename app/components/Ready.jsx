import React from 'react'

const Ready = () => {
  return (
    <div>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-neutral-900 text-white">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Boost Your Career with OutRage!</h2>
                        <p className="mx-auto max-w-[700px] text-sm md:text-lg">Join thousands of aspiring professionals who have gained real-world experience and career-enhancing skills with OutRage internships & courses.</p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <a href="/browse"><button className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-white text-black hover:bg-neutral-200 h-11 rounded-md px-8 inline-flex items-center gap-2">Browse <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button></a>
                           
                            </div>
                            <p className="text-sm text-primary-foreground/80">Start Your Journey Today!</p>
                            </div>
                            </div>
                            </section>
    </div>
  )
}

export default Ready