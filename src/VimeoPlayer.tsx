import {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import Video from 'react-native-video';

type Props = {
  id: string;
  width: number;
  height: number;
};

export function VimeoPlayer({id, width, height}: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [config, setConfig] = useState<any | null>(null);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const _config = await fetch(
        `https://player.vimeo.com/video/${id}/config`,
      ).then(res => res.json());
      setIsLoading(false);
      setConfig(_config);
    })();
  }, [id]);
  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (!config) return <></>;
  const url = config?.request.files.progressive[0].url;
  return (
    <Video
      source={{uri: url}} // Can be a URL or a local file.
      style={[{width: width, height: height}]}
      repeat={true}
    />
  );
}
