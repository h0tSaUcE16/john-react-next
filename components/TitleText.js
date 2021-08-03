

export default function TitleText(props) {

  return (
    <>
    <div style={{
      fontFamily: props.fontFamily, 
      color: props.color,
      position: 'absolute',
      ...props.placement,
      zIndex: props.zIndex ?? 0,
    }}>
      <h1 style={{
        fontSize: props.size, 
        margin: props.margin ?? 0,
        padding: props.padding ?? 0,
      }}>
        {props.text}
      </h1>
    </div>
    </>
  )
}