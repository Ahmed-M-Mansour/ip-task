import './Box.css';


function Box ({title,value }) {
    return(
        <div className='panel-part'>
            <h2>{title}</h2>
            <p>{value}</p>
        </div>
    )
}

export default Box;