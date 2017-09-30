import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import accordeon from '../decorators/accordeon'
//import AccordeonComponent from './AccordeonComponent'

class ArticleList extends Component {
    //class ArticleList extends AccordeonComponent {


    render() {
        const { articles } = this.props
        if (!articles.length) return <h3>No Articles</h3>
        const articleElements = articles.map((article) => <li key={article.id}>
            <Article article={article}
                isOpen={article.id === this.props.openItemId}
                onButtonClick={this.props.toggleItem(article.id)}
            />
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}


ArticleList.defaultProps = {
    articles: []
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default accordeon(ArticleList)
//export default ArticleList