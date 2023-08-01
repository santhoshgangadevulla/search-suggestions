const SuggestionItem = props => {
  const {suggestion, onClickSuggestion} = props
  const updateSuggestion = () => {
    onClickSuggestion(suggestion.suggestion)
  }

  return (
    <li
      style={{display: 'flex', alignItems: 'center'}}
      onClick={updateSuggestion}
    >
      <p>{suggestion.suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        width="20px"
        height="20px"
      />
    </li>
  )
}

export default SuggestionItem
