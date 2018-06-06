/* eslint-disable */
import React, { Component } from 'react';
import {
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock,
  Radio,
  ButtonToolbar,
  Button,
} from 'react-bootstrap';
import FormHeader from './FormHeader';
import './FeedForm.css';
import FormSelector from './FormSelector';

export default class FeedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedname: '',
      feedurl: '',
      feedfrequency: '',
      feedposttype: 'text',
      feedhashtag: '',
    };

    this.handleInput = this.handleInput.bind(this);
    this.feeddata = {};
  }

  handleInput(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  render() {
    return (
      <React.Fragment>
        <FormHeader />
        <form>
          <FormGroup>
            <ControlLabel bsClass="control-label">Nick Name</ControlLabel>
            <FormControl
              id="feedname"
              type="text"
              value={this.state.feedname}
              placeholder="Name of the feed"
              onChange={this.handleInput}
            />
            <FormControl.Feedback />
          </FormGroup>
          <FormGroup>
            <ControlLabel bsClass="control-label">Feed Url</ControlLabel>
            <FormControl
              id="feedurl"
              type="url"
              value={this.state.feedurl}
              placeholder="Feed URL"
              onChange={this.handleInput}
            />
            <FormControl.Feedback />
          </FormGroup>

          <FormGroup>
            <ControlLabel bsClass="control-label">Post Type</ControlLabel>
            <div>
              <Radio
                name="radioGroup"
                inline
                id="feedposttype"
                value="image"
                checked={this.state.feedposttype === 'image'}
                onChange={this.handleInput}
              >
                Image
              </Radio>{' '}
              <Radio
                name="radioGroup"
                inline
                id="feedposttype"
                value="text"
                checked={this.state.feedposttype === 'text'}
                onChange={this.handleInput}
              >
                Text
              </Radio>{' '}
            </div>
            <FormControl.Feedback />
          </FormGroup>

          <FormGroup>
            <ControlLabel bsClass="control-label">Check this feed for new posts every</ControlLabel>
            <div>
              <FormSelector options={['6 hours', '12 hours', '24 hours']} />
            </div>
          </FormGroup>

          <FormGroup>
            <ControlLabel bsClass="control-label">
              When new posts are found, send up to
            </ControlLabel>
            <div>
              <FormSelector options={['1 posts', '2 posts', '3 posts', '4 posts', '5 posts']} />
            </div>
          </FormGroup>

          <FormGroup>
            <ControlLabel bsClass="control-label">Append hashtag to each message</ControlLabel>
            <FormControl
              id="feedhashtag"
              type="text"
              value={this.state.feedhashtag}
              placeholder="Append Hashtags"
              onChange={this.handleInput.bind(this)}
            />
            <HelpBlock>
              We will append random 2 hashtags from your above hashtags list to your twitter and
              facebook accounts. Add hashtag like #socialmedia
            </HelpBlock>
            <FormControl.Feedback />
          </FormGroup>
          <ButtonToolbar>
            <Button bsStyle="primary">Submit</Button>
            <Button bsStyle="default">Cancel</Button>
          </ButtonToolbar>
        </form>
      </React.Fragment>
    );
  }
}
