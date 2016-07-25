
var React = require('react');


var ImageBoardView = React.createClass({
  getInitialState: function(){
    return {
      'displayForm': false,
      'url': '',
      'caption': ''
    };
  },
  componentWillMount: function(){
    this.props.images.on('add', this.update);
  },
  update: function(){
    this.forceUpdate();
  },
  handleFormToggle: function(e){
    this.setState({'displayForm': !this.state.displayForm});
  },
  handleNewImage: function(e){
    e.preventDefault();
    this.props.images.create({
      'url': this.state.url,
      'caption': this.state.caption
    });
  },
  handleUrlChange: function(e){
    this.setState({'url': e.target.value});
  },
  handleCaptionChange: function(e){
    this.setState({'caption': e.target.value});
  },
  render: function(){

    var imageForm = (
      <form onSubmit={this.handleNewImage} className="image-board-input-form col-md-12">
        <div className="row">
          <input onChange={this.handleUrlChange} id="url" className="picture-url col-md-offset-2 col-md-8" type="url" name="url" placeholder="Image Url" />
          <input onChange={this.handleCaptionChange} id="caption" className="picture-caption col-md-offset-2 col-md-8" type="text" name="caption" placeholder="Image Caption" />
        </div>
        <div className="row">
          <button className="btn btn-danger col-md-offset-6 col-md-2 cancel-add-image-button">Cancel</button>
          <input type="submit" className="btn btn-success col-md-2 add-image-button" value="Add Image"/>
        </div>
      </form>
    );

    var imageListing = this.props.images.map(function(image){
      return (
        <section key={image.cid} className="image-board col-md-offset-1 col-md-10">
          <div className="thumbnail col-md-offset-3 col-md-6">
            <img className="image" src={image.get('url')} alt="..." />
            <div className="caption-container">
              <h3 className="caption">{image.get('caption')}</h3>
            </div>
          </div>
        </section>
      );
    });
    console.log(this.props.images);

    return (
      <div className="row">
        <nav className="col-md-12 toggle-nav-bar">
          <div className="col-md-offset-1 plus-sign-container">
            <button onClick={this.props.handleFormToggle} className="img-circle"><i className="glyphicon glyphicon-plus-sign"/></button>
          </div>
        </nav>

        {imageForm}

        {imageListing}

      </div>
    )
  }
});

module.exports = ImageBoardView;
