import './comparePanel.css';

const ComparePanel = (props) => {
    return (
        <div className = 'compare-panel'>

            {
                props.rec ? 
                <>
                <div className = 'compare-rec-box'>
                    <p className = 'compare-rec-text'>Recommended</p>
                </div>
                </> : <></>
            }

            
            
            <h3 className = {!props.rec ? 'compare-panel-title' : 'compare-panel-title-rec'} >
                {props.compare_title}
            </h3>
            <p className = 'compare-panel-text'>
                {props.compare_text}
            </p>
            
            <div className = 'compare-btn-wrap'>
                <input type = 'button' className = 'compare-btn'
                    value = 'Full Policy' id = 'fp-btn' />
                <input type = 'button' className = 'compare-btn'
                    value = 'Buy Now' id = 'compare-bn-btn' />
            </div>


        </div>
    )
}

export default ComparePanel;