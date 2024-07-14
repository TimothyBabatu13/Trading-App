interface HType {
    children : string
}

interface H3Type extends HType {
  classname? : boolean
}
const H3 = ({ children, classname } : H3Type) => {

  return (
    <h3 className={classname ? 'mb-11' : 'mb-6'}>
        {children}
    </h3>
  )
}

export default H3

export const H1 = ({ children } : HType) => {
    return(
        <h1 className="mb-4">{children}</h1>
    )
}