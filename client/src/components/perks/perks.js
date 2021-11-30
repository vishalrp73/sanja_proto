import './perks.css';

const Perks = (props) => {
    return (
        <div className = 'perk-wrap'>
            <img className = 'perks-img' src = { props.img } alt = 'perks'/>
            <h5 className = 'perk-title'>{ props.title }</h5>
            <p className = 'perks-text'>
                { props.text }
            </p>
        </div>
    )
}

export default Perks;