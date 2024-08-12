import dynamic from 'next/dynamic';
import lottieJson from '/public/GDSC-LottieFiles.json';

const Lottie = dynamic(() => import('react-lottie-player'), {
  ssr: false,
});

export default function GdscAnimation() {
  return <Lottie loop animationData={lottieJson} play />;
}
