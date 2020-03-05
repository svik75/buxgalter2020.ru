import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Article extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            link: '',
            imgSrc: '',
            descriptionPath: '/'
        };
    }


    render() {
        return (
            <article className={this.props.styleA}>
                <span className="image">
                    <img src={this.props.imgSrc} alt="" />
                </span>
                <NavLink to={this.props.descriptionPath}>
                    <h2>{this.props.title}</h2>
                    <div className="content">
                        <p>{this.props.description}</p>
                    </div>
            </NavLink>
            </article>

        );
    }
}

export default Article;