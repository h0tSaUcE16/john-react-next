

export default function TitleText(props) {

  return (
      <h1 style={{
        fontSize: props.size, 
        margin: props.margin ?? 0,
        padding: props.padding ?? 0,
        fontFamily: props.fontFamily, 
        color: props.color,
        position: 'absolute',
        ...props.placement,
        zIndex: props.zIndex ?? 0,
        ...props.extraStyle,
      }}>
        {props.text ?? props.children}
      </h1>
  )
}