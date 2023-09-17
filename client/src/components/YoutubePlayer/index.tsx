
interface IYoutubeProps {
  embedId: string
}

const YoutubePlayer = ({ embedId, ...rest }: IYoutubeProps) => {
  return (
    <iframe
      width="900"
      height="540"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      {...rest}
    />
  )
}

export default YoutubePlayer
