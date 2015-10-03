
import React, { PropTypes, Component } from 'react';
import styles from './ImageTest.css';
import withStyles from '../../decorators/withStyles';
//import ParseComponent from 'parse-react';

import {Parse} from 'parse';
import ParseReact from 'parse-react';
var ParseComponent = ParseReact.Component(React);

class ImageTest extends ParseComponent {

    static propTypes = {
        path: PropTypes.string.isRequired,
        title: PropTypes.string
    }
    
    static contextTypes = {
        onSetTitle: PropTypes.func.isRequired,
    };

    mixins = [ParseReact.Mixin];

    observe() {
        return {
            images: new Parse.Query('Image')
        };
    }

    render() {
        const title = 'Image List';
        this.context.onSetTitle(this.props.title);
        return (
                <div className="ImageTest">
                    <div className="ImageTest-container">
                        <h1>{title}</h1>
                        {this.data.images.map( function(i) {
                               return <li>{i.objectId}</li>})
                        }
                        <p>...</p>
                    </div>
               </div>
       );
    }
}

export default ImageTest;
