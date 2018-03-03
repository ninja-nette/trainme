import React, { Component } from 'react'
import Results from './Results'
import axios from 'axios'



class Home extends Component {
    constructor() {
        super()
        this.state = {
            courses: '',
            keyword: '',
            borough: '',
            submitted: false
        }
    }

    componentDidMount() {
        this.getAllCourses()
    }

    getAllCourses = () => {
        axios
            .get(`https://data.cityofnewyork.us/resource/5teq-yyit.json`)
            .then(res => {
                this.props.updateCourses(res.data)
                this.setState({
                    courses: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }


    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({
            submitted: true
        })
    }


    render() {
        const { courses, keyword, borough, submitted } = this.state
        console.log(this.state)

        return (
            <div>
                {submitted ?
                    <Results courses={courses} />
                    :
                    <div>
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