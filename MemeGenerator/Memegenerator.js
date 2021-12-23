import React, { Component } from 'react'

class Memegenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            imageUrl: "https://pbs.twimg.com/profile_images/991438892422197250/Xmtgds___400x400.jpg",
            allMemesImgs: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data
                console.log(memes[0]);
                this.setState({
                    allMemesImgs: memes
                })
            })
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const randomImg = Math.floor(Math.random() * this.state.allMemesImgs.length)
        const randomImgUrl = this.state.allMemesImgs[randomImg].url
        this.setState({
            imageUrl: randomImgUrl
        })
    }

    render() {

        return (
            <>
                <h1>Memes</h1>
                <form onSubmit={this.handleSubmit}>
                    <input name="topText" value={this.state.topText} onChange={this.handleChange} placeholder='Top Text' /> <br /> <br />
                    <input name="bottomText" value={this.state.bottomText} onChange={this.handleChange} placeholder='Bottom Text' />
                </form>
                <br />
                <button className="btn btn-primary">Generate</button>

                <div id="meme-img my-4">
                    <img src={this.state.imageUrl} alt="memes" style={{ width: "10%" }} />
                    <h2 className='top'>{this.state.topText}</h2>
                    <h2 className='bottom'>{this.state.bottomText}</h2>
                </div>
            </>
        )
    }
}


export default Memegenerator