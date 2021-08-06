

export default function ColorBlock(props) {

  return (
    <>
      <div style={{
        height: props.height,
        width: props.width,
        backgroundColor: props.backgroundColor,
        zIndex: 0,
        position: 'absolute',
        ...props.placement,
      }}
      />
    </>
  )
}