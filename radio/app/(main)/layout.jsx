import { AboutSection } from '@/components/AboutSection/AboutSection'
import { AudioProvider } from '@/components/AudioProvider/AudioProvider'
import MainHeaderWrapper from '@/components/MainHeaderWrapper/MainHeaderWrapper'
import IntroText from '@/components/IntroText/IntroText'
import VisitUs from '@/components/VisitUs/VisitUs'
import { AudioPlayer } from '@/components/player/AudioPlayer'
import Footer from '@/components/Footer/Footer'
import Sidebar from '@/components/Sidebar/Sidebar'
import PosterImage from '@/components/PosterImage/PosterImage'
import GenreText from '@/components/GenreText/GenreText'
import { Waveform } from '@/components/Waveform'

export default function MainLayout({ children }) {
  return (
    <AudioProvider>
      <MainHeaderWrapper>
        <div className="relative z-10 mx-auto px-4 pb-4 pt-10 sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto  lg:px-8 lg:py-12 xl:px-12">
          <Sidebar />
          <PosterImage />
          <GenreText />
          <IntroText />
          <AboutSection />
          <VisitUs />
        </div>
      </MainHeaderWrapper>
      <main className="border-t border-gray-500 lg:relative lg:mb-28 lg:ml-112 lg:border-t-0 xl:ml-120">
        <Waveform className="absolute left-0 top-0 h-20 w-full" />
        <div className="relative">{children}</div>
      </main>
      <Footer />
      <div className="fixed inset-x-0 bottom-0 z-10 lg:left-112 xl:left-120">
        <AudioPlayer />
      </div>
    </AudioProvider>
  )
}
