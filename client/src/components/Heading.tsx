type HeadingProps = {
    title: string;
    subtitle?: string;
    center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle, center }) => {
  return (
    <div className={`${center ? 'heading headingCentered' : 'heading'}`}>
        <h1 className="headingTitle">{title}</h1>
        {subtitle && <h2 className="headingSubtitle">{subtitle}</h2>}
  
    </div>
  )
}

export default Heading