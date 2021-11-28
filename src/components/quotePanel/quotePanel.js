import './quotePanel.css';

const QuotePanel = (props) => {
    return (
        <div className = 'quote-panel-wrapper'>
            <h5 className = 'ind_question-title'>{props.title}</h5>
            <p className = 'ind_question-caption'>{props.caption}</p>
            {props.input}
        </div>
    )
}

export default QuotePanel;