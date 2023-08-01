import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onClickSuggestion = suggestion => {
    this.setState({
      searchInput: suggestion,
    })
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const {id, suggestion} = suggestionsList
    const searchResults = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          width="100px"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
          alt="search icon"
          width="10px"
        />
        <input
          type="search"
          onChange={this.onChangeSearchInput}
          placeholder="Search Google"
          value={searchInput}
        />
        <ul>
          {searchResults.map(eachSuggestion => (
            <SuggestionItem
              suggestion={eachSuggestion}
              key={eachSuggestion.id}
              onClickSuggestion={this.onClickSuggestion}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default GoogleSuggestions
