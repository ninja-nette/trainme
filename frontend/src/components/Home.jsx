import React, { Component } from 'react'
import Results from './Results'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            keyword: '',
            borough: '',
            submitted: false
        }
    }

    // Handle search form input 
    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // Handle search form submit 
    handleSubmit = e => {
        e.preventDefault()
        this.setState({
            submitted: true
        })
    }

    // When user clicks on TrainMe logo inside results, user is brought to home search page 
    handleLogoClick = () => {
        this.setState({
            keyword: '',
            borough: '',
            submitted: false
        })
    }

    render() {
        const { keyword, borough, submitted } = this.state
        console.log(this.state)


        return (
            <div>
                {submitted ?
                    <Results keyword={keyword} borough={borough} handleLogoClick={this.handleLogoClick}/>
                    :
                    <div>
                        <nav className='navbar'>
                            <Link to='/'>TrainMe</Link>
                        </nav>
                        <form onSubmit={this.handleSubmit}>
                            <input type='text' name='keyword' value={keyword} placeholder='health aide' onChange={this.handleInput} />
                            <input type='text' name='borough' value={borough} placeholder='Brooklyn' onChange={this.handleInput} />
                            <input type='submit' value='Search' />
                        </form>
                    </div>
                }
            </div>
        )
    }
}

export default Home 