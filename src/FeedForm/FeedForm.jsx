
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock,
  Radio,
  ButtonToolbar,
  Button,
} from 'react-bootstrap';
import {
  validateFeedName,
  validateFeedURL,
  validateFeedFrequency,
  validateFeedHashtag,
  validateFeedPost,
} from './FormValidation';
import FormHeader from './FormHeader';
import './FeedForm.css';
import FormSelector from './FormSelector';
import FormWarning from './FormWarning';

class FeedForm extends Component {
  constructor(props) {
    super(props);
    this.feedfrequencyOptions = ['Select Frequency', '6 hours', '12 hours', '24 hours'];
    this.noOfPostOptions = [
      'Select Number of post to read',
      '1 posts',
      '2 posts',
      '3 posts',
      '4 posts',
      '5 posts',
    ];
    this.state = {
      feedname: '',
      feedurl: '',
      feedfrequency: this.feedfrequencyOptions[0],
      feedposttype: 'text',
      feedhashtag: '',
      feedpost: this.noOfPostOptions[0],
      feednamewarning: '',
      feedurlwarning: '',
      feedfrequencywarning: '',
      feedpostwarning: '',
      formsubmit: false,
      formsubmitmsg: '',
      updatecount: 0,
      formsubmitstatus: '',
    };

    this.handleInput = this.handleInput.bind(this);
    this.feedData = {
      feedName: '',
      feedUrl: '',
      postType: '',
      readFrequency: '',
      noPost: '',
      hashtag: '',
      loginIds: '11157',
    };
    this.updateFeedData = this.updateFeedData.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  handleInput(event) {
    console.log('handle input of feed form');
    console.log('event id: ', event.target.id);
    console.log('event value: ', event.target.value);

    if (event.target.id === 'feedfrequency') {
      // this.setState({
      //   feedfrequency: event.target.value,
      // });
      this.state.feedfrequency = event.target.value;
      //this.setState(this.state.feedfrequency);
    } else if (event.target.id === 'feedpost') {
      this.state.feedpost = event.target.value;
      //this.setState(this.state.feedpost);
      // this.setState({
      //   feedpost: event.target.value,
      // });
    } else {
      this.setState({
        [event.target.id]: event.target.value,
      });
    }
    this.updateFeedData(event);
    // console.log(this.state);
  }

  createOptions(options) {
    const option = [];
    for (let i = 0; i < options.length; i++) {
      if (i === 0) {
        option.push(
          <option key={i} value="">
            {options[i]}
          </option>,
        );
      } else {
        option.push(
          <option key={i} value={options[i]}>
            {options[i]}
          </option>,
        );
      }
    }
    return option;
  }

  updateFeedData(event) {
    console.log(event);
    console.log(event.target);
    console.log('id: ', event.target.id);
    switch (event.target.id) {
      case 'feedname':
        const feedNameError = validateFeedName(event.target.value);
        if (feedNameError === '') {
          this.feedData.feedName = event.target.value;
          this.setState({
            feednamewarning: '',
          });
        } else {
          this.setState({
            feednamewarning: feedNameError,
          });
        }
        console.log('feedData Name: ', this.feedData.feedName);
        break;

      case 'feedurl':
        const feedUrlError = validateFeedURL(event.target.value);
        if (feedUrlError === '') {
          this.feedData.feedUrl = event.target.value;
          this.setState({
            feedurlwarning: '',
          });
        } else {
          this.setState({
            feedurlwarning: feedUrlError,
          });
        }
        console.log('feedData Url: ', this.feedData.feedUrl);
        break;

      case 'feedposttype':
        this.feedData.postType = event.target.value;
        console.log('feedData post type: ', this.feedData.postType);
        break;

      case 'feedfrequency':
        const feedFrequencyError = validateFeedFrequency(event.target.value);
        if (feedFrequencyError === '') {
          this.feedData.readFrequency = event.target.value;
          this.setState({
            feedfrequencywarning: '',
          });
        } else {
          this.setState({
            feedfrequencywarning: feedFrequencyError,
          });
        }

        break;

      case 'feedpost':
        const feedPostError = validateFeedPost(event.target.value);
        if (this.feedPostError === '') {
          this.feedData.noPost = event.target.value;
          this.setState({
            feedpostwarning: '',
          });
        } else {
          this.setState({
            feedpostwarning: feedPostError,
          });
        }
      case 'feedhashtag':
        this.feedData.hashtag = event.target.value;
        break;
    }
  }

  formSubmit() {
    console.log('feedData: ', this.feedData);
    console.log('this.state: ', this.state);
    if (
      this.state.feednamewarning === '' &&
      this.state.feedpostwarning === '' &&
      this.state.feedurlwarning === '' &&
      this.state.feedfrequencywarning === ''
    ) {
      this.props.addFeed(this.feedData);
      this.setState({
        formsubmit: true,
      });
    } else {
      this.setState({
        formsubmit: true,
        updatecount: 0,
        formsubmitstatus: 'fail',
        formsubmitmsg: 'Please provide fill in all the data fields',
      });
    }
  }

  componentWillMount() {}

  render() {
    console.log('props:', this.props);
    if (this.props.feedsubmitmsg.status !== null) {
      this.state.formsubmitmsg = this.props.feedsubmitmsg.msg;
      this.state.formsubmitstatus = this.props.feedsubmitmsg.status;
      console.log('form submit msg: ', this.state.formsubmitmsg);
      console.log('form submit status: ', this.state.formsubmitstatus);
      if (this.state.updatecount === 0) {
        this.setState({
          formsubmitmsg: this.props.feedsubmitmsg.msg,
          formsubmitstatus: this.props.feedsubmitmsg.status,
          updatecount: 1,
        });
      }
    }

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
              onBlur={this.updateFeedData}
            />

            <FormControl.Feedback />
            <FormWarning msg={this.state.feednamewarning} type={'warning'} />
          </FormGroup>
          <FormGroup>
            <ControlLabel bsClass="control-label">Feed Url</ControlLabel>
            <FormControl
              id="feedurl"
              type="url"
              value={this.state.feedurl}
              placeholder="Feed URL"
              onChange={this.handleInput}
              onBlur={this.updateFeedData}
            />
            <FormWarning msg={this.state.feedurlwarning} type={'warning'} />
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
              <select id="feedfrequency" onChange={this.handleInput} onBlur={this.updateFeedData}>
                {this.createOptions(this.feedfrequencyOptions)}
              </select>
              {/* <FormSelector
                id="feedfrequency"
                options={this.feedfrequencyOptions}
                changefunc={this.handleInput}
              /> */}
            </div>
            <FormWarning msg={this.state.feedfrequencywarning} type={'warning'} />
          </FormGroup>

          <FormGroup>
            <ControlLabel bsClass="control-label">
              When new posts are found, send up to
            </ControlLabel>
            <div>
              <select id="feedpost" onChange={this.handleInput} onBlur={this.updateFeedData}>
                {this.createOptions(this.noOfPostOptions)}
              </select>
            </div>
            <FormWarning msg={this.state.feedpostwarning} type={'warning'} />
          </FormGroup>

          <FormGroup>
            <ControlLabel bsClass="control-label">Append hashtag to each message</ControlLabel>
            <FormControl
              id="feedhashtag"
              type="text"
              value={this.state.feedhashtag}
              placeholder="Append Hashtags"
              onChange={this.handleInput}
              onBlur={this.updateFeedData}
            />
            <HelpBlock>
              We will append random 2 hashtags from your above hashtags list to your twitter and
              facebook accounts. Add hashtag like #socialmedia
            </HelpBlock>
            <FormControl.Feedback />
          </FormGroup>
          <ButtonToolbar>
            <Button bsStyle="primary" onClick={this.formSubmit}>
              Submit
            </Button>
            <a href="https://panel.socialpilot.co/feeds" className="btn btn-default">
              Cancel
            </a>
          </ButtonToolbar>
          <FormWarning
            msg={this.state.formsubmitmsg}
            type={this.state.formsubmitstatus === 'success' ? 'success' : 'warning'}
          />
        </form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  feedsubmitmsg: state.createfeed,
});

const mapDispatchToProps = dispatch => ({
  addFeed: feedData => {
    dispatch({
      type: 'ADD_FEED',
      payload: new Promise((resolve, reject) => {
        axios
          .post('http://192.168.1.146:3000/feed/create', feedData, {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55SWQiOjI1MjMwLCJyb2xlIjoidXNlciIsImNsaWVudElkIjoiMTQ4czBuaW82MzFnZmFoYmRlc3JndDJhNHUwMnZ6aXczcW8zZTdyayIsImlhdCI6MTUyODI5Mjg3OSwiZXhwIjoxNTMzNDc2ODc5fQ.FSoT4sOHl669za9xpqPSCCY0itcPIrhOnMgg0_LQhwQ',
              ContentType: 'application/json',
              UserAgent:
                'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.139 Safari/537.36',
            },
          })
          .then(response => {
            console.log(response);
            console.log(response.data);
            console.log(response.data.response.feedId);
            if (response.data.response.feedId !== undefined) {
              console.log('in if condition');
              resolve(response.data.response.feedId);
            }
          })
          .catch(error => {
            reject(error);
          });
      }),
    });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FeedForm);
