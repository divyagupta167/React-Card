import './Card.css'



export const Card = (
    {
        imgSrc,
        imgAltText,
        title,
        description,
        buttonText,
        link
    }
) => {
  return (
    <div className='container'>
        {imgSrc && imgAltText && <img  className='image' src={imgSrc} alt={imgAltText} />}
   {title &&  <h1 className='title '>{title}</h1>}
   { description &&  <p className='description' >{description}</p>}
{
    buttonText &&   <a className='btn' href={link}>{buttonText}</a>
}
    </div>
  )
}
