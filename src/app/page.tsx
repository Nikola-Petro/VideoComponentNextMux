import Video from 'next-video';
import aaaa from '/videos/aaaa.mkv';
 
export default function Page() {
  return <Video src={aaaa} />;
}