import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Accordion from './Accordion'
import Article from './Article/index'
import { connect } from 'react-redux'

class ArticleList extends Accordion {
    state = {
        error: null
    }

    render() {
        const { articles, selectedDates, selectedArticles } = this.props;
        let filteredArticles = articles.filter(a => (!selectedDates.from || new Date(a.date) > new Date(selectedDates.from)) &&
            (!selectedDates.to || new Date(a.date) < new Date(selectedDates.to)));

        if (!!selectedArticles && selectedArticles.length > 0){
            filteredArticles = filteredArticles.filter(a => !!selectedArticles.filter(sa => sa.value === a.id)[0]);
        }

        if (this.state.error) return <h2>Error: {this.state.error.message}</h2>
        if (!filteredArticles.length) return <h3>No Articles</h3>

        const articleElements = filteredArticles.map((article) => <li key={article.id}>
            <Article article={article}
                isOpen={article.id === this.state.openItemId}
                onButtonClick={this.toggleOpenItemMemoized(article.id)}
            />
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

    componentDidCatch(error, info) {
        console.log('---', 123, error, info)
        this.setState({ error })
    }
}


ArticleList.defaultProps = {
    articles: []
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default connect((state) => ({
    articles: state.articles,
    selectedDates: state.selectedDates,
    selectedArticles: state.selectedArticles
}))(ArticleList)