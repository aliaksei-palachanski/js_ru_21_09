import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import Article from '../Article/index'
import {selectArticles} from '../../AC'
import {connect} from 'react-redux'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    handleChange = selected => this.props.selectArticles( selected )

    render() {
        const { articles } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={this.props.selectedArticles}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

export default connect((state) => ({
    articles: state.articles,
    selectedArticles: state.selectedArticles
}),{ selectArticles })(SelectFilter)