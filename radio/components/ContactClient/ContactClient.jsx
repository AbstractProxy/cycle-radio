'use client'

// import { useState } from 'react'
// import { Field, Label, Switch } from '@headlessui/react'
import { Waveform } from '@/components/Waveform'
import { useCycleContext } from '@/components/CycleProvider/CycleProvider'
import PosterImage from '@/components/PosterImage/PosterImage'
import StreamLink from '@/components/HomeLink/StreamLink'
import { getCycleColor } from '@/utils/mode_check/mode_check'

export default function ContactClient() {
  // const [agreed, setAgreed] = useState(false)
  const cycle = useCycleContext()
  const { bg } = getCycleColor(cycle)

  return (
    <div className="isolate bg-black px-6  sm:pt-32 lg:px-8">
      <Waveform
        className="absolute left-0 top-0 h-20 w-full"
        isSidebarHidden={true}
      />
      <div className="pb-10">
        <PosterImage isContactPage={true} />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1155/678 w-144.5 rotate-30 bg-linear-to-tr sm:w-288.75 relative left-1/2 -z-10 max-w-none -translate-x-1/2 from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)]"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-slate-200 sm:text-5xl">
          Contact us
        </h2>
        <p className="mt-2 text-lg/8 text-slate-200">
          Got a cool idea or a question? Drop us a message!
        </p>
      </div>
      <form
        action="https://formsubmit.co/cycleradiofm@gmail.com"
        method="POST"
        className="mx-auto  max-w-xl sm:mt-20"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_next"
          value="https://cycle-radio.com/thank-you"
        />
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm/6 font-semibold text-slate-200"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md border border-gray-600 bg-black px-3.5 py-2 text-base 
             text-slate-200 outline-1 -outline-offset-1  placeholder:text-gray-400 
             focus:outline-2 focus:-outline-offset-2 "
                placeholder="Enter your first name"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm/6 font-semibold text-slate-200"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md border border-gray-600 bg-black px-3.5 py-2 text-base text-slate-200 outline-1 -outline-offset-1  placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 "
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm/6 font-semibold text-slate-200"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border border-gray-600 bg-black px-3.5 py-2 text-base text-slate-200 outline-1 -outline-offset-1  placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 "
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm/6  font-semibold text-slate-200"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md border border-gray-600 bg-black px-3.5 py-2 text-base text-slate-200 outline-1 -outline-offset-1  placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 "
                defaultValue={''}
                placeholder="Let us know what’s on your mind..."
              />
            </div>
          </div>
          {/* <Field className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className="data-checked:bg-indigo-600 group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className="shadow-xs group-data-checked:translate-x-3.5 size-4 transform rounded-full bg-black ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                />
              </Switch>
            </div>
            <Label className="text-sm/6 text-gray-600">
              By selecting this, you agree to our{' '}
              <a href="#" className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </a>
              .
            </Label>
          </Field> */}
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className={`shadow-xs block w-full rounded-md ${bg} px-3.5 py-2.5 text-center text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
          >
            Send message
          </button>
        </div>
        <StreamLink color={getCycleColor(cycle, true).color} />
      </form>
    </div>
  )
}
