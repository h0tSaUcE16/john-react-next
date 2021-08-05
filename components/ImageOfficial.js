

export default function ImageOfficial(props) {

  return (
    <>
      <img 
        src={props.source}
        alt={props.alternate} 
        style={{
          height: props.height,
          width: props.width,
          objectFit: 'cover',
          margin: props.margin ?? '8vh 4vw',
          zIndex: 1,
          padding: 10,
          backgroundColor: props.backgroundColor ?? '#FFFFFF',
          boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.2)',
          position: 'absolute',
          ...props.placement,
        }}
      />
    </>
  )
}