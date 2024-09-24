import { AboutSection } from '@/components/AboutSection/AboutSection'
import { AudioProvider } from '@/components/AudioProvider/AudioProvider'
import MainHeaderWrapper from '@/components/MainHeaderWrapper/MainHeaderWrapper'
import MainContainer from '@/components/MainContainer/MainContainer'
import PosterImage from '@/components/PosterImage/PosterImage'
import IntroText from '@/components/IntroText/IntroText'
import VisitUs from '@/components/VisitUs/VisitUs'
import { Waveform } from '@/components/Waveform'
import { AudioPlayer } from '@/components/player/AudioPlayer'
import Footer from '@/components/Footer/Footer'

export default function MainLayout({ children }) {
  return (
    <AudioProvider>
      <MainHeaderWrapper>
        <MainContainer>
          <PosterImage />
          <IntroText />
          <AboutSection className="mt-12 hidden lg:block" />
          <VisitUs />
        </MainContainer>
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
