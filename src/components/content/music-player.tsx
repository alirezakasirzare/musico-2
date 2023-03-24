import tw from 'tailwind-styled-components';
import { useEffect, useRef, useState } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';

const Container = tw.div`
  flex items-center gap-5
  py-3 px-8 m-3
  rounded-sm
  bg-gray-100
`;

const OuterLine = tw.div`
  bg-gray-200
  w-full h-1
  relative
  rounded-full overflow-hidden
`;

const InnerLine = tw.div<{ $high?: boolean }>`
  absolute left-0 top-0 
  w-1/2 h-full
  ${({ $high }) => ($high ? 'bg-gray-400' : 'bg-gray-300')}
`;

const Button = tw.button`
  text-gray-400
`;

function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  // play and pause music
  const [isOn, setIsOn] = useState(false);

  const togglePlay = () => {
    setIsOn((prevValue) => !prevValue);
  };

  useEffect(() => {
    if (isOn) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isOn]);

  // update time music
  const [percentTimeLeft, setPercentTimeLeft] = useState(0);
  const [percentTimeLoad, setPercentTimeLoad] = useState(0);

  const getForamtedTime = (timeLeft: number) => {
    const duration = audioRef.current?.duration;
    return ((timeLeft || 0) / (duration || 1)) * 100;
    // const timeLeft = audioRef?.current?.currentTime;
    // setPercentTimeLeft();
  };

  useEffect(() => {
    const timeoutCallback = () => {
      const buffered = audioRef.current?.buffered;
      if (buffered?.length) {
        const loadedTime = getForamtedTime(buffered.end(0));

        const timeLeft = audioRef?.current?.currentTime || 0;
        const formatedLeftTime = getForamtedTime(timeLeft);

        setPercentTimeLoad(loadedTime);
        setPercentTimeLeft(formatedLeftTime);
      }
    };

    const interval = setInterval(timeoutCallback, 500);
    return () => clearTimeout(interval);
  }, []);

  return (
    <>
      <audio
        className="hidden"
        src="https://media-vip.my-pishvaz.com/musicfa/tagdl/ati/Homayoun Shajaryan - Diare Asheghihayam (320).mp3?st=PUTLAJ8nngGOXP3XBuP3sg&e=1679648842"
        controls
        ref={audioRef}
      ></audio>

      <Container>
        <OuterLine>
          <InnerLine style={{ width: `${percentTimeLoad}%` }} />
          <InnerLine style={{ width: `${percentTimeLeft}%` }} $high />
        </OuterLine>
        <Button onClick={togglePlay}>{isOn ? <FaPause /> : <FaPlay />}</Button>
      </Container>
    </>
  );
}

export default MusicPlayer;
