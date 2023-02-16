import './category-item.styles.scss'


const categoryItem = ({category}) => {
    // distructure
    const {imageUrl, title} = category;
    return(
        <div className="category-container">
        <div className='background-image' style={{
          backgroundImage: `url(${imageUrl})`
        }} />
        <div className="category-body-container">
          <h2 className="card-tittle">{title}</h2>
          <p className="button">Shop now</p>
        </div>
      </div>
    )

}

export default categoryItem