import React, { Component } from 'react'

class details extends Component {
    state = { 
        message: '',
        username: '',
        age: '',
        gender: '',
        relate: '',
        ff: '',
        fc: '',
        work: '',
        institution: '',
        course: '',
        fun: '',
        ffc: '',
        wish: '',
        exp: '',
        goals: '',
        hire: ''
       }
    
       userInput = (event) => {
         this.setState({
           username: event.target.value
         })
       }

       ageInput = (event) => {
           this.setState({
               age: event.target.value
           })
       }

       fcInput = (event) => {
        this.setState({
            fc: event.target.value
        })
    }

    ffInput = (event) => {
        this.setState({
            ff: event.target.value
        })
    }

    genderInput = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

       relateInput = (event) => {
        this.setState({
            relate: event.target.value
        })
    }

    courseInput = (event) => {
        this.setState({
          course: event.target.value
        })
      }

      instiInput = (event) => {
        this.setState({
          institution: event.target.value
        })
      }


    workInput = (event) => {
        this.setState({
            work: event.target.value
        })
    }

    funInput = (event) => {
        this.setState({
          fun: event.target.value
        })
      }

      wishInput = (event) => {
        this.setState({
          wish: event.target.value
        })
      }

      expInput = (event) => {
        this.setState({
          exp: event.target.value
        })
      }

      ffcInput = (event) => {
        this.setState({
          ffc: event.target.value
        })
      }

      goalsInput = (event) => {
        this.setState({
          goals: event.target.value
        })
      }

      hireInput = (event) => {
        this.setState({
          hire: event.target.value
        })
      }
 
    submitDetails = (event) => {
        this.setState({
        message: <p>My name is {this.state.username} and I am {this.state.age} years old i live in {this.state.address}. I am a graduate of {this.state.degree} from {this.state.institution} I am a {this.state.work}. Things i love to do for fun are {this.state.fun}. One of my Greatest wishes is {this.state.wish} One of my best experiences so far was {this.state.exp} My long terms goals are {this.state.goals} {this.state.hire}</p>
        })
    }

   
    render() {
        return (
            <div class="container">
             <h1>Hi! Welcome to BTD HUB</h1>
             <h3>Kindly fill the form below with your information</h3>
             <h3>Tell us about yourself</h3>
             <form >
             <div class="row">
        <div class="col-md-6 mx-auto">
          <div class="card card-body text-center mt-5">
  <div class="form-group">
    <label for="exampleInputEmail1">Your Name</label>
    <input type="text" class="form-control" id="validationDefault01" onChange={this.userInput} value={this.state.username}/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your details with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Age</label>
    <input type="text" class="form-control" id="validationDefault02" onChange={this.ageInput} value={this.state.age} required/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Gender</label>
    <input type="text" class="form-control" id="validationDefault02" onChange={this.genderInput} value={this.state.gender} required/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">relationship</label>
    <input type="text" class="form-control" id="validationDefault02" onChange={this.relateInput} value={this.state.relate} required/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">City</label>
    <input type="text" class="form-control" id="validationDefault03" onChange={this.addressInput} value={this.state.address} required/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Course</label>
    <input type="text" class="form-control" id="validationDefault03" onChange={this.courseInput} value={this.state.course} required/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Institution</label>
    <input type="text" class="form-control" id="validationDefault03" onChange={this.instiInput} value={this.state.institution} required/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Favourite Color</label>
    <input type="text" class="form-control" id="validationDefault03" onChange={this.fcInput} value={this.state.fc} required/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Favourite food</label>
    <input type="text" class="form-control" id="validationDefault03" onChange={this.ffInput} value={this.state.ff} required/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">work</label>
    <input type="text" class="form-control" id="validationDefault03" onChange={this.workInput} value={this.state.work} required/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Things i love to do for fun</label>
    <input type="text" class="form-control" id="validationDefault03" onChange={this.funInput} value={this.state.fun} required/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">What would you want to do if granted a wish?</label>
    <input type="text" class="form-control" id="validationDefault03" onChange={this.wishInput} value={this.state.wish} required/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Best experience so far</label>
    <input type="text" class="form-control" id="validationDefault03" onChange={this.expInput} value={this.state.exp} required/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Favourite football club</label>
    <input type="text" class="form-control" id="validationDefault03" onChange={this.ffcInput} value={this.state.ffc} required/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">What are your long term goals?</label>
    <input type="text" class="form-control" id="validationDefault03" onChange={this.goalsInput} value={this.state.goals} required/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Why should we hire you?</label>
    <input type="text" class="form-control" id="validationDefault03" onChange={this.hireInput} value={this.state.hire} required/>
  </div>
  <div class="form-group form-check">
  <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
    <label class="form-check-label" for="exampleCheck1">Sign In</label>
  </div>
  </div>
  </div>
  </div>
  <button type="submit" class="btn btn-primary mt-3" onClick={() => this.submitDetails()}>Submit</button>
  <p>{this.state.message}</p>
</form>
{/* My name is {this.state.username} and I am {this.state.age} years old i live in {this.state.address} Lagos. I am a {this.state.degree} graduate */}
    </div>
        )
    }
}

export default details;